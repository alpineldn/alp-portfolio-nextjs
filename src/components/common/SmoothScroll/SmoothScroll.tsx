'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader';
import { usePathname } from 'next/navigation';

interface SmoothScrollProps {
  children: React.ReactNode;
  pageName?: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, pageName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname();
  const time = pathName === '/' ? 2000 : 1000;

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, time);
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
