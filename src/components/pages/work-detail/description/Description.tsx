'use client';

import { Category } from '@/app/(app)/work/page';
import LinkEl from '@/components/common/ui/LinkEl';
import gsap from 'gsap';
import { PortableText, PortableTextBlock } from 'next-sanity';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { Slug } from 'sanity';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

interface DescriptionProps {
  body: PortableTextBlock[];
  client?: string;
  agency: string;
  categories: Category[];
  previewURL?: Slug;
}

const Description: React.FC<DescriptionProps> = ({
  agency,
  body,
  categories,
  client,
  previewURL,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailContainerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!detailContainerRef?.current || !bodyRef?.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const bodyText = new SplitType(
        Array.from(bodyRef.current.childNodes) as HTMLElement[],
        {
          types: 'lines,words',
          lineClass: 'overflow-hidden',
        },
      );

      gsap.set(bodyText.words, { y: '100%' });
      const projectInfoEls =
        detailContainerRef.current.querySelectorAll('ul > li');

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.4 },
        scrollTrigger: {
          trigger: sectionRef.current,
        },
      });

      tl.to([projectInfoEls, '#preview-url-btn'], {
        y: '0%',
        opacity: 1,
        stagger: 0.05,
      }).to(bodyText.words, { y: '0%', stagger: 0.025 }, 0.2);
    });

    return () => context.revert();
  }, [detailContainerRef, bodyRef]);

  return (
    <section>
      <div ref={sectionRef} className="container mx-auto">
        <div ref={detailContainerRef}>
          <Details
            client={client}
            agency={agency}
            categories={categories}
            previewURL={previewURL}
          />
        </div>
        <div className="max-w-screen-lg overflow-hidden pb-sm pt-xs md:pb-section-lg md:pt-section-md xl:pb-section-xxl xl:pt-section-xl">
          <div ref={bodyRef} className="heading-l overflow-hidden">
            <PortableText value={body} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

const Details: React.FC<Omit<DescriptionProps, 'body'>> = ({
  client,
  agency,
  categories,
  previewURL,
}) => {
  return (
    <div className="grid grid-cols-12 max-sm:gap-y-sm sm:gap-x-10">
      <ul className="heading-m col-span-12 grid grid-cols-12 gap-5 sm:col-span-6 lg:col-span-8 xl:col-span-9">
        <li className="col-span-6 translate-y-[50px] opacity-0 sm:col-span-12 lg:col-span-4">
          <div className="uppercase text-lightGray">Client:</div>
          <div>{client}</div>
        </li>
        {!!agency && (
          <li className="col-span-6 translate-y-[50px] opacity-0 sm:col-span-12 lg:col-span-4">
            <div className="uppercase text-lightGray">AGENCY:</div>
            <div>{agency}</div>
          </li>
        )}

        <li className="col-span-6 translate-y-[50px] opacity-0 sm:col-span-12 lg:col-span-4">
          <div className="uppercase text-lightGray">CATEGORIES:</div>
          <div>
            {categories.map(({ title, _id }, index) => (
              <span key={_id}>
                {title} {index !== categories.length - 1 && ', '}
              </span>
            ))}
          </div>
        </li>
      </ul>
      <div
        id="preview-url-btn"
        className="col-span-12 flex translate-y-[50px] opacity-0 sm:col-span-6 sm:items-end sm:justify-end lg:col-span-4 xl:col-span-3"
      >
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
