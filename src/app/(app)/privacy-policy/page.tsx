import Page from '@/components/common/Page';
import Contact from '@/components/contact';
import PrivacyPolicy from '@/components/pages/privacy-policy/PrivacyPolicy';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';
import { Metadata } from 'next';
import { Meta } from '../page';
import sanityClient from '@/utils/sanity/client';
import { META_QUERY } from '@/utils/sanity/queries';

export async function generateMetadata({}): Promise<Metadata> {
  const metaData: Meta = await sanityClient.fetch(
    META_QUERY('/privacy-policy'),
  );

  return generateMeta({
    title: metaData?.title ?? 'Alpine',
    description: metaData?.meta.description ?? "Alpine's work page.",
    og: {
      type: 'website',
      url: `${SITE_URL}/privacy-policy`,
      sanityImg: metaData?.ogImage,
    },
    keywords: metaData?.meta?.keywords,
  });
}

const PrivacyPolicyPage: React.FC<{}> = () => {
  return (
    <Page pageName="Privacy Policy">
      <div className="min-h-dark bg-dark pt-32">
        <PrivacyPolicy />
        <Contact />
      </div>
    </Page>
  );
};

export default PrivacyPolicyPage;
