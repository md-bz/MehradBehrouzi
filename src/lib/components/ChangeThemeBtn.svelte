<script lang="ts">
    import { enhance } from "$app/forms";
    import MoonSun from "./MoonSun.svelte";
    interface Props {
        theme?: string;
    }

    let { theme = $bindable("dark") }: Props = $props();
</script>

<form
    action="/?/changeTheme"
    method="post"
    use:enhance={() => {
        return async ({ update }) => {
            theme = theme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", theme);
            update();
        };
    }}
>
    <button type="submit">
        <MoonSun {theme} />
    </button>
</form>

<style>
    button {
        margin: 8px 0;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: none;
    }
</style>
