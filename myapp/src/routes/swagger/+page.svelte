<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui.css" />
  <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui-bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui-standalone-preset.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  onMount(() => {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger',
      url: '/swagger.json',
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      layout: "StandaloneLayout"
    });
  });
</script>
<div id="swagger"></div>
