import Page from '@/components/common/Page';
import Contact from '@/components/Contact';
import PrivacyPolicy from '@/components/privacy-policy/PrivacyPolicy';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';

export const metadata = generateMeta({
  title: 'Privacy Policy',
  description: '',
  og: {
    type: 'website',
    url: `${SITE_URL}/privacy-policy`,
    localImg: {
      showTitle: true,
    },
  },
});

const PrivacyPolicyPage: React.FC<{}> = () => {
  return (
    <Page pageName="Privacy Policy">
      <div className="min-h-dark bg-black pt-32">
        <PrivacyPolicy />
        <Contact />
      </div>
    </Page>
  );
};

export default PrivacyPolicyPage;
