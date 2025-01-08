import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";

export async function load() {
    const posts = db
        .select({
            name: post.name,
            author: post.author_name,
            slug: post.slug,
            description: post.description,
        })
        .from(post)
        .all();

    return { posts };
}
