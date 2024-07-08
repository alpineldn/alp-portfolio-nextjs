import Contact from '@/components/Contact';
import Description from '@/components/landing-page/Description';
import Hero from '@/components/landing-page/Hero';
import Projects from '@/components/landing-page/Projects';
import sanityClient from '@/utils/sanity/client';
import { META_QUERY, WORK_QUERY } from '@/utils/sanity/queries';
import type { Project } from './work/page';
import Page from '@/components/common/Page';
import generateMeta from '@/utils/generate-meta';
import { Metadata } from 'next';
import { Slug } from 'sanity';
import { SITE_URL } from '@/utils/constants';

interface HomeProps {}

export interface Meta {
  title: string;
  body: string;
  meta: {
    description: string;
    keywords: string[];
  };
  path: Slug;
}

export async function generateMetadata({}): Promise<Metadata> {
  const metaData: Meta = await sanityClient.fetch(META_QUERY('/'));

  return generateMeta({
    title: metaData?.title ?? 'Alpine',
    description: metaData?.meta.description ?? "Alpine's work page.",
    og: {
      type: 'website',
      url: `${SITE_URL}/work`,
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

const Home: React.FC<HomeProps> = async () => {
  const projects = await getPageData();

  return (
    <Page pageName="Home">
      <Hero />
      <Description />
      {!!projects?.length && <Projects projects={projects} />}
      {/* <SlidingImages projects={projects} /> */}
      <Contact />
    </Page>
  );
};

export default Home;
