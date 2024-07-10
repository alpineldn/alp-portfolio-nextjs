import { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/constants';
import sanityClient from '@/utils/sanity/client';
import { Slug } from 'sanity';

interface Work {
  slug: Slug;
  _updatedAt: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works: Work[] = await sanityClient.fetch(
    `*[_type == "project"] | order(_createdAt asc)[]{
        slug,
        _updatedAt
      }`,
  );

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...works.map((work) => ({
      url: `${SITE_URL}/work/${work.slug.current}`,
      lastModified: new Date(work._updatedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
