<script>
    // this page is not linked in any routes, that is by design since no one should
    // be able to access it(and if that do cant log in) other then the programmer
    import { SignIn, SignOut } from "@auth/sveltekit/components";
    import { page } from "$app/stores";
</script>

<div>
    {#if $page.data.session}
        {#if $page.data.session.user?.image}
            <img
                src={$page.data.session.user.image}
                class="avatar"
                alt="User Avatar"
            />
        {/if}
        <span class="signedInText">
            <small>Signed in as</small>
            <br />
            <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
        <SignOut>
            {#snippet submitButton()}
                        <div  class="buttonPrimary">Sign out</div>
                    {/snippet}
        </SignOut>
    {:else}
        <span class="notSignedInText">You are not signed in</span>
        <SignIn provider="github" />
    {/if}
</div>
