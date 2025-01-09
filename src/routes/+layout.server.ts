import type { Cookies } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    let lang = event.cookies.get("lang");

    if (!lang || (lang !== "en" && lang !== "ir")) {
        lang = "ir";
        event.cookies.set("lang", lang, { path: "/", expires: undefined });
    }
    return {
        session: await event.locals.auth(),
        lang,
    };
};
