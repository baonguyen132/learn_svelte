<script lang="ts">
    import { Header } from "$components";
	import Footer from "$components/Footer.svelte";
    let {children} = $props();
</script>
<Header />
{@render children()}
<Footer />