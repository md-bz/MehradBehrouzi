import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ cookies }) => {
    let lang = cookies.get("lang");
    if (!lang || (lang !== "en" && lang !== "fa")) {
        lang = "fa";
        cookies.set("lang", lang, { path: "/", expires: undefined });
    }

    const posts = await db
        .select({
            name: post.name,
            author: post.author_name,
            slug: post.slug,
            description: post.description,
            language: post.language,
        })
        .from(post)
        .where(eq(post.language, lang as "fa" | "en"));

    return { posts };
};
