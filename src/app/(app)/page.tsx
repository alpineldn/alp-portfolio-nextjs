import Page from '@/components/common/Page';
import Contact from '@/components/contact/Contact';
import Description from '@/components/pages/landing/description/Description';
import Hero from '@/components/pages/landing/hero/Hero';
import Projects from '@/components/pages/landing/projects/Projects';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import sanityClient from '@/utils/sanity/client';
import { CLIENTS_QUERY, META_QUERY, WORK_QUERY } from '@/utils/sanity/queries';
import { Metadata } from 'next';
import { Slug } from 'sanity';
import type { Project } from './work/page';
import Clients, { Client } from '@/components/pages/landing/clients/Clients';
import { SanityAsset } from '@sanity/image-url/lib/types/types';

interface HomeProps {}

export interface Meta {
  title: string;
  body: string;
  meta: {
    description: string;
    keywords: string[];
  };
  path: Slug;
  ogImage: SanityAsset;
}

export async function generateMetadata({}): Promise<Metadata> {
  const metaData: Meta = await sanityClient.fetch(META_QUERY('/'));
  const fallbackMeta: Meta = await sanityClient.fetch(
    META_QUERY('/fallback-meta'),
  );

  return generateMeta({
    title: metaData?.title ?? fallbackMeta?.title,
    description: metaData?.meta.description ?? fallbackMeta?.meta.description,
    og: {
      type: 'website',
      url: SITE_URL,
      sanityImg: metaData?.ogImage ?? fallbackMeta?.ogImage,
    },
    keywords: metaData?.meta?.keywords ?? fallbackMeta?.meta?.keywords,
  });
}

async function getPageData(): Promise<{
  projects: Project[];
  clients: Client[];
}> {
  try {
    const projects = await sanityClient.fetch(WORK_QUERY, {
      start: 0,
      end: 8,
    });
    const clients = await sanityClient.fetch(CLIENTS_QUERY);
    return { projects, clients };
  } catch (error) {
    throw new Error(error as string);
  }
}

const Home: React.FC<HomeProps> = async () => {
  const data = await getPageData();
  const { projects, clients } = data;

  return (
    <Page pageName="Alpine">
      <Hero />
      <Description />
      {!!projects?.length && <Projects projects={projects} />}
      {!!clients?.length && <Clients clients={clients} />}
      <Contact />
    </Page>
  );
};

export default Home;
