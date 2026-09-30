<script lang="ts">
    import { page } from "$app/state";
    let { lang } = $props();
    let base = $derived("/" + (page.url.pathname.split("/")[1] ?? ""));
</script>

<form action="{base}?/changeLang" method="post">
    <button type="submit">{lang}</button>
</form>

<style>
    button {
        margin: 1px;
        padding: 0.5em;
        border: none;
        background: none;
        color: var(--pico-primary);
    }
</style>
