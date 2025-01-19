<script lang="ts">
    import { t } from "$lib/translations";
    let { data } = $props();
</script>

<ul style="padding: 0; margin: 0;">
    {#each data.posts as { name, slug, author, description }}
        <article>
            <h3>{name}</h3>
            <hr />
            {description}
            <footer><a href="./blog/{slug}">{$t("blog.read")}</a></footer>
        </article>
    {/each}
</ul>
