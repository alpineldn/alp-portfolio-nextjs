'use client';

import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useStore } from '@/store/store';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionRefSm = useRef<HTMLParagraphElement>(null);
  const heroTextRefSm = useRef<HTMLHeadingElement>(null);
  const { firstVisit, setShowMenuButton } = useStore((store) => store);

  const createAnimation = (
    headerRef: React.RefObject<HTMLHeadingElement>,
    descriptionRef: React.RefObject<HTMLParagraphElement>,
  ) => {
    if (!headerRef?.current || !descriptionRef?.current) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      delay: firstVisit ? 2.7 : 1.5,
    });

    const header = new SplitType(headerRef.current, {
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
      mm.add('(min-width: 640px)', () =>
        createAnimation(heroTextRef, descriptionRef),
      );
      mm.add('(max-width: 639px)', () =>
        createAnimation(heroTextRefSm, descriptionRefSm),
      );
    });

    return () => context.revert();
  }, [heroTextRef, descriptionRef, heroTextRefSm, descriptionRefSm]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!containerRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        onLeave: () => {
          setShowMenuButton(true);
        },
        onEnterBack: () => {
          setShowMenuButton(false);
        },
      });
    });

    return () => context.revert();
  }, [containerRef]);

  return (
    <motion.div
      ref={containerRef}
      // variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative flex h-screen overflow-hidden text-light"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="/mountains_video_looped_optimized.mp4" type="video/mp4" />
      </video>

      <div className="flex h-screen flex-col justify-center max-lg:px-5 lg:max-w-7xl lg:pl-[8vw]">
        <h1 ref={heroTextRef} className="h1 hidden sm:block">
          Brand + Digital <br /> Design Studio
        </h1>
      </div>
      <p
        ref={descriptionRef}
        className="body-1 absolute bottom-[15%] left-0 hidden w-full max-lg:px-5 sm:block lg:max-w-7xl lg:pl-[8vw]"
      >
        Born in London, working Globally
      </p>

      <div
        data-scroll
        data-scroll-speed={0.1}
        className="absolute bottom-[10%] px-5 font-light sm:hidden"
      >
        <h1 ref={heroTextRefSm} className="h1 relative m-0 pb-5">
          Brand + Digital <br /> Design Studio
        </h1>
        <p ref={descriptionRefSm} className="body-1">
          Born in London, working Globally
        </p>
        {/* <p className="m-0 mb-[10px]">Designer & Developer</p> */}
      </div>
    </motion.div>
  );
};

export default Hero;