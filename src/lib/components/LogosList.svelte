<script lang="ts">
    import LogoComponent from "./LogoComponent.svelte";

    let { logos } = $props();
</script>

<ul class="logos">
    {#each logos as logo}
        <LogoComponent {logo} />
    {/each}
</ul>

<style>
    .logos {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: auto;
        align-items: center;
        gap: 2vw;
    }
    @media screen and (max-width: 1080px) {
        .logos {
            padding: 50px 0;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 8px;
        }
    }
</style>
