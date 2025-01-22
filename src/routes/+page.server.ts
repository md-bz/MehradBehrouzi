import { fail, redirect, type Cookies } from "@sveltejs/kit";
import { sendToTelegramPrivate } from "$lib/server/telegram";

export const load = async () => {}; // this is here because form is imported from props in page.svelte

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
            return fail(422, {
                nameIsInvalid: true,
                missing: true,
                message: "Name is required.",
            });
        }
        if (name.length < 3 || name.length > 20) {
            return fail(422, {
                nameIsInvalid: true,
                invalid: true,
                message: "Name must be between 3 and 20 characters.",
            });
        }

        const email = form.get("email") as string;
        if (!email) {
            return fail(422, {
                emailIsInvalid: true,
                missing: true,
                message: "Email is required.",
            });
        }
        if (!email.includes("@")) {
            return fail(422, {
                emailIsInvalid: true,
                invalid: true,
                message: "Email must be valid.",
            });
        }

        const description = form.get("description") as string;
        if (!description) {
            return fail(422, {
                descriptionIsInvalid: true,
                missing: true,
                message: "Description is required.",
            });
        }
        if (description.length > 400) {
            return fail(422, {
                descriptionIsInvalid: true,
                invalid: true,
                message: "Description cannot exceed 400 characters.",
            });
        }

        try {
            await sendToTelegramPrivate(
                ` New message\n\nName:${name}\nEmail: ${email}\n\nDescription: ${description}`
            );
        } catch (error) {
            console.error(error);
            return fail(500, {
                serverError: true,
                message: "something went wrong, please try again later",
            });
        }

        return { success: true };
    },
};
