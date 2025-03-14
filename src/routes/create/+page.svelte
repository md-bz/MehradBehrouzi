<script>
    import { enhance } from "$app/forms";
    import SvelteHeadNoIndex from "$lib/components/SvelteHeadNoIndex.svelte";
    const { form } = $props();
</script>

<SvelteHeadNoIndex />
<form method="POST" action="?/post" enctype="multipart/form-data" use:enhance>
    {#if form?.error}
        <p style="color: var(--pico-del-color)};">{form.error}</p>
    {/if}
    {#if form?.success}
        <p style="color: var(--pico-ins-color)};">Success!</p>
    {/if}

    <fieldset>
        <label>
            Post's name
            <input required type="text" name="name" />
        </label>
        <label>
            Slug
            <input type="text" name="slug" />
        </label>
        <label>
            Description
            <input required type="text" name="description" />
        </label>
        <label>
            Language
            <select name="language">
                <option value="fa">فارسی</option>
                <option value="en">English</option>
            </select>
        </label>
        <label>
            Markdown File
            <input type="file" name="file" accept="text/markdown" />
        </label>
    </fieldset>

    <input type="submit" value="Post" />
</form>
