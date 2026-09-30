import type { Config } from "sveltekit-i18n";
import { defineI18n } from "sveltekit-i18n/kit";

const config: Config = {
    initLocale: "fa",
    loaders: [
        {
            locale: "en",
            namespace: "blog",
            loader: async () => (await import("./en/blog.json")).default,
        },
        {
            locale: "en",
            namespace: "nav",
            loader: async () => (await import("./en/nav.json")).default,
        },
        {
            locale: "fa",
            namespace: "blog",
            loader: async () => (await import("./fa/blog.json")).default,
        },
        {
            locale: "fa",
            namespace: "nav",
            loader: async () => await import("./fa/nav.json"),
        },
        {
            locale: "en",
            namespace: "home",
            loader: async () => (await import("./en/home.json")).default,
        },
        {
            locale: "fa",
            namespace: "home",
            loader: async () => (await import("./fa/home.json")).default,
        },
        {
            locale: "en",
            namespace: "contact",
            loader: async () => (await import("./en/contact.json")).default,
        },
        {
            locale: "fa",
            namespace: "contact",
            loader: async () => (await import("./fa/contact.json")).default,
        },
    ],
};

export { config };

// The /fa | /en URL prefix wins; the cookie only covers paths that have no
// prefix yet (error pages), so the bare "/" always lands on the last choice.
export const { handle, load, use, get } = defineI18n(config, {
    preferredLocale: (event) => {
        const segment = event.url.pathname.split("/")[1];
        return segment === "fa" || segment === "en"
            ? segment
            : event.cookies?.get("lang");
    },
});
