<script>
    export let data;

    import { loadTranslations } from "$lib/translations";
    import { t } from "$lib/translations";
    const initLocale = "ir";
    loadTranslations(initLocale, "/");
</script>

<body>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="/">Bloggy</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/about">{$t("nav.about")}</a>
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
