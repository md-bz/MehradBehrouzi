<script>
    export let lang;
    import { enhance } from "$app/forms";
</script>

<form action="/?/changeLang" method="post" use:enhance>
    <button type="submit">{lang}</button>
</form>

<style>
    button {
        margin: 1px;
        border-radius: 50%;
        border: none;
        background: none;
    }
</style>
