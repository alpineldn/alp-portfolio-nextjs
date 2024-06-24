import Preloader from '@/components/common/Preloader';
import Hero from '@/components/work-page/Hero';
import Projects from '@/components/work-page/Projects';
import sanityClient from '@/utils/sanity/client';
import { WORK_QUERY } from '@/utils/sanity/queries';
import SmoothScroll from '@/components/common/SmoothScroll/SmoothScroll';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Slug } from 'sanity';

export interface Category {
  _id: string;
  title: string;
}
export interface Project {
  agency: string;
  mainImage: SanityImageObject;
  categories: Category[];
  client?: string;
  selectedWorks?: boolean;
  slug: Slug;
  title: string;
}
interface WorkProps {}

async function getPageData(): Promise<Project[]> {
  try {
    return await sanityClient.fetch(WORK_QUERY);
  } catch (error) {
    throw new Error(error as string);
  }
}

const Work: React.FC<WorkProps> = async () => {
  const projects = await getPageData();

  return (
    <SmoothScroll pageName="Work">
      <Hero />
      <Projects projects={projects} />
    </SmoothScroll>
  );
};

export default Work;
