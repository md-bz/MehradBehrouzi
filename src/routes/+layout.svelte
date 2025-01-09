<script>
    import ChangeLanBtn from "$lib/components/ChangeLanBtn.svelte";
    import { loadTranslations } from "$lib/translations";
    import { t } from "$lib/translations";

    export let data;

    loadTranslations(data.lang, "/");
</script>

<body style="direction: {data.lang === 'en' ? 'ltr' : 'rtl'};">
    <header>
        <nav>
            <ul>
                <li>
                    <a href="/" style="color: #3b66f2;">MehradBz</a>
                </li>
            </ul>

            <ul>
                <!-- <li>
                    <a href="/about">{$t("nav.about")}</a>
                </li> -->
                <li>
                    <ChangeLanBtn lang={$t("nav.lang")} />
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
