'use client';
import { Project as ProjectType } from '@/app/(app)/work/page';
import { scaleAnimation } from '@/components/common/anim';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';
import WorkList from '@/components/common/work-layouts/ListLayout/WorkList';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import LinkEl from '@/components/common/ui/LinkEl';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import Video from '@/components/common/video/Video';
import useTouchHandler from '@/hooks/useTouchHandler';
import { useWindowSize } from '@/hooks/useWindowSize';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

type MoveRef = gsap.QuickToFunc | null;
interface Model {
  active: boolean;
  index: number;
}

interface ProjectsProps {
  projects: ProjectType[];
}

const Works: React.FC<ProjectsProps> = ({ projects }) => {
  const container = useRef<HTMLDivElement>(null);
  const { width = 0 } = useWindowSize();
  const isTouched = useTouchHandler();

  const [modal, setModal] = useState<Model>({
    active: false,
    index: 0,
  });

  const { active, index } = modal;
  const modalContainer = useRef(null);
  let xMoveContainer = useRef<MoveRef>(null);
  let yMoveContainer = useRef<MoveRef>(null);

  useEffect(() => {
    if (width <= 640 || isTouched) return;

    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
  }, [width, isTouched]);

  const moveItems = (x: number, y: number) => {
    !!xMoveContainer?.current && xMoveContainer.current(x);
    !!yMoveContainer?.current && yMoveContainer.current(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number,
  ) => {
    if (width <= 640 || isTouched) {
      setModal({ active: false, index });
      return;
    }

    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      ref={container}
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="text-light relative bg-darkGray py-section md:py-section-lg"
    >
      <div className="container mx-auto">
        <h2 className="mb-xs text-section-subtitle text-lightGray xl:mb-section-md">
          Projects
        </h2>

        <div className="w-full">
          {projects.map((project, index) => {
            return (
              <WorkList
                {...project}
                key={project._id}
                index={index}
                manageModal={manageModal}
              />
            );
          })}
        </div>

        <div className="mt-sm flex md:mt-section-lg">
          <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.5}>
            <PageTransitionLink className="block" href="/work">
              <LinkEl>More Work</LinkEl>
            </PageTransitionLink>
          </FadeInAndSlideUpOnViewAnimation>
        </div>
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
          className="pointer-events-none fixed left-2/4 top-2/4 z-[3] h-[350px] w-[400px] overflow-hidden bg-[white]"
        >
          <div
            style={{ top: index * -100 + '%' }}
            className="relative h-full w-full transition-[top] duration-500 ease-smooth-curve"
          >
            {projects.map((project) => (
              <Project key={project._id} active={modal.active} {...project} />
            ))}
          </div>
        </motion.div>
      </>
    </section>
  );
};

export default Works;

const Project: React.FC<ProjectType & { active: boolean }> = ({
  _id,
  title,
  active,
  mainImage,
  tileMedia,
}) => {
  const img = tileMedia?.tileImage ?? mainImage;
  const video = tileMedia?.tileVideo;
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      key={`modal_${_id}`}
    >
      {!!video ? (
        <Video active={active} {...video} />
      ) : (
        <SanityImage
          sizes="33vw"
          src={img}
          alt={title}
          className="aspect-auto h-auto w-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
        />
      )}
    </div>
  );
};