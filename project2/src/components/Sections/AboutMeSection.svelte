<script lang="ts">
	import { SectionHeline, Button , ExperienceTable } from '$components';
	import image from '$assets/about-me.jpeg';
	import { goto } from '$app/navigation';
	import type { SanityWorkExperience } from '$lib/types/sanity.js';


    interface AboutMeProps {
        workExperiences: SanityWorkExperience[];
    }

    let {workExperiences} : AboutMeProps = $props() ;

    function handleClick() {
        goto('/#form-contact')
    }
</script>

<section class="about-me mt-l">
	<SectionHeline title="About Me" id="about-me" />
	<div class="mt-m content-container default-margin">
        <div class="image">
            <img src={image} alt="About Me Image" />
        </div>
        <div class="text">
			<p>
				Hey, I'm Niklas, the driving force behind my freelancing agency specializing in web
				development and data science.
			</p>
			<p>
				With years of hands-on experience tackling real-world coding challenges and meeting diverse
				client needs, I've built a deep understanding of the tech landscape. But beyond coding, my
				true passion lies in teaching. I've had the privilege of guiding hundreds of aspiring
				developers, focusing on making coding both practical and accessible. My goal is to translate
				complex concepts into actionable skills that you can apply right away.
			</p>
			<p>
				Through my courses, I’m committed to sharing the insights and lessons I’ve learned in the
				field, so you can skip the pitfalls and fast-track your development journey. If you're eager
				to learn from real-world experience and practical know-how, let's dive in together.
			</p>
            <Button handleClick={handleClick} className="mt-m">Tell me about your project</Button>
		</div>
	</div>
    <ExperienceTable workExperiences={workExperiences} />
</section>

<style>
    .content-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        gap: 40px;
    }
    .image {
        flex: 4;
    }
    .image img{
        width: 100%;
        border-radius: 20px;
    }
    .text {
        flex: 5;
    }
</style>