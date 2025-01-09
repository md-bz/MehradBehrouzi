<script>
    import { t } from "$lib/translations";
    export let data;
</script>

<ul>
    {#each data.posts as { name, slug, author, description }}
        <article>
            <!-- <header>{name} {$t("home.by")} {author}</header> -->
            {description}
            <footer><a href="./blog/{slug}">{$t("home.read")}</a></footer>
        </article>
    {/each}
</ul>
