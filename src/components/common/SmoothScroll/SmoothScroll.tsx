'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader';

interface SmoothScrollProps {
  children: React.ReactNode;
  pageName?: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, pageName }) => {
  const [isLoading, setIsLoading] = useState(true);

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
        {isLoading && <Preloader pageName={pageName} />}
      </AnimatePresence>

      {children}
    </main>
  );
};
export default SmoothScroll;
