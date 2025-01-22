<script lang="ts">
    import GithubLink from "./GithubLink.svelte";

    let { name, description, link, theme } = $props();
</script>

<article>
    <h3>{name}</h3>
    <p>{description}</p>
    <footer>
        <GithubLink {link} {theme} width="35px" marginY="0" />
    </footer>
</article>

<style>
    article {
        text-align: center;
    }
</style>
