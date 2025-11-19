<script lang="ts">
    let username = $state("")

    $inspect(username)

    // $effect(() => {
    //     if(username) {
    //         console.log(`Username changed to: ${username}`);
    //     }
    // })
</script>

<input type="text" bind:value={username} placeholder="Enter your name" />
<h1>{username}</h1>

<style>
    
</style>