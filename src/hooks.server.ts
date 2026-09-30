import { handle as authHandle } from "./auth";
import { handle as i18nHandle } from "$lib/translations";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const { pathname } = event.url;
    const pathLang = /^\/(fa|en)(\/|$)/.exec(pathname)?.[1] ?? null;
    const lang = pathLang ?? (event.cookies.get("lang") === "en" ? "en" : "fa");

    if (
        !pathLang &&
        event.route.id &&
        event.request.method === "GET" &&
        !/\.[a-z0-9]+$/i.test(pathname)
    ) {
        // temporary + Vary: the target depends on the lang cookie
        return new Response(null, {
            status: 302,
            headers: {
                Location: `/${lang}${pathname === "/" ? "" : pathname}`,
                "Content-Language": lang,
                Vary: "Cookie",
            },
        });
    }

    const response = await i18nHandle({
        event,
        // i18n fills %lang%/%dir% in <html>; auth wraps the resolve underneath
        resolve: (e, opts) =>
            authHandle({
                event: e,
                resolve: (e2, opts2) => resolve(e2, { ...opts, ...opts2 }),
            }),
    });

    if (response.headers.get("content-type")?.includes("text/html")) {
        response.headers.set("Content-Language", lang);
        // theme comes from a cookie, so HTML differs per cookie
        response.headers.append("Vary", "Cookie");
    }

    return response;
};
