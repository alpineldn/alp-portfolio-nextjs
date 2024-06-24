import { createClient } from 'next-sanity';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

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
