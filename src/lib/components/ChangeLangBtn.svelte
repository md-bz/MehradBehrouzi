<script lang="ts">
    let { lang } = $props();
</script>

<form action="/?/changeLang" method="post">
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
