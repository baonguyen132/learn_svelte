<script>
	import { goto } from "$app/navigation";
	import {Button} from "$components";
    function handleClick() {
        goto('/#form-contact')
    }
</script>
<section class="hero-section default-margin">
    <h3>Hello I'm Nik</h3>
    <div class="underscore mb-m"></div>
    <h1>I'm a Svelte developer crafting intuitive and performant</h1>
    <h1 class="dark-grey mb-m">web experiences.</h1>

    <Button handleClick={handleClick} className="btn-black" >Let's talk</Button>
</section>

<style>
    .hero-section {
        padding-top: 60px;
    }
</style>