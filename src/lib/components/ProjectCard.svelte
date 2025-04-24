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
            <a
                href={siteLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit {name} website"
            >
                <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                        stroke={theme === "light" ? "#000" : "#fff"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
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
