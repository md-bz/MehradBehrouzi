import { load as i18nLoad } from "$lib/translations";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    const { cookies, locals } = event;
    const { i18n } = await i18nLoad(event);
    const lang = (i18n.locale === "en" ? "en" : "fa") as "fa" | "en";

    if (cookies.get("lang") !== lang) {
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
        i18n,
    };
};
