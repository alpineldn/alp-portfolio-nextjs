'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useStore } from '@/store/store';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const heroTextRefSm = useRef<HTMLHeadingElement>(null);
  const { firstVisit } = useStore((store) => store);

  const createAnimation = (ref: React.RefObject<HTMLHeadingElement>) => {
    if (!ref?.current || !descriptionRef?.current) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      delay: firstVisit ? 2.7 : 1.5,
    });

    const header = new SplitType(ref.current, {
      types: 'lines,words',
      lineClass: 'overflow-hidden',
    });
    const description = new SplitType(descriptionRef.current, {
      types: 'lines,words',
      lineClass: 'overflow-hidden',
    });

    gsap.set([header.words, description.words], { y: '100%' });

    tl.to(header.words, {
      y: '0%',
      duration: 1.5,
      stagger: 0.05,
    }).to(
      description.words,
      {
        y: '0%',
        stagger: 0.05,
      },
      '-=.5',
    );
  };

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add('(min-width: 640px)', () => createAnimation(heroTextRef));
      mm.add('(max-width: 639px)', () => createAnimation(heroTextRefSm));
    });

    return () => context.revert();
  }, [heroTextRef, heroTextRefSm, descriptionRef]);

  return (
    <motion.div
      // variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative flex h-screen overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="/mountains_video_looped_optimized.mp4" type="video/mp4" />
      </video>
      {/* <Image
        priority
        className="object-cover"
        src="/images/background.jpg"
        fill={true}
        alt="background"
      /> */}

      <div className="flex h-screen flex-col justify-center max-lg:px-5 lg:max-w-7xl lg:pl-[8vw]">
        <h1
          ref={heroTextRef}
          className="relative m-0 hidden text-[clamp(3.5rem,5.5vw+1rem,7.5rem)] font-medium leading-[1.2] text-white sm:block"
        >
          Brand + Digital Design Studio
        </h1>
      </div>

      <div
        data-scroll
        data-scroll-speed={0.1}
        className="absolute bottom-[10%] text-lg font-light text-white max-sm:px-5 sm:left-[65%] sm:top-[35%]"
      >
        {/* <svg
          className="mb-[100px] scale-[2]"
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg> */}
        <h1
          ref={heroTextRefSm}
          className="relative m-0 pb-5 text-4xl font-medium leading-[1.2] text-white sm:hidden"
        >
          Brand + Digital Design Studio
        </h1>
        <p ref={descriptionRef} className="m-0 mb-[10px]">
          Born in London, working Globally
        </p>
        {/* <p className="m-0 mb-[10px]">Designer & Developer</p> */}
      </div>
    </motion.div>
  );
};

export default Hero;
