'use client';

import { useStore } from '@/store/store';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const containerRef = useRef<HTMLElement>(null);
  const { setShowMenuButton } = useStore((store) => store);

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
    <section ref={containerRef} className="section-padding-t min-h-screen">
      <div className="flex flex-col gap-[5.62rem] max-lg:px-5 sm:gap-[7rem] lg:gap-[9rem] lg:px-[8vw]">
        <h1 className="heading-xxl lg:max-w-7xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>

        <h3 className="heading-m ml-auto max-w-[45rem]">
          Focusing on core areas, we combine our creative and technical skills
          to uncover brand’s essences.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
