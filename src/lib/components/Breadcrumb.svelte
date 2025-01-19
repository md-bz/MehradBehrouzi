<script>
    import { page } from "$app/state";

    let segments = $derived(page.url.pathname
        .split("/")
        .filter((segment) => segment !== ""));

    let breadcrumbs = $derived(segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");
        return {
            name:
                segment.charAt(0).toUpperCase() +
                segment.slice(1).replace(/-/g, " "),
            path,
        };
    }));
</script>

<nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
        <li>
            <a href="/">Home</a>
        </li>

        {#each breadcrumbs as { name, path }, index}
            <span class="separator">/</span>
            <li>
                {#if index === breadcrumbs.length - 1}
                    <span class="current">{name}</span>
                {:else}
                    <a href={path}>{name}</a>
                {/if}
            </li>
        {/each}
    </ol>
</nav>
