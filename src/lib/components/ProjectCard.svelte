<script lang="ts">
    import GithubLink from "./GithubLink.svelte";

    let { name, description, githubLink, theme, siteLink } = $props();
</script>

<article>
    <h3>{name}</h3>
    <p>{description}</p>
    <footer>
        <GithubLink link={githubLink} {theme} width="35px" marginY="0" />
        {#if siteLink}
            <a href={siteLink} target="_blank" rel="noreferrer">Live site</a>
        {/if}
    </footer>
</article>

<style>
    article {
        text-align: center;
    }
    footer {
        display: flex;
        justify-content: space-around;
        margin-top: 1em;
    }
</style>
