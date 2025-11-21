import type { SanityWorkExperience } from "$lib/types/sanity.js";
import sanityClient, { processProjectEntry } from "$lib/utils/sanity.ts";
import type { PageLoad } from "./$types.js";

export const load: PageLoad = async () => {
    const workExperiences: SanityWorkExperience[] = await sanityClient.fetch(`*[_type == "devExperience"] | order(startDate desc)`)

    const rawProjects = await sanityClient.fetch(`*[_type == "project"] | order(dateAccomplished desc)`)

    const skills = await sanityClient.fetch(`*[_type == "skills"]`)

    const projects = rawProjects.map(processProjectEntry);

    return { workExperiences, projects, skills }
}