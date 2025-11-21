<script lang="ts">
	import type { ProcessedTextContent } from "$lib/types/sanity.js";

    const data = $props() ;

    const {company, name , dateAccomplished,stack,projectImageUrl,slug,content} = data.data.project;


    function getTagFromStyle(style: ProcessedTextContent["style"]) {
        if (style === "normal") return "p";
        return style
    }

    $inspect(content);

</script>

<main class="default-margin work-page">
    <h4 class="mt-m">{company}</h4>
    <div class="underscore"></div>
    <h2 class="mb-m">{name}</h2>
    <img class="project-image mb-m" src="{projectImageUrl}" alt="{name}" />
    <div class="content-project">
        <div class="project-info">
            <p><strong>Date Accomplished:</strong><br/> {dateAccomplished}</p>
            <p style="margin: 0;"><strong>Tech Stack:</strong><br /></p>
            <ul>
                {#each stack as tech}
                    <li>{tech}</li>
                {/each}
            </ul>
        </div>
        <div class="project-description">
            {#each content as block}
                {#if block.type === 'text'}
                    <svelte:element this={getTagFromStyle(block.style)}>
                        {block.textToRender}
                    </svelte:element>
                {:else}
                    <img src={block.url} alt="">
                {/if}
            {/each}

        </div>

    </div>
</main>

<style>
    .project-image {
        width: 100%;
        border-radius: 10px;
        box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08);
    }
    .content-project {
        display: flex;
        gap: 50px;
    }
    .project-info {
        flex: 3 ;
    }
    .project-description {
        flex: 9 ;
    }
</style>