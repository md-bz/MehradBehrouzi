import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import type { RequestHandler } from "./$types";

// shell pages exist in both languages; a post exists only in its own
export const GET: RequestHandler = async ({ url }) => {
    const { origin } = url;
    const shell = ["/fa", "/en", "/fa/blog", "/en/blog"];
    const posts = await db
        .select({ slug: post.slug, language: post.language })
        .from(post);

    const urls = [
        ...shell.map((path) => `<url><loc>${origin}${path}</loc></url>`),
        ...posts.map(
            (p) =>
                `<url><loc>${origin}/${p.language}/blog/${p.slug}</loc></url>`
        ),
    ];

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `${urls.join("\n")}\n</urlset>`,
        { headers: { "Content-Type": "application/xml; charset=utf-8" } }
    );
};
