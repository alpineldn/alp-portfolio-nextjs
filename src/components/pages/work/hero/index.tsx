'use client';

import { useRef } from 'react';
import { useStore } from '@/store/store';
import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { firstVisit } = useStore((store) => store);
  const initialDelay = firstVisit ? 2.7 : 1.5;

  return (
    <section ref={sectionRef} className="text-light bg-dark">
      <div className="container mx-auto pt-section-xl lg:pt-[328px]">
        <SplitTextAnimation
          el="h1"
          delay={initialDelay}
          className="max-w-5xl text-xxl"
        >
          Projects
        </SplitTextAnimation>
      </div>
    </section>
  );
};
export default Hero;
