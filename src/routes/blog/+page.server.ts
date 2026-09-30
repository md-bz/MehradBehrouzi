import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import type { PageServerLoad } from "./$types";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ parent }) => {
    const { lang } = await parent();

    const posts = await db
        .select({
            name: post.name,
            author: post.author_name,
            slug: post.slug,
            description: post.description,
            language: post.language,
        })
        .from(post)
        .where(eq(post.language, lang));

    return { posts };
};
