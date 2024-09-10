<script>
    import { enhance } from "$app/forms";
</script>

<form method="POST" action="?/login" use:enhance>
    <fieldset>
        <label>
            Email
            <input required type="email" name="email" />
        </label>
        <label>
            Password
            <input required type="password" name="password" />
        </label>
    </fieldset>

    <input type="submit" value="Login" />
</form>
