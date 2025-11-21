<script lang="ts">
    let data = $props();
    let {post} = data.data;
</script>

{#if post}
    <h1>{post.title}</h1>
    <p>{post.content}</p>
{:else}
    <p>Loading article...</p>
{/if}