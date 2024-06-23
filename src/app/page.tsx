'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

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
      <Contact />
    </main>
  );
};

export default Home;
