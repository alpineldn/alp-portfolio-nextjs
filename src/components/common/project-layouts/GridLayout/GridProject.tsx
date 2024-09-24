import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import PageTransitionLink from '../../ui/PageTransitionLink';
import { motion } from 'framer-motion';
import { smoothCurve } from '@/utils/constants';
import { useLayoutEffect, useRef, useState } from 'react';
import Video from '../../video/Video';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import FadeInAndSlideUpOnViewAnimation from '../../animations/FadeInAndSlideUpOnViewAnimation';
import FadeInOnViewAnimation from '../../animations/FadeInOnViewAnimation';

interface ProjectProps extends ProjectType {
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  mainImage,
  title,
  categories,
  client,
  tileMedia,
}) => {
  const img = tileMedia?.tileImage ?? mainImage;
  const video = tileMedia?.tileVideo;
  const listContainerRef = useRef<HTMLUListElement>(null);
  const [sectionIntersection, setSectionIntersection] = useState(false);
  const mediaContainerRef = useRef<HTMLDivElement>(null);

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
      dataType="link"
      className="interactable md:even:translate-y-[30%]"
      href={`/work/${slug.current}`}
    >
      <FadeInAndSlideUpOnViewAnimation className="text-light relative w-full">
        <div
          ref={mediaContainerRef}
          className="group flex aspect-square h-full w-full items-center justify-center overflow-hidden"
        >
          {!!video ? (
            <Video
              className="aspect-square"
              active={sectionIntersection}
              {...video}
            />
          ) : (
            <SanityImage
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={img}
              alt={title}
              className="aspect-square object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
            />
          )}
        </div>
        <div className="w-full pt-xs lg:pt-[45px]">
          <motion.h3
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: smoothCurve, duration: 1 }}
            className="text-l text-white opacity-0"
          >
            {title}
          </motion.h3>

          <div className="block">
            <div className="hidden items-center overflow-hidden">
              {!!client && (
                <FadeInOnViewAnimation className="mt-3 text-m text-lightGray opacity-0">
                  {client}
                </FadeInOnViewAnimation>
              )}

              {!!client && !!categories?.length}
            </div>

            {!!categories?.length && (
              <ul ref={listContainerRef} className="mt-2 block text-lightGray">
                {categories?.map(({ title, _id }, index) => (
                  <FadeInOnViewAnimation
                    key={_id}
                    viewport={{ root: listContainerRef }}
                    className="inline-block overflow-hidden text-ellipsis whitespace-pre text-m text-lightGray opacity-0"
                  >
                    {title + (index < categories.length - 1 ? ', ' : '')}
                  </FadeInOnViewAnimation>
                ))}
              </ul>
            )}
          </div>
        </div>
      </FadeInAndSlideUpOnViewAnimation>
    </PageTransitionLink>
  );
};
export default ProjectCard;
