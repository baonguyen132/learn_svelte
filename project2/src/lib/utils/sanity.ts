import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    projectId: '559fyoh9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-09-29',
}

const sanityClient = createClient(config);
export default sanityClient;