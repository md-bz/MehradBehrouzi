import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { readFile } from "fs/promises";

export const csr = false;

export async function load({ params }: { params: { slug: string } }) {
    const info = db.select().from(post).where(eq(post.slug, params.slug)).get();
    if (!info) return error(404, "Not found");

    const html = await readFile(`./static/blog/${info.slug}.html`);

    const { id, ...sanitized } = info;
    return { html: html.toString(), info: sanitized };
}
