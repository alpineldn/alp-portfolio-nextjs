'use client';

import SanityImage from '@/components/common/sanity-image/SanityImage';
import { useStore } from '@/store/store';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface HeroProps {
  title: string;

  mainImage: SanityImageObject;
}

const Hero: React.FC<HeroProps> = ({ title, mainImage }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const previewURLMarqueeRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { firstVisit } = useStore((store) => store);

  useLayoutEffect(() => {
    if (!imgRef?.current) return;

    const context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(imgRef.current, {
        y: 0,
        scrollTrigger: {
          trigger: imgRef.current,
          start: '-120px bottom',
          end: 'bottom bottom',
          scrub: 3,
        },
      });
    });

    return () => context.revert();
  }, [imgRef]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!heroTextRef?.current) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.4 },
        delay: firstVisit ? 2.7 : 1.5,
      });

      const header = new SplitType(heroTextRef.current, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      gsap.set(header.words, { y: '100%' });
      tl.to(header.words, { y: '0%', stagger: 0.05 });

      if (previewURLMarqueeRef?.current) {
        tl.to(previewURLMarqueeRef.current, { y: '0%', opacity: 1 }, 0.4);
      }

      tl.to(imgContainerRef.current, { opacity: 1 }, 0.6);
    });

    return () => context.revert();
  }, [heroTextRef, imgContainerRef, previewURLMarqueeRef]);

  return (
    <section>
      <div
        ref={sectionRef}
        className="text-light relative h-full w-full bg-dark pt-[130px] lg:pt-[293px]"
      >
        <header className="container mx-auto pb-sm">
          <h1 ref={heroTextRef} className="heading-xxl max-w-5xl">
            {title}
          </h1>
        </header>

        <div className="relative z-[1] mx-auto mb-section-md w-full !overflow-hidden">
          <div ref={imgContainerRef} className="overflow-hidden opacity-0">
            <SanityImage
              ref={imgRef}
              sizes="100vw"
              src={mainImage}
              alt={title}
              className="aspect-auto h-full w-full translate-y-[80px] scale-110 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
