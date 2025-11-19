<script lang="ts">
	import type { Snippet } from "svelte";


    interface UserInputInterface {
        username: String;
        children: Snippet;
    }

    let {username, children, ...props} : UserInputInterface = $props() 

</script>

<input type="text" bind:value={username} placeholder="Enter your name" />
<h1>{username}</h1>


{@render children()}

<style>
    
</style>