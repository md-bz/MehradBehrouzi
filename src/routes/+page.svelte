<script>
    export let data;
</script>

<ul>
    {#each data.posts as { name, slug, author, description }}
        <article>
            <header>{name} by {author}</header>
            {description}
            <footer><a href="./{slug}">Read</a></footer>
        </article>
    {/each}
</ul>
