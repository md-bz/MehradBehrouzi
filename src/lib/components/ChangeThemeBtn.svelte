<script>
    export let theme;
    import { enhance } from "$app/forms";
</script>

<form
    action="/?/changeTheme"
    method="post"
    use:enhance={() => {
        return async ({ update }) => {
            document.documentElement.setAttribute(
                "data-theme",
                theme === "light" ? "dark" : "light"
            );
            update();
        };
    }}
>
    <button type="submit">{theme}</button>
</form>

<style>
    button {
        margin: 1px;
        padding: 0.5em;
        border: none;
    }
</style>
