'use client';

import { Category } from '@/app/(app)/work/page';
import LinkEl from '@/components/common/ui/LinkEl';
import gsap from 'gsap';
import { PortableText, PortableTextBlock } from 'next-sanity';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Slug } from 'sanity';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import cn from '@/utils/cn';
import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';

gsap.registerPlugin(ScrollTrigger);

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
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (!sectionRef?.current) return;

    ScrollTrigger.create({
      trigger: sectionRef?.current,
      start: 'top 80%',
      end: 'bottom 80%',
      onEnter: () => {
        setAnimationTrigger(true);
      },
    });
  }, [sectionRef]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!detailContainerRef?.current || !sectionRef?.current) return;

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

      if (!!projectInfoEls?.length)
        tl.to([projectInfoEls, '#preview-url-btn'], {
          y: '0%',
          opacity: 1,
          stagger: 0.05,
        });
    });

    return () => context.revert();
  }, [detailContainerRef, sectionRef]);

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
        {!!body && (
          <div className="max-w-screen-lg overflow-hidden pb-sm pt-sm md:pb-section-lg md:pt-section-md xl:pb-section-xxl xl:pt-section-xl">
            <SplitTextAnimation
              el="div"
              target="childNodes"
              animate={animationTrigger}
              className="!overflow-hidden text-l"
            >
              <PortableText value={body} />
            </SplitTextAnimation>
          </div>
        )}
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
          'text-project-meta',
          'grid gap-5 max-lg:grid-cols-1 lg:grid-flow-col-dense',
        )}
      >
        {!!client && (
          <li className={cn('translate-y-[50px] opacity-0')}>
            <div className="text-lightGray">Client:</div>
            <div>{client}</div>
          </li>
        )}
        {!!agency && (
          <li className={cn('translate-y-[50px] opacity-0')}>
            <div className="text-lightGray">Agency:</div>
            <div>{agency}</div>
          </li>
        )}

        <li className={cn('translate-y-[50px] opacity-0')}>
          <div className="text-lightGray">Categories:</div>
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
          'flex lg:items-start lg:justify-end',
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
