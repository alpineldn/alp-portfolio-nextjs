'use client';

import { Category } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useStore } from '@/store/store';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { Slug } from 'sanity';
import SplitType from 'split-type';
import LinkEl from '@/components/common/ui/LinkEl';
import Link from 'next/link';

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

      tl.to(header.words, { y: '0%', stagger: 0.05 }).to(
        projectInfoEls,
        { y: '0%', opacity: 1, stagger: 0.05 },
        0.2,
      );

      if (previewURLMarqueeRef?.current) {
        tl.to(previewURLMarqueeRef.current, { y: '0%', opacity: 1 }, 0.4);
      }

      tl.to(imgContainerRef.current, { y: '0%', opacity: 1 }, 0.6);
    });

    return () => context.revert();
  }, [heroTextRef, imgContainerRef, detailContainerRef, previewURLMarqueeRef]);

  return (
    <section>
      <div
        ref={sectionRef}
        className="relative h-full w-full bg-dark pt-[130px] text-light lg:pt-[293px]"
      >
        <header className="pb-sm container mx-auto">
          <h1 ref={heroTextRef} className="heading-xxl max-w-5xl">
            {title}
          </h1>
        </header>

        <div className="mb-section-md relative z-[1] mx-auto w-full !overflow-hidden">
          <div
            ref={imgContainerRef}
            className="translate-y-[15px] overflow-hidden opacity-0"
          >
            <div
              // data-scroll
              // data-scroll-speed={width >= 767 ? 0.2 : 0.05}
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
        <div ref={detailContainerRef} className="container relative mx-auto">
          <Details
            client={client}
            agency={agency}
            categories={categories}
            previewURL={previewURL}
          />
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
    <div className="grid grid-cols-12">
      <ul className="heading-m col-span-9 grid max-lg:grid-cols-1 lg:grid-flow-col">
        <li className="translate-y-[50px] opacity-0">
          <div className="text-lightGray uppercase">Client:</div>
          <div className="">{client}</div>
        </li>
        {!!agency && (
          <li className="translate-y-[50px] opacity-0">
            <div className="text-lightGray uppercase">AGENCY:</div>
            <div className="">{agency}</div>
          </li>
        )}

        <li className="translate-y-[50px] opacity-0">
          <div className="text-lightGray uppercase">CATEGORIES:</div>
          <div className="">
            {categories.map(({ title, _id }, index) => (
              <span key={_id}>
                {title} {index !== categories.length - 1 && ', '}
              </span>
            ))}
          </div>
        </li>
      </ul>
      <div className="col-span-3 flex items-end justify-end">
        {!!previewURL?.current && (
          <Link
            className="interactable block"
            data-type="simple-hover"
            href={previewURL.current}
          >
            <LinkEl>View Site</LinkEl>
          </Link>
        )}
      </div>
    </div>
  );
};
