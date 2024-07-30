import Page from '@/components/common/Page';
import Contact from '@/components/contact';
import Hero from '@/components/pages/about/hero/Hero';
import Service from '@/components/pages/about/service/Service';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import sanityClient from '@/utils/sanity/client';
import { Metadata } from 'next';
import { Meta } from '../page';
import { META_QUERY } from '@/utils/sanity/queries';

export async function generateMetadata({}): Promise<Metadata> {
  const metaData: Meta = await sanityClient.fetch(META_QUERY('/about'));
  const fallbackMeta: Meta = await sanityClient.fetch(
    META_QUERY('/fallback-meta'),
  );

  return generateMeta({
    title: metaData?.title ?? fallbackMeta?.title,
    description: metaData?.meta.description ?? fallbackMeta?.meta.description,
    og: {
      type: 'website',
      url: `${SITE_URL}/about`,
      sanityImg: metaData?.ogImage ?? fallbackMeta?.ogImage,
    },
    keywords: metaData?.meta?.keywords ?? fallbackMeta?.meta?.keywords,
  });
}

const AboutPage: React.FC<{}> = () => {
  return (
    <Page pageName="About">
      <Hero />
      <Service />
      <Service />
      <Contact />
    </Page>
  );
};

export default AboutPage;
