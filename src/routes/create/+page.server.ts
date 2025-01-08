import { error, redirect } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { fail, type Cookies } from "@sveltejs/kit";
import { writeFile } from "fs/promises";
import markdownIt from "markdown-it";
import type { PageServerLoad } from "./$types";
import type { User } from "@auth/sveltekit";

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

        if (!file || !name || !description) return fail(422, { missing: true });
        file = file as File;

        const author = (await locals.getSession())?.user.email;

        if (!author) return fail(401, { unauthorized: true });

        if (file.type !== "text/markdown")
            return fail(422, { wrongType: true });

        if (file.size > maxSize * 1000 * 1000)
            return fail(422, { tooLarge: true });

        const slug = name.toString().replace(/\s/g, "-").toLowerCase();

        await db.insert(post).values({
            name: String(description),
            description: String(description),
            author,
            slug,
        });

        const md = markdownIt();
        const result = md.render(await file.text());

        await writeFile(`./static/blog/${slug}.html`, result);

        return { success: true };
    },
};
