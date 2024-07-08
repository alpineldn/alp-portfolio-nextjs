'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/sanity-image/SanityImage';
import { scaleAnimation } from '@/components/common/anim';
import ProjectList from '@/components/common/project-layouts/ListLayout/Project';
import ProjectCard from '@/components/common/project-layouts/GridLayout/GridProject';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import MarqueeText from '@/components/common/ui/MarqueeText';
import { useWindowSize } from '@/hooks/useWindowSize';
import ArrowIcon from '@/components/common/icons/ArrowIcon';

type MoveRef = gsap.QuickToFunc | null;
interface Model {
  active: boolean;
  index: number;
}

interface ProjectsProps {
  projects: ProjectType[];
}
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const container = useRef<HTMLDivElement>(null);
  const { width = 0 } = useWindowSize();
  const [modal, setModal] = useState<Model>({
    active: false,
    index: 0,
  });

  const { active, index } = modal;
  const modalContainer = useRef(null);

  let xMoveContainer = useRef<MoveRef>(null);
  let yMoveContainer = useRef<MoveRef>(null);

  useEffect(() => {
    if (width <= 640) return;

    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
  }, [width]);

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
    if (width <= 640) return;

    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      ref={container}
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="relative z-[1] bg-dark py-[120px] text-light lg:pt-[300px]"
    >
      <div className="container mx-auto">
        <table className="w-full table-auto pb-[100px] max-lg:hidden">
          <tbody>
            {projects.map((project, index) => {
              return (
                <ProjectList
                  {...project}
                  key={project._id}
                  index={index}
                  manageModal={manageModal}
                />
              );
            })}
          </tbody>
        </table>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:hidden">
          {projects.slice(0, 4).map((project, index) => {
            return <ProjectCard {...project} key={project._id} index={index} />;
          })}
        </div>

        <div className="flex">
          <PageTransitionLink
            className="mt-20 block md:mt-52 lg:mt-20"
            href="/work"
          >
            <MarqueeText innerClassName="w-[calc(100%-120px)]">
              More Work
              <ArrowIcon className="size-4 text-white" />
            </MarqueeText>
          </PageTransitionLink>
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
            {projects.map(({ mainImage, title, _id }) => {
              return (
                <div
                  className="flex h-full w-full items-center justify-center"
                  key={`modal_${_id}`}
                >
                  <SanityImage
                    sizes="33vw"
                    src={mainImage}
                    alt={title}
                    className="aspect-auto h-auto w-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </>
    </section>
  );
};

export default Projects;
