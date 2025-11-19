<script lang="ts">
    const {children, ...props} = $props();
</script>

<button class="btn">
    {@render children()}
</button>

<style>
    .btn {
        padding: 15px 30px;
        border: 1px solid white;
        color: white;
        font-size: 20px;
        transition: .4s all;
        text-transform: uppercase;
        background: black;
    }
    .btn:hover {
        background: white;
        color: black;
    }
</style>