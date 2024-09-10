import { env } from "$env/dynamic/private";
import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { fail, type Cookies } from "@sveltejs/kit";
import { writeFile } from "fs/promises";
import markdownIt from "markdown-it";

async function getMe(jwt: string) {
    const res = await fetch(`${env.API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
    });
    return await res.json();
}

const maxSize = 5; //mb

export const actions = {
    post: async ({
        cookies,
        request,
    }: {
        cookies: Cookies;
        request: Request;
    }) => {
        const jwt = cookies.get("jwt");
        if (!jwt) return fail(401, { unauthorized: true });

        const data = await request.formData();

        const name = data.get("name");
        const description = data.get("description");
        let file = data.get("file");

        if (!file || !name || !description) return fail(422, { missing: true });
        file = file as File;

        const res = await getMe(jwt);
        if (res.status == "fail") return fail(401, { unauthorized: true });
        const author = res.data.document.name;

        if (file.type !== "text/markdown")
            return fail(422, { wrongType: true });

        if (file.size > maxSize * 1000 * 1000)
            return fail(422, { tooLarge: true });

        const slug = `${author}-${name}`;

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
