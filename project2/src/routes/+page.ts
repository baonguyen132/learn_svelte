import type { DevExperience } from "$lib/types/sanity.js";
import sanityClient from "$lib/utils/sanity.ts";
import type { PageLoad } from "./$types.js";

export const load: PageLoad = async () => {
    const workExperiences: DevExperience[] = await sanityClient.fetch(`*[_type == "devExperience"] | order(startDate desc)`)
    return { workExperiences }
}