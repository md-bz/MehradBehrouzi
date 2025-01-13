import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies, locals }) => {
    let lang = cookies.get("lang");

    if (!lang || (lang !== "en" && lang !== "fa")) {
        lang = "fa";
        cookies.set("lang", lang, { path: "/", expires: undefined });
    }

    let theme = cookies.get("theme");

    if (!theme || (theme !== "light" && theme !== "dark")) {
        theme = "dark";
        cookies.set("theme", theme, { path: "/", expires: undefined });
    }

    return {
        session: await locals.auth(),
        lang,
        theme,
    };
};
