<script lang="ts">
	import { SectionHeline } from "$components";
	import type { SanitySkills } from "$lib/types/sanity.js";

    interface SkillSectionProps {
        skills: SanitySkills[];
    }

    const {skills} : SkillSectionProps = $props();
    
</script>
<section class="mt-m">
    <SectionHeline title="Skills" id="skills" />
    <div class="skill-list">
        <div class="skill-section default-margin mt-m">
            {#each skills as skill}
                <i class="{skill.iconClass}"></i>
            {/each}
        </div>
    </div>
</section>

<style>
    .skill-list {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .skill-section {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 20px;
        width: max-content;
        text-align: center;
    }
    .skill-section i {
        font-size: 100px;
        color: #333;
    }
</style>
