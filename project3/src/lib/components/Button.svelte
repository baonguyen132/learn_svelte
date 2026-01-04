<script lang="ts">
	import type { Snippet } from "svelte";

    interface BasicProps {
        children: Snippet;
        isSecondary: boolean;
        isDanger: boolean;
        isMenu: boolean;

    }

    interface ButtonProps extends BasicProps {
        handleClick?: (e: MouseEvent) => void;
        href?: string;
        type: 'button' | 'submit'
    }
    interface LinkProps extends BasicProps {
        href: string;
        handleClick?: (e: MouseEvent) => void;
    }

    type ComponentProps = ButtonProps | LinkProps;

    let {handleClick, href, children,isSecondary = false, isDanger = false, isMenu = false, ...props} : ComponentProps = $props() ;

</script>

{#if href}
    <a href={href} class="btn btn-a" class:btn-secondary={isSecondary} class:btn-danger={isDanger} class:btn-menu={isMenu}>
        {@render children()}
    </a>
{:else}
    <button {...props} onclick={handleClick} class="btn" class:btn-secondary={isSecondary} class:btn-danger={isDanger} class:btn-menu={isMenu}>
        {@render children()}
    </button>
{/if}

<style>
    .btn {
        padding: 12px 24px;
        min-width: 150px;
        text-align: center;
        background-color: black;
        border-radius: 12px;
        color: white;
        border: 1px solid white;
        font-weight: normal;
        font-size: 16px;
    }
    .btn-a  {
        display: inline-block;
        text-decoration: none;
    }
    .btn-a:hover {
        text-decoration: none;

    }

    .btn-secondary {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    .btn-danger {
        background-color: rgb(136,4,4);
    }
    .btn-menu {
        min-width: 150px;
        padding: 8px 20px;
    }
</style>