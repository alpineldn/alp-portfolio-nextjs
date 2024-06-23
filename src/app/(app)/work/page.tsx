'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/common/Preloader';
import Hero from '@/components/work-page/Hero';
import Projects from '@/components/work-page/Projects';

interface WorkProps {}
const Work: React.FC<WorkProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 1000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader pageName="Work" />}
      </AnimatePresence>
      <Hero />
      <Projects />
    </main>
  );
};

export default Work;
