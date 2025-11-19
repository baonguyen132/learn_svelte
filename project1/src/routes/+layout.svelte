<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Boxicons CSS -->
	<link href="https://cdn.boxicons.com/3.0.3/fonts/basic/boxicons.min.css" rel="stylesheet" />
	<link href="https://cdn.boxicons.com/3.0.3/fonts/brands/boxicons-brands.min.css"rel="stylesheet"/>
</svelte:head>

{@render children()}
