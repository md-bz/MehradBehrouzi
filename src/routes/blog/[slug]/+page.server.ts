import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import type { User } from "@auth/sveltekit";
import { error, fail, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const csr = false;

export async function load({ params }: { params: { slug: string } }) {
    const info = (
        await db.select().from(post).where(eq(post.slug, params.slug))
    )[0];

    if (!info) return error(404, "Not found");

    const res = await fetch(info.url);
    const html = await res.text();

    const { id, ...sanitized } = info;
    return { html: html.toString(), info: sanitized };
}

export const actions = {
    async delete({
        params,
        locals,
    }: {
        params: { slug: string };
        locals: { getSession: () => Promise<{ user: User } | undefined> };
    }) {
        const slug = params.slug;
        const user = (await locals.getSession())?.user;
        if (!user) return fail(401, { message: "Unauthorized" });
        if (!slug) return fail(400, { message: "Slug is required" });

        await db.delete(post).where(eq(post.slug, slug));

        redirect(302, "/blog");
        return { success: true };
    },
};
