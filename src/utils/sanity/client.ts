import { createClient } from 'next-sanity';

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage);
//   }

//   return v;
// }

export const projectId = '3uhoyu30';

const sanityClient = createClient({
  apiVersion: '2024-02-12',
  dataset: 'production',
  projectId,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
  //   stega: {
  //     enabled: false,
  //     studioUrl: '/studio',
  //   },
});

export default sanityClient;
