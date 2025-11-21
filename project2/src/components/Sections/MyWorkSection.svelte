<script lang="ts">
	import {SectionHeline, ItemProject} from "$components";
	import type { ProcessProject } from "$lib/types/sanity.js";
    
    interface MyWorkSection {
        projects: ProcessProject[];
    }

    const {projects} : MyWorkSection = $props();
    

</script>

<section class="my-work-section">
    <SectionHeline title="My Work" id="my-work" /> 
    {#if projects.length % 2 === 1}
        <div class="project-list-old">
            <div class="project-main default-margin">
                <ItemProject project={projects[0]} />
            </div>
            <div class="project-list-item default-margin">
                {#each projects as project , index }
                    {#if index > 0}
                        <ItemProject project={project} />
                    {/if}
                {/each}
            </div>
        </div>
    {:else}
        <div class="project-list-even">
           <div class="project-list-item default-margin">
                {#each projects as project }
                    <ItemProject project={project} />
                {/each}
            </div>
        </div>
    {/if}
</section>

<style>
    .project-list-item {
        width: 100%;
        display: flex;
        align-items: start;
        gap: 25px;
    }
</style>