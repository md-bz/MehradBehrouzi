<script>
    let { logo, text = true, theme = "dark" } = $props();
</script>

<div class="logo">
    {#if theme === "light" && logo.lightTheme}
        <img src="/{logo.lightTheme}.svg" alt={logo.name} />
    {:else}
        <img src="/{logo.name}.svg" alt={logo.name} />
    {/if}
    {#if text}
        {logo.name.slice(0, 1).toUpperCase() + logo.name.slice(1)}
    {/if}
</div>

<style>
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        width: 120px;
        margin: 10px 0;
        text-align: center;
    }
    .logo img {
        width: 70%;
        height: auto;
    }
</style>
