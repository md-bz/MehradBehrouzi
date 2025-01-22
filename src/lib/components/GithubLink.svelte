<script>
    let {
        link,
        theme = "dark",
        width = "30px",
        marginX = "0",
        marginY = "8px",
    } = $props();
</script>

<a href={link} target="_blank" rel="noreferrer">
    {#if theme === "light"}
        <img
            src="/github-dark.svg"
            alt="github"
            style="width: {width};margin: {marginY} {marginX};"
        />
    {:else}
        <img
            src="/github.svg"
            alt="github"
            style="width: {width};margin: {marginY} {marginX};"
        />
    {/if}
</a>
