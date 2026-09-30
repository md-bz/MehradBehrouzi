<script lang="ts">
    import SvelteHeadHelper from "$lib/components/SvelteHeadHelper.svelte";
    import { get } from "$lib/translations";
    let { data } = $props();
    let i18n = get();
</script>

<SvelteHeadHelper title="Blog" description="Blog of Mehrad Behrouzi" />

<ul style="padding: 0; margin: 0;">
    {#each data.posts as { name, slug, description }}
        <article>
            <h3>{name}</h3>
            <hr />
            {description}
            <footer><a href="./blog/{slug}">{i18n.t("blog.read")}</a></footer>
        </article>
    {/each}
</ul>
