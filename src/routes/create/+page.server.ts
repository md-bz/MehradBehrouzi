import { error, redirect } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { fail, type Cookies } from "@sveltejs/kit";
import markdownIt from "markdown-it";
import telegramifyMarkdown from "telegramify-markdown";
import type { PageServerLoad } from "./$types";
import type { User } from "@auth/sveltekit";
import { sendToTelegram } from "$lib/server/telegram";
import { put } from "@vercel/blob";
import { NeonDbError } from "@neondatabase/serverless";

const maxSize = 5; //mb

export const load: PageServerLoad = async (event) => {
    const session = (await event.parent()).session;
    if (!session?.user) throw error(401, "Unauthorized");

    return {};
};
export const actions = {
    post: async ({
        request,
        locals,
    }: {
        request: Request;
        locals: { getSession: () => Promise<{ user: User } | undefined> };
    }) => {
        const data = await request.formData();

        const name = data.get("name");
        const description = data.get("description");
        let file = data.get("file");
        const language = data.get("language");
        let slug = data.get("slug") as string;

        if (!file || !name || !description || !language)
            return fail(422, { missing: true });

        file = file as File;

        const author = (await locals.getSession())?.user;

        if (!author) return fail(401, { unauthorized: true });

        const { name: authorName, email: authorEmail } = author;

        if (!authorName || !authorEmail)
            return fail(422, { missingAuthor: true });

        if (language !== "fa" && language !== "en")
            return fail(422, { wrongLanguage: true });

        if (file.type !== "text/markdown")
            return fail(422, { wrongType: true });

        if (file.size > maxSize * 1000 * 1000)
            return fail(422, { tooLarge: true });

        if (language === "fa" && !slug) {
            return fail(422, { slugRequired: true });
        }

        slug = slug || name.toString();
        slug = slug.replace(/\s/g, "-").toLowerCase();

        const md = markdownIt();
        const fileText = await file.text();
        const result = md.render(fileText);

        const { url } = await put(`blog/${slug}.html`, result, {
            access: "public",
            token: env.BLOB_READ_WRITE_TOKEN,
        });

        try {
            await db.insert(post).values({
                name: String(name),
                description: String(description),
                author_email: authorEmail,
                author_name: authorName,
                slug,
                url,
                language,
            });
        } catch (error) {
            if (error instanceof NeonDbError && error.code === "23505") {
                return fail(422, { error: "slug already exists" });
            }

            return fail(500, { error: "internal server error" });
        }

        const telegramMarkdown = telegramifyMarkdown(fileText, "keep");
        await sendToTelegram(telegramMarkdown);

        return { success: true };
    },
};
