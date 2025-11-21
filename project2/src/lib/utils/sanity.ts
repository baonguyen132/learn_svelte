import type { ProcessProject, RawImageContent, RawTextContent, SanityProject, ProcessedImageContent, ProcessedTextContent } from '$lib/types/sanity.js';
import {createClient, type ClientConfig} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
    projectId: '559fyoh9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-09-29',
}

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntry(rawProjects: SanityProject) {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(rawProjects.image ? rawProjects.image : '').url();

    const processedProjects: ProcessProject = {
        name: rawProjects.name ? rawProjects.name : 'Untitled Project',
        company: rawProjects.company ? rawProjects.company : 'Unknown Company',
        dateAccomplished: rawProjects.dateAccomplished ? rawProjects.dateAccomplished : 'Unknown Date',
        stack: rawProjects.stack ? rawProjects.stack : [],
        slug: rawProjects.slug ? rawProjects.slug : 'no-slug',
        projectImageUrl,
        content:  rawProjects.content?.map(processProjectContent) ?? []

     }

     return processedProjects;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
    if(content._type === 'block') {
        const ProcessedTextContent: ProcessedTextContent = {
            type: 'text',
            style: content.style!,
            textToRender: content.children!.map(child => child.text).join('\n')
        }
        return ProcessedTextContent;
    }
    else {
        const builder = imageUrlBuilder(sanityClient);
        const projectImageUrl = builder.image(content).url();

        const processImage: ProcessedImageContent = {
            type: 'image',
            url: projectImageUrl
        }

        return processImage;
    }
}