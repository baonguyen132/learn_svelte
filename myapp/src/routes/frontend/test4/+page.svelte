<script lang="ts">
    let username = $state("Username 1")
    let stateButton = $state(false)

    let array = $state(["dấdada", "adsdasd", "dấdsad"])
</script>

{#snippet userinput(example: string)}
    {#if stateButton}
        <input type="text" bind:value={username} placeholder="Enter your name" />
    {:else}
        <h1>{username}</h1>
    {/if}
{/snippet}

{#snippet renderItem(title: string)}
    <li>{title}</li>
{/snippet}

{@render userinput("Example 1")}

<button onclick={() => stateButton = !stateButton}>
    {#if !stateButton}
        Edit
    {:else}
        Save
    {/if}
</button>

<ul>
    {#each array as item}
        {@render renderItem(item)}
    {/each}
</ul>

<button onclick={() => array.push(new Date().getTime().toString())}>
    Add array item
</button>
<style>

</style>