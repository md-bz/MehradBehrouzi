import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { fail, type Cookies } from "@sveltejs/kit";
import { writeFile } from "fs/promises";
import markdownIt from "markdown-it";

const maxSize = 5; //mb

export const actions = {
    post: async ({
        cookies,
        request,
    }: {
        cookies: Cookies;
        request: Request;
    }) => {
        const data = await request.formData();

        const name = data.get("name");
        const description = data.get("description");
        let file = data.get("file");

        if (!file || !name || !description) return fail(422, { missing: true });
        file = file as File;

        if (file.type !== "text/markdown")
            return fail(422, { wrongType: true });

        if (file.size > maxSize * 1000 * 1000)
            return fail(422, { tooLarge: true });

        const author = "placeHolder";
        const slug = `${author}-${name}`;

        db.insert(post).values({
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
