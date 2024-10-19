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
import FadeInOnViewAnimation from '@/components/common/animations/FadeInOnViewAnimation';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

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
          <li>
            <FadeInAndSlideUpOnViewAnimation hidden={{ y: 50 }} delay={0}>
              <div className="text-lightGray">Client:</div>
              <div>{client}</div>
            </FadeInAndSlideUpOnViewAnimation>
          </li>
        )}
        {!!agency && (
          <li>
            <FadeInAndSlideUpOnViewAnimation hidden={{ y: 50 }} delay={0.05}>
              <div className="text-lightGray">Agency:</div>
              <div>{agency}</div>
            </FadeInAndSlideUpOnViewAnimation>
          </li>
        )}

        <li>
          <FadeInAndSlideUpOnViewAnimation hidden={{ y: 50 }} delay={0.1}>
            <div className="text-lightGray">Categories:</div>
            <div>
              {categories.map(({ title, _id }, index) => (
                <span key={_id}>
                  {title} {index !== categories.length - 1 && ', '}
                </span>
              ))}
            </div>
          </FadeInAndSlideUpOnViewAnimation>
        </li>
      </ul>
      <FadeInAndSlideUpOnViewAnimation
        hidden={{ y: 50 }}
        delay={0.15}
        className={cn('flex flex-col lg:items-end lg:justify-end')}
      >
        {!!previewURL?.current && (
          <Link
            className="interactable block"
            data-type="simple-hover"
            href={previewURL.current}
          >
            <LinkEl className={cn('flex text-project-meta lg:justify-end')}>
              View Site
            </LinkEl>
          </Link>
        )}
      </FadeInAndSlideUpOnViewAnimation>
    </div>
  );
};
