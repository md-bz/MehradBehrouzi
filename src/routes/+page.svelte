<script>
    import { t } from "$lib/translations";
    export let data;
</script>

<ul style="padding: 0; margin: 0;">
    {#each data.posts as { name, slug, author, description }}
        <article>
            <header>{name}</header>
            {description}
            <footer><a href="./blog/{slug}">{$t("home.read")}</a></footer>
        </article>
    {/each}
</ul>
