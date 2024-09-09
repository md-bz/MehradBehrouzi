<script>
    import { enhance } from "$app/forms";
</script>

<form method="POST" action="?/post" enctype="multipart/form-data" use:enhance>
    <fieldset>
        <label>
            Post's name
            <input required type="text" name="name" />
        </label>
        <label>
            Description
            <input required type="text" name="description" />
        </label>
        <label>
            Markdown File
            <input type="file" name="file" />
        </label>
    </fieldset>

    <input type="submit" value="Post" />
</form>
