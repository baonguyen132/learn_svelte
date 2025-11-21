<script lang="ts">
    import logo from '$assets/app-logo.svg'
	import Button from '$components/Button.svelte';
</script>

<header>
    <a href="/">
        <img src={logo} alt="Go to homepage" class="logo" />
    </a>
    <ul>
       <li>
            <Button isMenu={true} href="/register">Register</Button>
       </li> 
       <li>
            <Button isMenu={true} isSecondary={true} href="/login">Login</Button>
       </li> 
    </ul>
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