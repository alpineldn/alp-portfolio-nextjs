import sanityClient from '@/utils/sanity/client';
import { WORK_SLUGS_QUERY } from '@/utils/sanity/queries';
import SmoothScroll from '@/components/common/SmoothScroll/SmoothScroll';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { Project } from '../page';
import Hero from '@/components/work-detail-page/Hero';
import { PortableTextBlock } from 'next-sanity';

interface WorkDetailProps {
  params: { slug: string };
}

export interface ProjectFull extends Project {
  _createdAt: string;
  _updatedAt: string;
  images: SanityImageObject[];
  body: PortableTextBlock[];
}

async function getPageData(slug: string): Promise<ProjectFull> {
  try {
    return await sanityClient.fetch(WORK_SLUGS_QUERY(slug));
  } catch (error) {
    throw new Error(error as string);
  }
}

const WorkDetail: React.FC<WorkDetailProps> = async ({ params }) => {
  const { title, agency, client, categories, mainImage } = await getPageData(
    params.slug,
  );

  return (
    <SmoothScroll pageName={title}>
      <Hero
        title={title}
        client={client}
        agency={agency}
        categories={categories}
        mainImage={mainImage}
      />
    </SmoothScroll>
  );
};

export default WorkDetail;
