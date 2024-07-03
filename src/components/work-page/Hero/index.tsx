'use client';

import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useStore } from '@/store/store';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const { firstVisit } = useStore((store) => store);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!heroTextRef?.current) return;

      const header = new SplitType(heroTextRef.current, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      gsap.set(header.words, { y: '100%' });

      gsap.to(header.words, {
        y: '0%',
        duration: 1.5,
        stagger: 0.05,
        delay: firstVisit ? 2.7 : 1.5,
        ease: 'power2.inOut',
      });
    });

    return () => context.revert();
  }, [heroTextRef]);

  return (
    <section className="text-light bg-dark">
      <div className="container mx-auto pt-[200px] md:pt-[277px]">
        <h1
          ref={heroTextRef}
          className="text-light max-w-5xl text-[clamp(3.5rem,5.5vw+1rem,7.5rem)] font-normal leading-[1.2] tracking-tighter"
        >
          Creating next level digital products
        </h1>
      </div>
    </section>
  );
};
export default Hero;
