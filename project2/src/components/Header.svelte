<script>
	import { goto } from "$app/navigation";
	import {Button} from "$components";
    function gotoContactForm() {
        goto('/#form-contact')
    }
</script>
<nav class="navbar default-margin">
    <a href="/" class="logo">NF</a>
    <div class="nav-links">
        <a href="/#about-me" class="nav-link">Skills</a>
        <a href="/#my-work" class="nav-link">My Work</a>
        <Button class="nav-bar" handleClick={gotoContactForm}>Contact</Button>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0px;
    }

    .logo {
        font-size: 35px;
        font-weight: bold;
        text-decoration: none;
        color: black;
    }
    .nav-links {
        display: flex;
        align-items: center;
        gap: 60px;
    }
    .nav-link:hover {
        text-decoration: underline;

    }
    
</style>