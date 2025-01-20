<script>
    let { logo, text = true } = $props();
</script>

<li class="logo">
    <img src="/{logo}.svg" alt={logo} />
    {#if text}
        {logo.slice(0, 1).toUpperCase() + logo.slice(1)}
    {/if}
</li>

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
