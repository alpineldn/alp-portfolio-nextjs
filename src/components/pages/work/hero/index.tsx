'use client';

import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useStore } from '@/store/store';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section ref={sectionRef} className="text-light bg-dark">
      <div className="container mx-auto pt-section-xl lg:pt-[328px]">
        <h1
          ref={heroTextRef}
          className="heading-xxl text-light max-w-5xl font-normal leading-[1.2] tracking-tighter"
        >
          Creating next level digital products
        </h1>
      </div>
    </section>
  );
};
export default Hero;
