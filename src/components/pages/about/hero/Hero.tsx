'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/store/store';
import cn from '@/utils/cn';
import Image from 'next/image';
import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { firstVisit } = useStore((store) => store);
  const initialDelay = firstVisit ? 2.7 : 1.5;

  return (
    <motion.div
      ref={containerRef}
      initial="initial"
      animate="enter"
      className="text-light relative flex h-screen overflow-hidden"
    >
      {/*  */}

      <figure className="absolute h-full w-full object-cover">
        <Image
          width={1920}
          height={1080}
          sizes="100vw"
          src="/images/about_image.jpg"
          alt="About Image"
          className="aspect-auto h-full w-full object-cover"
        />
      </figure>
      {/* <video
        autoPlay
        loop
        muted
        className="home-hero absolute h-full w-full object-cover"
      >
        <source src="/mountains_video_4_optim.mp4" type="video/mp4" />
      </video> */}

      <div className="hidden h-screen flex-col justify-center max-lg:px-5 sm:flex sm:pl-[6vw] lg:max-w-7xl">
        <SplitTextAnimation el="h1" delay={initialDelay} className="text-xxl">
          About
        </SplitTextAnimation>
      </div>
      <SplitTextAnimation
        el="p"
        delay={initialDelay + 0.2}
        className={cn(
          'text-m',
          'absolute bottom-[15%] left-0 hidden w-full max-lg:px-5 sm:block sm:pl-[6vw] lg:max-w-7xl',
        )}
      >
        Lorem ipsum dolor sit amet.
      </SplitTextAnimation>

      <div
        data-scroll
        data-scroll-speed={0.1}
        className="container relative flex h-full w-full translate-y-5 flex-col justify-center sm:hidden"
      >
        <SplitTextAnimation
          el="h1"
          delay={initialDelay}
          className="relative m-0 pb-5 text-xxl"
        >
          About
        </SplitTextAnimation>
        <SplitTextAnimation
          el="p"
          delay={initialDelay + 0.2}
          className="absolute bottom-14 left-0 text-m max-lg:px-5"
        >
          Lorem ipsum dolor sit amet.
        </SplitTextAnimation>
      </div>
    </motion.div>
  );
};

export default Hero;
