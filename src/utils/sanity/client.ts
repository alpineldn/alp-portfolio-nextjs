import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = '3uhoyu30';

const sanityClient = createClient({
  apiVersion: '2024-02-12',
  dataset: 'production',
  projectId,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
});

export default sanityClient;

export const imageBuilder = imageUrlBuilder(sanityClient);
