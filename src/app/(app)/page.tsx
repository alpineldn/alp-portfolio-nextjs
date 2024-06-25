import Hero from '@/components/landing-page/Hero';
import Projects from '@/components/landing-page/Projects';
import SlidingImages from '@/components/landing-page/SlidingImages';
import Description from '@/components/landing-page/Description';
import SmoothScroll from '@/components/common/SmoothScroll/SmoothScroll';
import type { Project } from './work/page';
import sanityClient from '@/utils/sanity/client';
import { WORK_QUERY } from '@/utils/sanity/queries';

interface HomeProps {}

async function getPageData(): Promise<Project[]> {
  try {
    return await sanityClient.fetch(WORK_QUERY);
  } catch (error) {
    throw new Error(error as string);
  }
}

const Home: React.FC<HomeProps> = async () => {
  const projects = await getPageData();

  return (
    <SmoothScroll>
      <Hero />
      <Description />
      {!!projects?.length && <Projects projects={projects} />}
      <SlidingImages />
    </SmoothScroll>
  );
};

export default Home;
