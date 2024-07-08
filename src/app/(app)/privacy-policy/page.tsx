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
    <main className="min-h-dark bg-black pt-32">
      <PrivacyPolicy />
      {/* <Contact /> */}
    </main>
  );
};

export default PrivacyPolicyPage;
