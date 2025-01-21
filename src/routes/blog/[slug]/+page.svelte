<script lang="ts">
    let { data } = $props();
</script>

<!-- <header>{data.info.name} by {data.info.author_name}</header> -->

<svelte:head>
    <meta name="description" content={data.info.description} />
    <meta property="og:description" content={data.info.description} />
    <meta property="og:title" content={data.info.name} />
    <meta
        property="og:url"
        content="https://www.mehrad-bz.vercel.app/blog/{data.info.slug}"
    />
    <title>{data.info.name}</title>
</svelte:head>
<hr />
{#if data.session?.user}
    <form action="?/delete" method="post">
        <input type="hidden" name="slug" value={data.info.slug} />
        <button type="submit">Delete</button>
    </form>
{/if}
{@html data.html}
