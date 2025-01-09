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
            locale: "ir",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./ir/home.json")).default,
        },
        {
            locale: "ir",
            key: "nav",
            routes: ["/"],
            loader: async () => await import("./ir/nav.json"),
        },
    ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
    config
);
