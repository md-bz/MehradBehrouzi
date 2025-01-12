import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import type { Cookies } from "@sveltejs/kit";

export async function load() {
    const posts = await db
        .select({
            name: post.name,
            author: post.author_name,
            slug: post.slug,
            description: post.description,
        })
        .from(post);

    return { posts };
}

export const actions = {
    changeLang: async ({ cookies }: { cookies: Cookies }) => {
        const lang = cookies.get("lang");
        const newLang = lang === "en" ? "ir" : "en";
        cookies.set("lang", newLang, { path: "/", expires: undefined });
    },
};
