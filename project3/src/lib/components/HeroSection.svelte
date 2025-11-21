<script lang="ts">
    import heroImage from '$assets/hero.png'
	import Button from '$components/Button.svelte';
</script>

<section class="default-margin hero">
    <div class="hero-text">
        <h1>Book Nest</h1>
        <h3>Your personal book library</h3>
        <h4 class="mt-l">
            Create your very own digital library where you can keep track of every
            book you own, read and love.
        </h4>
        <h4 class="mb-m">
            Our app offers a beautifully designed, easy-to-use interface that makes managing your book collection a joy.
        </h4>
        <Button href="#signup">Sign up</Button>

    </div>
    <div class="hero-image">
        <img src={heroImage} alt="Hero Image" />
    </div>
</section>

<style>
    .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 100px;
        margin-bottom: 80px;
        gap: 60px;
    }
    .hero-text {
        flex: 7;
    }
    .hero-image {
        flex: 5;
    }
    .hero-image img {
        width: 100%;
    }
</style>