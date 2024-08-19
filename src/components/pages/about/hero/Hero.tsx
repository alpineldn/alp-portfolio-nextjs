'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="section-padding-t min-h-screen">
      <div className="flex flex-col gap-[5.62rem] max-lg:px-5 sm:gap-[7rem] lg:gap-[9rem] lg:px-[8vw]">
        <h1 className="heading-xxl lg:max-w-7xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>

        <div className="py-xs">
          <Image
            className="aspect-video h-full max-h-[650px] w-full object-cover"
            src="/images/funny.jpg"
            width={1920}
            height={1080}
            alt="Alt"
          />
        </div>

        <h3 className="heading-m max-w-[45rem]">
          Focusing on core areas, we combine our creative and technical skills
          to uncover brand’s essences.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
