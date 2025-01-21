import { db } from "$lib/server/db";
import { post } from "$lib/server/db/schema";
import { fail, redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { eq } from "drizzle-orm";
import { sendToTelegramPrivate } from "$lib/server/telegram";

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

export const actions = {
    changeLang: async ({ cookies }: { cookies: Cookies }) => {
        const lang = cookies.get("lang");
        const newLang = lang === "en" ? "fa" : "en";
        cookies.set("lang", newLang, { path: "/", expires: undefined });
        redirect(302, "/");
    },
    changeTheme: async ({ cookies }: { cookies: Cookies }) => {
        const theme = cookies.get("theme");
        const newTheme = theme === "light" ? "dark" : "light";
        cookies.set("theme", newTheme, { path: "/", expires: undefined });
        redirect(302, "/");
    },
    contact: async ({ request }: { request: Request }) => {
        const form = await request.formData();

        const name = form.get("name") as string;
        if (!name) {
            return fail(422, { message: "name is required" });
        }
        if (name.length < 3 || name.length > 20) {
            return fail(422, {
                message: "name must be between 3 and 20 characters",
            });
        }

        const email = form.get("email") as string;
        if (!email) return fail(422, { message: "email is required" });

        if (!email.includes("@")) {
            return fail(422, { message: "email must be valid" });
        }

        const description = form.get("description") as string;
        if (!description) {
            return fail(422, { message: "description is required" });
        }
        if (description.length > 400) {
            return fail(422, {
                message: "description must be less than 400 characters",
            });
        }
        try {
            await sendToTelegramPrivate(
                ` New message\n\n name${name}\n\nEmail: ${email}\n\nDescription: ${description}`
            );
        } catch (error) {
            console.error(error);
            return fail(500, {
                error: "something went wrong, please try again later",
            });
        }

        return { success: true };
    },
};
