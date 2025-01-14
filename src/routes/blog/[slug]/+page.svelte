<script>
    export let data;
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
{@html data.html}
