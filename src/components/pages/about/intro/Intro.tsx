'use client';

import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

interface IntroProps {}

const Intro: React.FC<IntroProps> = ({}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!bodyRef?.current || !sectionRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const bodyText = new SplitType(bodyRef.current, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });
      if (!!bodyText.words?.length) gsap.set(bodyText.words, { y: '100%' });

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.4 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
        },
      });

      if (!!bodyText.words?.length)
        tl.to(bodyText.words, { y: '0%', stagger: 0.025 }, 0.2);
    });

    return () => context.revert();
  }, [bodyRef, sectionRef]);

  return (
    <section ref={sectionRef} className="bg-darkGray">
      <div className="container mx-auto overflow-hidden pb-sm pt-sm md:pb-section-lg md:pt-section-md xl:pb-section-xxl xl:pt-section-xl">
        <p ref={bodyRef} className="max-w-screen-lg overflow-hidden text-l">
          A design agency specializing in product-driven brands. We work with
          global leaders and innovators, from startups to multinationals. Our
          lean, agile team brings together the right specialists for every
          project. With twenty years of experience, we execute with measurable
          results.
        </p>
      </div>
    </section>
  );
};

export default Intro;
