'use client';

import { useLayoutEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
//import { slideUp, opacity } from './animation';
import Image from 'next/image';
import { useStore } from '@/store/store';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
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
          <h1 ref={heroTextRef} className="max-w-5xl text-xxl">
            About
          </h1>
        </header>

        <div className="relative z-[1] mx-auto w-full !overflow-hidden">
          <div ref={imgContainerRef} className="overflow-hidden opacity-0">
            <Image
              ref={imgRef}
              width={1920}
              height={1080}
              sizes="100vw"
              src="/images/alpine_bg.jpg"
              alt="About Image"
              className="aspect-auto h-full max-h-[876px] w-full translate-y-[80px] scale-110 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
