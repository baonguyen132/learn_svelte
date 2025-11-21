<script lang="ts">
	import type { SanityWorkExperience } from "$lib/types/sanity.js";

	interface WorkExperience {
		workExperiences: SanityWorkExperience[];
	}

	const {workExperiences} : WorkExperience = $props() ;
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work">
		{#each workExperiences as job}
			<li class="mb-m job-item">
				<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
				<div class="company-and-date">
					<p>{job.company}</p>
					<p class="dark-grey">
						{job.startDate?.slice(0,7)}
						{#if job.endDate?.slice(0,7)}
							/ {job.endDate?.slice(0,7)}
						{:else}
							/ Present
						{/if}
					</p>
				</div>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past work<br />Experience</h2>
</section>

<style>
	.work-experience {
		display: flex;
		flex-direction: row;
		justify-content: start;
        flex-wrap: wrap;
		gap: 50px;
	}
    .work {
        flex: 4;
    }
	.job-item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e0e0e0;
	}
    .job-item .company-and-date {
        display: flex;
        justify-content: space-between;
    }
	.headline {
        flex: 4;
		text-align: right;
	}
</style>
