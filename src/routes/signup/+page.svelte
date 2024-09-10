<script>
    import { enhance } from "$app/forms";
</script>

<form method="POST" action="?/signup" use:enhance>
    <fieldset>
        <label>
            Name
            <input required type="text" name="name" />
        </label>
        <label>
            Email
            <input required type="email" name="email" />
        </label>
        <label>
            Password
            <input required type="password" name="password" />
        </label>
        <label>
            Password
            <input required type="password" name="passwordConfirm" />
        </label>
    </fieldset>

    <input type="submit" value="Signup" />
</form>
