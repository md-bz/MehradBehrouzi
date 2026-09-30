import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import type { User } from "@auth/sveltekit";
import { error, fail, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const csr = false;

export async function load({
    params,
    url,
}: {
    params: { slug: string };
    url: URL;
}) {
    const info = (
        await db.select().from(post).where(eq(post.slug, params.slug))
    )[0];

    if (!info) return error(404, "Not found");

    // one URL per language: a fa post only ever lives under /fa
    if (url.pathname.split("/")[1] !== info.language) {
        redirect(308, `/${info.language}/blog/${params.slug}`);
    }

    const res = await fetch(info.url);
    const html = await res.text();

    const { id, ...sanitized } = info;
    return { html: html.toString(), info: sanitized };
}

export const actions = {
    async delete({
        params,
        url,
        locals,
    }: {
        params: { slug: string };
        url: URL;
        locals: { getSession: () => Promise<{ user: User } | undefined> };
    }) {
        const slug = params.slug;
        const user = (await locals.getSession())?.user;
        if (!user) return fail(401, { message: "Unauthorized" });
        if (!slug) return fail(400, { message: "Slug is required" });

        await db.delete(post).where(eq(post.slug, slug));

        redirect(303, `/${url.pathname.split("/")[1]}/blog`);
        return { success: true };
    },
};
