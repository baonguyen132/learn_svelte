<script>
	import Header from '$components/Layout/Header.svelte';

    const {children} = $props();
</script>

<Header />
{@render children()}

