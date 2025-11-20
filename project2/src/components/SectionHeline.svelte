<script lang="ts">

    interface SectionHelineProps {
        title: string;
        id: string;
    }

	let { title,id }: SectionHelineProps = $props();
</script>

<div id="{id}" class="default-margin">
    <h2>{title}</h2>
    <div class="underscore"></div>
</div>