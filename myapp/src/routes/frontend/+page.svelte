<script lang="ts">
    let arrayRouter = $state([
        "test1", "test2", "test3", "test4","about", "contact" , "blog"
    ])
</script>

<ul>
    {#each arrayRouter as item}
        <li><a href="/frontend/{item}">{item}</a></li>
    {/each}
</ul>

