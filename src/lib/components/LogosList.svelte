<script>
    export let logos;
</script>

<ul class="logos">
    {#each logos as logo}
        <li class="logo">
            <img src="/{logo}.svg" alt={logo} />
            {logo.slice(0, 1).toUpperCase() + logo.slice(1)}
        </li>
    {/each}
</ul>

<style>
    .logos {
        padding: 100px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        margin: auto;
        align-items: center;
        gap: 8px;
    }
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
