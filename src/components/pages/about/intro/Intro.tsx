'use client';

import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';

gsap.registerPlugin(ScrollTrigger);

interface IntroProps {}

const Intro: React.FC<IntroProps> = ({}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (!sectionRef?.current) return;

    ScrollTrigger.create({
      trigger: sectionRef?.current,
      start: 'top 80%',
      onEnter: () => {
        setAnimationTrigger(true);
      },
    });
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="bg-darkGray">
      {/* md:pb-section-lg xl:pb-section-xxl ---removed from below div */}
      <div className="container mx-auto overflow-hidden pb-sm pt-sm md:pt-section-md xl:pt-section-xl">
        <SplitTextAnimation
          el="p"
          stagger={0.025}
          duration={1.4}
          animate={animationTrigger}
          className="max-w-screen-lg overflow-hidden text-l"
        >
          A design agency specializing in product-driven brands. We work with
          global leaders and innovators, from startups to multinationals. Our
          lean, agile team brings together the right specialists for every
          project. With twenty years of experience, we execute with measurable
          results.
        </SplitTextAnimation>
      </div>

      <div className="container mx-auto">
        <h2 className="pt-sm text-section-subtitle text-lightGray md:pb-section-lg md:pt-section xl:mb-section-md xl:pb-section-xxl">
          Services
        </h2>
      </div>
    </section>
  );
};

export default Intro;
