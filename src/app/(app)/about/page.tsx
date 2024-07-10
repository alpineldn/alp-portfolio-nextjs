import Page from '@/components/common/Page';
import Contact from '@/components/contact';
import Hero from '@/components/pages/about/hero/Hero';
import Service from '@/components/pages/about/service/Service';
import { SITE_URL } from '@/utils/constants';
import generateMeta from '@/utils/generate-meta';

export const metadata = generateMeta({
  title: 'About',
  description: '',
  og: {
    type: 'website',
    url: `${SITE_URL}/about`,
    localImg: {
      showTitle: true,
    },
  },
});

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
