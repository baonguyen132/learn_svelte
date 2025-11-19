<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let data = $props()
	
</script>


<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<header>
	<h1>My SvelteKit App</h1>
</header>

{@render data.children()}