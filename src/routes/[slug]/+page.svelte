<script>
    export let data;
</script>

<header>{data.info.name} by {data.info.author}</header>
<hr />
{@html data.html}
