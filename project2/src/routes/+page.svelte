<script lang="ts">
    import { HeroSection, AboutMeSection } from "$components";

    const {data} = $props() ;
    let {workExperiences} = data ;
    
</script>

<HeroSection  />
<AboutMeSection workExperiences={workExperiences} />