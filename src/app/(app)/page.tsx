import Page from '@/components/common/Page';
import Contact from '@/components/contact';
import Description from '@/components/pages/landing/description';
import Hero from '@/components/pages/landing/hero';
import Projects from '@/components/pages/landing/projects';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import sanityClient from '@/utils/sanity/client';
import { META_QUERY, WORK_QUERY } from '@/utils/sanity/queries';
import { Metadata } from 'next';
import { Slug } from 'sanity';
import type { Project } from './work/page';
import Clients from '@/components/pages/landing/clients/Clients';

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
      url: `${SITE_URL}`,
      localImg: '/images/flowers.jpg',
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
      <Clients />
      <Contact />
    </Page>
  );
};

export default Home;
