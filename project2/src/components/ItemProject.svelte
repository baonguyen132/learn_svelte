<script lang="ts">
	import type { ProcessProject, Item } from "$lib/types/sanity.js";

    interface ItemProjectProps {
        project: ProcessProject;
    }

    const {project} : ItemProjectProps = $props();
</script>

<div class="item-project mt-m">
    <div class="project-image">
        <img src={project.projectImageUrl} alt="{project.name}" />
    </div>
    <div class="information-project">
        <div class="infor-content">
            <h4>{project.name}</h4>
            <p>{project.company}</p>
        </div>
        <a href="/work/{project.slug}"><i class='bxr  bx-arrow-right'></i></a>
    </div>
</div>

<style>
    .item-project {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 20px;
    }
    .project-image img{
        width: 100%;
        border-radius: 20px;
        box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08);
    }
    .information-project {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: start;
    }
    .information-project h3 {
        font-weight: 600;
    }
    .information-project p {
        margin: 0px;
    }
    .information-project a {
        width: 100px;
        height: 50px;
        border: 1px solid black;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
    }
</style>