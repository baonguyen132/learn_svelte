<script lang="ts">
	import type { Snippet } from "svelte";


    interface ButtonProps {
        children: Snippet;
        handleClick: (e: MouseEvent) => void | (() => void),
        className: string
    }

    let {children,handleClick,className, ...rest} : ButtonProps = $props();
</script>

<button class="btn {className}" onclick={handleClick}>
    {@render children()}
</button>

<style>
    .btn {
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        background: black;
        color: white;
        padding: 14px 40px;
        font-size: 20px;
        border-radius: 10px;
    }
    .nav-bar {
        padding: 10px 24px;
        font-size: 20px;
        
    }
</style>