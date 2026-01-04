<script lang="ts">
    import logo from '$assets/app-logo.svg'
	import Button from '$components/Button.svelte';
	import { getUserState } from '$lib/state/user-state.svelte.ts'
    let userContext = getUserState();
    let { session , username } = $derived(userContext);
</script>

<header>
    <a href={session ? "/private/dashboard" : "/"}>
        <img src={logo} alt="Go to homepage" class="logo" />
    </a>
    {#if !session}
        <ul>
            <li>
                <Button isMenu={true} href="/register">Register</Button>
            </li> 
            <li>
                <Button isMenu={true} isSecondary={true} href="/login">Login</Button>
            </li> 
        </ul>

    {:else}
        <ul>
            <li>
                {username}
            </li>
            <li>
                <Button isMenu={true} handleClick={() => userContext.logout()} type="button">Logout</Button>
            </li> 
        </ul>

    {/if}
</header>

<style>
    header {
        display: flex ;
        justify-content: space-between;
        align-items: center;
        padding: 12px 4vw
    }
    .logo {
        height: 72px;
    }

    ul {
        display: flex;
        gap: 12px;
    }
</style>