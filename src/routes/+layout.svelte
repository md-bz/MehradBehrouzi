<script>
    import ChangeLangBtn from "$lib/components/ChangeLangBtn.svelte";
    import ChangeThemeBtn from "$lib/components/ChangeThemeBtn.svelte";
    import { loadTranslations } from "$lib/translations";
    import { t } from "$lib/translations";

    export let data;

    loadTranslations(data.lang, "/");

    if (typeof window !== "undefined") {
        const theme = data.theme || "dark";
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<body style="direction: {data.lang === 'en' ? 'ltr' : 'rtl'};">
    <header style="direction: ltr;">
        <nav>
            <ul>
                <li>
                    <a href="/" style="font-family: kanit; font-weight:600">
                        MehradBz
                    </a>
                </li>
                <li>
                    <ChangeThemeBtn theme={data.theme} />
                </li>
            </ul>

            <ul>
                <!-- <li>
                    <a href="/about">{$t("nav.about")}</a>
                </li> -->
                <li>
                    <ChangeLangBtn lang={data.lang} />
                </li>

                {#if data.session?.user}
                    <li><a href="/create">{$t("nav.create")}</a></li>
                {/if}
            </ul>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>
</body>
