import Contact from '@/components/contact';
import Page from '@/components/common/Page';
import Hero from '@/components/pages/work/hero';
import Projects from '@/components/pages/work/projects';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import sanityClient from '@/utils/sanity/client';
import { ALL_WORK_QUERY, META_QUERY } from '@/utils/sanity/queries';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { Metadata } from 'next';
import type { Slug } from 'sanity';
import { Meta } from '../page';

export interface Category {
  _id: string;
  title: string;
}

export interface Project {
  _id: string;
  agency: string;
  mainImage: SanityImageObject;
  categories: Category[];
  client?: string;
  selectedWorks?: boolean;
  slug: Slug;
  title: string;
}

export async function generateMetadata({}): Promise<Metadata> {
  const metaData: Meta = await sanityClient.fetch(META_QUERY('/projects'));
  const fallbackMeta: Meta = await sanityClient.fetch(
    META_QUERY('/fallback-meta'),
  );

  return generateMeta({
    title: metaData?.title ?? fallbackMeta?.title,
    description: metaData?.meta.description ?? fallbackMeta?.meta.description,

    og: {
      type: 'website',
      url: `${SITE_URL}/work`,
      sanityImg: metaData?.ogImage ?? fallbackMeta?.ogImage,
    },
    keywords: metaData?.meta?.keywords ?? fallbackMeta?.meta?.keywords,
  });
}

async function getPageData(): Promise<Project[]> {
  try {
    return await sanityClient.fetch(ALL_WORK_QUERY);
  } catch (error) {
    throw new Error(error as string);
  }
}

const Work: React.FC<{}> = async () => {
  const projects = await getPageData();

  return (
    <Page pageName="Work">
      <Hero />
      {!!projects?.length && <Projects projects={projects} />}
      <Contact />
    </Page>
  );
};

export default Work;
