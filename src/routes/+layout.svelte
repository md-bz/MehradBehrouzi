<script lang="ts">
    import ChangeLangBtn from "$lib/components/ChangeLangBtn.svelte";
    import ChangeThemeBtn from "$lib/components/ChangeThemeBtn.svelte";
    import GithubLink from "$lib/components/GithubLink.svelte";
    import { loadTranslations } from "$lib/translations";
    import { t } from "$lib/translations";

    let { data, children } = $props();

    loadTranslations(data.lang, "/");

    if (typeof window !== "undefined") {
        const theme = data.theme || "dark";
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<div id="root" style={data.lang === "fa" ? "font-family:Vazirmatn;" : ""}>
    <header style="direction: ltr;">
        <nav>
            <ul>
                <li>
                    <a href="/" style="font-family: kanit; font-weight:600">
                        MehradBz
                    </a>
                </li>

                <li>
                    <a href="/blog">{$t("nav.blog")}</a>
                </li>
            </ul>

            <ul>
                {#if data.session?.user}
                    <li><a href="/create">{$t("nav.create")}</a></li>
                {/if}
                <li>
                    <ChangeLangBtn lang={$t("nav.lang")} />
                </li>
                <li>
                    <GithubLink
                        theme={data.theme}
                        link="https://github.com/md-bz"
                    />
                </li>
                <li>
                    <ChangeThemeBtn theme={data.theme} />
                </li>
            </ul>
        </nav>
    </header>

    <main style="direction: {data.lang === 'en' ? 'ltr' : 'rtl'};">
        {@render children?.()}
    </main>

    <hr />
</div>
