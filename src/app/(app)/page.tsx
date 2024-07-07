import Contact from '@/components/Contact';
import Description from '@/components/landing-page/Description';
import Hero from '@/components/landing-page/Hero';
import Projects from '@/components/landing-page/Projects';
// import SlidingImages from '@/components/landing-page/SlidingImages';
import sanityClient from '@/utils/sanity/client';
import { WORK_QUERY } from '@/utils/sanity/queries';
import type { Project } from './work/page';
import Page from '@/components/common/Page';
import generateMeta from '@/utils/generate-meta';

interface HomeProps {}

export const metadata = generateMeta({
  title: 'Home',
  description: 'Alpine’s work page.',
  og: {
    type: 'website',
    url: 'https://alpineldn.com',
    localImg: {
      showTitle: true,
    },
  },
  keywords: ['design', 'development', 'creative', 'studio'],
});

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
      {!!projects?.length && (
        <>
          <Projects projects={projects} />
          {/* <SlidingImages projects={projects} /> */}
        </>
      )}
      <Contact />
    </Page>
  );
};

export default Home;
