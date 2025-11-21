<script lang="ts">
    import { HeroSection, AboutMeSection, MyWorkSection, SkillsSection, LetTalkSection, Header } from "$components";

    const {data} = $props() ;
    let {workExperiences, projects, skills} = data ;

</script>

<HeroSection  />
<AboutMeSection workExperiences={workExperiences} />
<MyWorkSection projects={projects}/>
<SkillsSection skills={skills} />
<LetTalkSection />