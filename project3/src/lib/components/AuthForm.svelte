<script lang="ts">
    import Button from '$components/Button.svelte'
    
    interface ComponentProps {
        isRegistration: boolean;
        form: {
            success?: boolean;
            message?: string[];
            email?: string;
            name?: string;
            password?: string;
            passwordConfirm?: string;
        } | null;
    }

    let {isRegistration = true , form} : ComponentProps = $props();
    let responseMessage: string[] = [];
    if (form && form.message) responseMessage = form.message;

</script>

<div class="default-margin auth-container">
    <h1 class="mb-l">{isRegistration ? 'Register' : 'Login'}</h1>
    <div class="form-and-social-login">

        <form class="auth-form" method="POST" action={isRegistration ? "" : "/login/?/signInWithPassword"}>

            {#if form && responseMessage.length > 0}
                {#if form.success === false}   
                    {#each responseMessage as message}
                        <div class="auth-error">
                            <p>{message}</p>
                        </div>
                    {/each}
                {/if}
            {/if}

            {#if isRegistration}
                <input type="text" placeholder="Name" name="name" value={form?.name || ""} />
            {/if}
            <input type="text" placeholder="Email" name="email" value={form?.email || ""} />
            <input type="password" placeholder="Password" name="password" value={form?.password || ""} />
            {#if isRegistration}
                <input type="password" placeholder="Confirm Password" name="confirmPassword" value={form?.passwordConfirm || ""} />
            {/if}
            <Button type="submit">{isRegistration ? 'Register' : 'Login'}</Button>
            {#if isRegistration}
                <p class="auth-hint mt-s">Already have an account? <a href="/login">Log In.</a></p>
            {:else}
                <p class="auth-hint mt-s">Do not have an account yet? <a href="/register">Register.</a></p>
            {/if}
        </form>
        <div class="social-login">
            <form method="post" action={isRegistration ? "/login/?/googleLogin" : "?/googleLogin"}>
                <Button type="submit">Continue with Google</Button>
            </form>
        </div>
    </div>
</div>

<style>
    .auth-container {
        margin-top: 80px;
    }
    .form-and-social-login {
        display: flex;
        gap: 40px;
    }
    .auth-form {
        flex: 6;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 15px;
        border-right: 1px solid grey;
        padding-right: 80px;
    }
    .auth-form input{
        width: 100%;
    }
    .auth-form input:last-of-type{
        margin-bottom: 15px;
    }
    .auth-hint {
        font-size: 16px;
        color: grey;
    }

    .auth-error {
        background-color: rgb(122, 32, 35);
        color: white;
        font-size: 18px;
        border-radius: 12px;
        padding: 12px;
        width: 100%;
        margin-bottom: 8px;
    }
    .auth-error:last-of-type {
        margin-bottom: 16px;
    }

    .social-login {
        flex: 6 ;
    }
</style>