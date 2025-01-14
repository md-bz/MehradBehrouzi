<script>
    import SvelteHead from "$lib/components/SvelteHead.svelte";
    import { t } from "$lib/translations";
    export let data;
</script>

<SvelteHead />

<ul style="padding: 0; margin: 0;">
    {#each data.posts as { name, slug, author, description }}
        <article>
            <h3>{name}</h3>
            <hr />
            {description}
            <footer><a href="./blog/{slug}">{$t("home.read")}</a></footer>
        </article>
    {/each}
</ul>
