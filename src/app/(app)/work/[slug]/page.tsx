import Page from '@/components/common/Page';
import Hero from '@/components/pages/work-detail/hero/Hero';
import Images from '@/components/pages/work-detail/images/Images';
import MoreWorks from '@/components/pages/work-detail/more-works/MoreWorks';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import sanityClient from '@/utils/sanity/client';
import { META_QUERY, WORK_SLUGS_QUERY } from '@/utils/sanity/queries';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'next-sanity';
import { notFound } from 'next/navigation';
import { Slug } from 'sanity';
import { Project } from '../page';
import Description from '@/components/pages/work-detail/description/Description';

interface WorkDetailProps {
  params: { slug: string };
}

interface Meta {
  title: string;
  description: string;
  ogImage: SanityImageObject;
  keywords: string[];
  projectName: string;
}

export interface NextProject {
  _id: string;
  title: string;
  slug: Slug;
  mainImage: SanityImageObject;
}

export interface ProjectFull extends Project {
  _createdAt: string;
  _updatedAt: string;
  images: SanityImageObject[];
  body: PortableTextBlock[];
  previewURL?: Slug;
  nextProject: NextProject;
}

export async function generateMetadata({ params }: WorkDetailProps) {
  const metaData: Meta = await sanityClient.fetch(
    `*[_type == "project" && slug.current == "${params.slug}"][0]{
        ...meta,
        "projectName": title,
    }`,
  );
  const fallbackMeta: Meta = await sanityClient.fetch(
    META_QUERY('/fallback-meta'),
  );

  return generateMeta({
    title:
      metaData?.title ??
      `${metaData?.projectName} - Alpine Design` ??
      fallbackMeta?.title,
    description: metaData?.description ?? fallbackMeta?.description,
    og: {
      type: 'website',
      url: `${SITE_URL}/work/${params.slug}`,
      sanityImg: metaData?.ogImage ?? fallbackMeta?.ogImage,
    },
    keywords: metaData?.keywords ?? fallbackMeta?.keywords,
  });
}

async function getPageData(slug: string): Promise<ProjectFull> {
  try {
    return await sanityClient.fetch(WORK_SLUGS_QUERY(slug));
  } catch (error) {
    throw new Error(error as string);
  }
}

const WorkDetail: React.FC<WorkDetailProps> = async ({ params }) => {
  const project = await getPageData(params.slug);
  if (!project) notFound();

  const {
    title,
    agency,
    client,
    categories,
    mainImage,
    previewURL,
    images,
    nextProject,
    body,
  } = project;

  return (
    <Page pageName={title}>
      <Hero title={title} mainImage={mainImage} />
      <Description
        body={body}
        client={client}
        agency={agency}
        categories={categories}
        previewURL={previewURL}
      />
      {!!images?.length && <Images images={images} />}
      <MoreWorks {...nextProject} />
    </Page>
  );
};

export default WorkDetail;
