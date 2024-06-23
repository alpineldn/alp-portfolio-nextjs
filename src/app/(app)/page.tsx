'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/common/Preloader';
import Hero from '@/components/landing-page/Hero';
// import Description from '@/components/landing-page/Description';
import Projects from '@/components/landing-page/Projects';
import SlidingImages from '@/components/landing-page/SlidingImages';
import Description from '@/components/landing-page/Description';

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <Projects />
      <SlidingImages />
    </main>
  );
};

export default Home;
