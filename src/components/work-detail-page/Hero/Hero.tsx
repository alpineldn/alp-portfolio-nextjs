'use client';

import { Category } from '@/app/(app)/work/page';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { Slug } from 'sanity';
import SanityImage from '../../common/SanityImage/SanityImage';
import RoundedButton from '../../common/ui/RoundedButton';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';

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
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const detailContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!heroTextRef?.current || !detailContainerRef?.current) return;

      const projectInfoEls =
        detailContainerRef.current.querySelectorAll('ul > li');

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
      });

      const header = new SplitType(heroTextRef.current, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      gsap.set([header.words, projectInfoEls], { y: '100%' });

      tl.to(header.words, {
        y: '0%',
        duration: 1.5,
        stagger: 0.05,
        delay: 1.5,
      }).to(
        projectInfoEls,
        {
          y: '0%',
          opacity: 1,
          stagger: 0.05,
          duration: 0.9,
        },
        '-=.5',
      );
    });

    return () => context.revert();
  }, [heroTextRef]);

  return (
    <section>
      <div className="relative h-full w-full pt-[277px]">
        <div className="container mx-auto">
          <h1
            ref={heroTextRef}
            className="max-w-5xl text-[clamp(3.5rem,5.5vw+1rem,7.5rem)] font-normal leading-[1.2] tracking-tighter text-black"
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

            {!!previewURL?.current && (
              <div data-scroll data-scroll-speed={0.1}>
                <Link href={previewURL.current}>
                  <RoundedButton className="absolute right-0 top-0 flex h-[130px] w-[130px] cursor-pointer items-center justify-center rounded-[50%] bg-[#455CE9] text-white lg:h-[200px] lg:w-[200px]">
                    <p className="relative z-[1] m-0 font-light">Live Site</p>
                  </RoundedButton>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="relative z-[-1] mx-auto max-w-[1536px] !overflow-hidden py-[100px]">
          <div className="overflow-hidden">
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
    <ul className="grid gap-10 overflow-hidden pt-14 max-lg:grid-cols-1 lg:grid-flow-col lg:gap-20 lg:pt-[118px]">
      <li className="opacity-0">
        <div className="border-b-2 pb-4 text-xs uppercase text-gray-400 lg:pb-8">
          Client
        </div>
        <div className="pt-4 text-lg lg:pt-8">{client}</div>
      </li>
      {!!agency && (
        <li className="opacity-0">
          <div className="border-b-2 pb-4 text-xs uppercase text-gray-400 lg:pb-8">
            AGENCY
          </div>
          <div className="pt-4 text-lg lg:pt-8">{agency}</div>
        </li>
      )}

      <li className="opacity-0">
        <div className="border-b-2 pb-4 text-xs uppercase text-gray-400 lg:pb-8">
          CATEGORIES
        </div>
        <div className="pt-4 text-lg lg:pt-8">
          {categories.map(({ title, _id }, index) => (
            <span key={_id}>
              {title} {index !== categories.length - 1 && ', '}
            </span>
          ))}
        </div>
      </li>

      {!!previewURL?.current && (
        <li className="opacity-0">
          <div className="border-b-2 pb-4 text-xs uppercase text-gray-400 lg:pb-8">
            PREVIEW URL
          </div>

          <Link
            className="block pt-4 text-lg lg:pt-8"
            href={previewURL.current}
          >
            {previewURL.current}
          </Link>
        </li>
      )}
    </ul>
  );
};
