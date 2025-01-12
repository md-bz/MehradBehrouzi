import i18n from "sveltekit-i18n";

const config = {
    loaders: [
        {
            locale: "en",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./en/home.json")).default,
        },
        {
            locale: "en",
            key: "nav",
            routes: ["/"],
            loader: async () => (await import("./en/nav.json")).default,
        },
        {
            locale: "fa",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./fa/home.json")).default,
        },
        {
            locale: "fa",
            key: "nav",
            routes: ["/"],
            loader: async () => await import("./fa/nav.json"),
        },
    ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
    config
);
