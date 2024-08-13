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
import cn from '@/utils/cn';

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
          start: 'top 80%',
          end: 'bottom 80%',
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
        <div className="max-w-screen-lg overflow-hidden pb-sm pt-sm md:pb-section-lg md:pt-section-md xl:pb-section-xxl xl:pt-section-xl">
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
    <div className="grid max-lg:grid-cols-1 max-lg:gap-y-8 lg:grid-flow-col-dense lg:gap-x-10">
      <ul
        className={cn(
          'project-meta',
          'grid gap-5 max-lg:grid-cols-2 lg:grid-flow-col-dense',
        )}
      >
        {!!client && (
          <li className={cn('translate-y-[50px] opacity-0')}>
            <div className=" text-lightGray">Client:</div>
            <div>{client}</div>
          </li>
        )}
        {!!agency && (
          <li className={cn('translate-y-[50px] opacity-0')}>
            <div className=" text-lightGray">Agency:</div>
            <div>{agency}</div>
          </li>
        )}

        <li className={cn('translate-y-[50px] opacity-0')}>
          <div className=" text-lightGray">Categories:</div>
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
        className={cn(
          'translate-y-[50px] opacity-0',
          'flex lg:items-end lg:justify-end',
        )}
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
