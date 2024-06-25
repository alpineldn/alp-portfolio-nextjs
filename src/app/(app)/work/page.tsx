import Hero from '@/components/work-page/Hero';
import Projects from '@/components/work-page/Projects';
import sanityClient from '@/utils/sanity/client';
import { WORK_QUERY } from '@/utils/sanity/queries';
import SmoothScroll from '@/components/common/SmoothScroll/SmoothScroll';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Slug } from 'sanity';
import Contact from '@/components/Contact';

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

async function getPageData(): Promise<Project[]> {
  try {
    return await sanityClient.fetch(WORK_QUERY);
  } catch (error) {
    throw new Error(error as string);
  }
}

const Work: React.FC<{}> = async () => {
  const projects = await getPageData();

  return (
    <SmoothScroll pageName="Work">
      <Hero />
      {!!projects?.length && <Projects projects={projects} />}
      <Contact />
    </SmoothScroll>
  );
};

export default Work;
