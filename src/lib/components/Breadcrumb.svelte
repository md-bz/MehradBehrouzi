<script>
    import { page } from "$app/state";

    let parts = $derived(page.url.pathname.split("/").filter(Boolean));
    let lang = $derived(parts[0] === "fa" || parts[0] === "en" ? parts[0] : "");
    let base = $derived(lang ? "/" + lang : "");

    let segments = $derived(lang ? parts.slice(1) : parts);

    let breadcrumbs = $derived(
        segments.map((segment, index) => {
            const path = base + "/" + segments.slice(0, index + 1).join("/");
            return {
                name:
                    segment.charAt(0).toUpperCase() +
                    segment.slice(1).replace(/-/g, " "),
                path,
            };
        })
    );
</script>

<nav aria-label="Breadcrumb" class="breadcrumb" style="direction: ltr;">
    <ol>
        <li>
            <a href={base || "/"}>Home</a>
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
