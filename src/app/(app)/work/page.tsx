'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Projects from '@/components/landing-page/Projects';
import Preloader from '@/components/common/Preloader';

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

      <Projects />
    </main>
  );
};

export default Work;
