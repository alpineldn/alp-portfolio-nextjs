import { Project as ProjectTypes } from '@/app/(app)/work/page';
import React, { useLayoutEffect, useRef, useState } from 'react';
import PageTransitionLink from '../../ui/PageTransitionLink';
import Video from '../../video/Video';
import SanityImage from '../../sanity-image/SanityImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface WorkProps extends ProjectTypes {
  index: number;
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const WorkList: React.FC<WorkProps> = ({
  index,
  manageModal,
  title,
  categories,
  client,
  slug,
  mainImage,
  tileMedia,
}) => {
  const img = tileMedia?.tileImage ?? mainImage;
  const video = tileMedia?.tileVideo;
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const [sectionIntersection, setSectionIntersection] = useState(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!mediaContainerRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: mediaContainerRef.current,
        start: 'top 80%',
        onEnter: () => {
          setSectionIntersection(true);
        },
        onLeaveBack: () => {
          setSectionIntersection(false);
        },
      });
    });

    return () => context.revert();
  }, [mediaContainerRef]);

  return (
    <PageTransitionLink
      href={`work/${slug.current}`}
      dataType="link"
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="interactable group grid w-full cursor-pointer grid-cols-2 items-center gap-5 border-t border-solid border-t-white/50 py-xs text-white transition-all duration-300 last:border-b last:border-b-white/50 hover:opacity-50 lg:grid-cols-1 2xl:py-sm"
    >
      <div className="grid max-lg:grid-cols-12 md:gap-5 lg:grid-cols-12">
        <h3 className="col-span-12 text-l lg:col-span-8">{title}</h3>
        {/* <div className="col-span-12 block text-m max-lg:hidden md:col-span-6 lg:col-span-4">
          {client}
        </div> */}
        <div className="col-span-12 block text-m md:col-span-6 lg:col-span-4 xl:text-right">
          {categories.map((category, index) => (
            <span key={category._id}>
              {category.title}
              {index !== categories.length - 1 && ', '}
            </span>
          ))}
        </div>
      </div>
      <div ref={mediaContainerRef} className="block lg:hidden">
        <div className="flex aspect-[16/12] h-full w-full items-center justify-center">
          {!!video ? (
            <Video active={sectionIntersection} {...video} />
          ) : (
            <SanityImage
              sizes="50vw"
              src={img}
              alt={title}
              className="h-auto w-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
            />
          )}
        </div>
      </div>
    </PageTransitionLink>
  );
};

export default WorkList;
