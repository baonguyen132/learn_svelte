<script lang="ts">
    import SideNavigation from '$components/Layout/SideNavigation.svelte';
    let { children } = $props();
</script>

<div class="auth-area">
    <SideNavigation />
    <div class="main-area">
        {@render children()}
    </div>
</div>

<style>
    .auth-area {
        display: flex;
        min-height: 100vh;
        overflow: hidden;
    }

    .main-area {
        flex: 1;
        padding: 40px 4vw 100px 40px;
        min-width: 0;
        overflow-y: auto;
    }
</style>