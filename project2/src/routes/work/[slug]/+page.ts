
import type { PageLoad } from "./$types.js";
import sanityClient, { processProjectEntry } from '$lib/utils/sanity.ts';

export const load: PageLoad = async ({params}) => {
    const {slug} = params;

    const rawProjects = await sanityClient.fetch(`*[_type == "project" && slug == $slug]`, { slug });

    if(rawProjects.length != 1) {
        return {
            status: 404,
            error: new Error('Project not found')
        }
    }

    return {
        project: processProjectEntry(rawProjects[0])
    };
}