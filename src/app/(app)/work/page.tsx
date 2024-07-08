import Contact from '@/components/Contact';
import Page from '@/components/common/Page';
import Hero from '@/components/work-page/Hero';
import Projects from '@/components/work-page/Projects';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import sanityClient from '@/utils/sanity/client';
import { META_QUERY, WORK_QUERY } from '@/utils/sanity/queries';
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

  return generateMeta({
    title: metaData?.title ?? 'Alpine',
    description: metaData?.meta.description ?? "Alpine's work page.",
    og: {
      type: 'website',
      url: SITE_URL,
      localImg: {
        showTitle: true,
      },
    },
    keywords: metaData?.meta?.keywords,
  });
}

async function getPageData(): Promise<Project[]> {
  try {
    return await sanityClient.fetch(WORK_QUERY, { start: 0, end: 8 });
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
