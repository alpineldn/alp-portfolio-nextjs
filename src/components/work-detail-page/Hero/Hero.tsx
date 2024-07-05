'use client';

import { Category } from '@/app/(app)/work/page';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { Slug } from 'sanity';
import SanityImage from '../../common/SanityImage/SanityImage';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import MarqueeText from '@/components/common/ui/MarqueeText';
import Link from 'next/link';
import { useStore } from '@/store/store';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroProps {
  title: string;
  client?: string;
  agency: string;
  categories: Category[];
  mainImage: SanityImageObject;
  previewURL?: Slug;
}

const Hero: React.FC<HeroProps> = ({
  title,
  agency,
  categories,
  client,
  mainImage,
  previewURL,
}) => {
  const { width = 0 } = useWindowSize();
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const previewURLMarqueeRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const detailContainerRef = useRef<HTMLDivElement>(null);
  const { firstVisit, setShowMenuButton } = useStore((store) => store);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!sectionRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: sectionRef.current,
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
  }, [sectionRef]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!heroTextRef?.current || !detailContainerRef?.current) return;

      const projectInfoEls =
        detailContainerRef.current.querySelectorAll('ul > li');

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.4 },
        delay: firstVisit ? 2.7 : 1.5,
      });

      const header = new SplitType(heroTextRef.current, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      gsap.set(header.words, { y: '100%' });

      tl.to(header.words, {
        y: '0%',
        stagger: 0.05,
      }).to(
        projectInfoEls,
        {
          y: '0%',
          opacity: 1,
          stagger: 0.05,
        },
        0.2,
      );

      if (previewURLMarqueeRef?.current) {
        tl.to(
          previewURLMarqueeRef.current,
          {
            y: '0%',
            opacity: 1,
          },
          0.4,
        );
      }

      tl.to(
        imgContainerRef.current,
        {
          y: '0%',
          opacity: 1,
        },
        0.6,
      );
    });

    return () => context.revert();
  }, [heroTextRef, imgContainerRef, detailContainerRef, previewURLMarqueeRef]);

  return (
    <section>
      <div className="relative h-full w-full bg-dark pt-[277px] text-light">
        <div ref={sectionRef} className="container mx-auto pb-10">
          <h1
            ref={heroTextRef}
            className="max-w-5xl text-[clamp(3.5rem,5.5vw+1rem,7.5rem)] font-normal leading-[1.2] tracking-tighter"
          >
            {title}
          </h1>

          <div ref={detailContainerRef} className="relative">
            <Details
              client={client}
              agency={agency}
              categories={categories}
              previewURL={previewURL}
            />
          </div>
        </div>

        <div className="relative z-[1] mx-auto max-w-[1536px] !overflow-hidden pb-[100px] pt-10">
          <div
            ref={imgContainerRef}
            className="translate-y-[15px] overflow-hidden opacity-0"
          >
            <div
              data-scroll
              data-scroll-speed={width >= 767 ? 0.2 : 0.05}
              className="overflow-hidden"
            >
              <SanityImage
                sizes="100vw"
                src={mainImage}
                alt={title}
                className="aspect-auto h-full w-full scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

const Details: React.FC<Omit<HeroProps, 'mainImage' | 'title'>> = ({
  client,
  agency,
  categories,
  previewURL,
}) => {
  return (
    <>
      <ul className="grid gap-10 pt-20 max-lg:grid-cols-1 lg:grid-flow-col lg:gap-20 lg:pt-[118px]">
        <li className="translate-y-[50px] opacity-0">
          <div className="body-3 border-b-2 pb-4 uppercase text-gray-400 lg:pb-8">
            Client
          </div>
          <div className="body-2 pt-4 lg:pt-8">{client}</div>
        </li>
        {!!agency && (
          <li className="translate-y-[50px] opacity-0">
            <div className="body-3 border-b-2 pb-4 uppercase text-gray-400 lg:pb-8">
              AGENCY
            </div>
            <div className="body-2 pt-4 lg:pt-8">{agency}</div>
          </li>
        )}

        <li className="translate-y-[50px] opacity-0">
          <div className="body-3 border-b-2 pb-4 uppercase text-gray-400 lg:pb-8">
            CATEGORIES
          </div>
          <div className="body-2 pt-4 lg:pt-8">
            {categories.map(({ title, _id }, index) => (
              <span key={_id}>
                {title} {index !== categories.length - 1 && ', '}
              </span>
            ))}
          </div>
        </li>

        {!!previewURL?.current && (
          <li className="translate-y-[50px] opacity-0">
            <div className="body-3 border-b-2 pb-4 uppercase text-gray-400 lg:pb-8">
              PREVIEW URL
            </div>

            <PageTransitionLink
              className="body-2 block pt-4 lg:pt-8"
              href={previewURL.current}
            >
              {previewURL.current}
            </PageTransitionLink>
          </li>
        )}
      </ul>
    </>
  );
};
