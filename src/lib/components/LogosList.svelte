<script>
    export let logos;
</script>

<ul class="logos">
    {#each logos as logo}
        <li class="logo">
            <img src="/{logo}.svg" alt={logo} />
        </li>
    {/each}
</ul>

<style>
    .logos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        margin: auto;
    }
    .logo {
        list-style: none;
        width: 60px;
        margin: 10px 2px;
    }
</style>
