'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import RoundedButton from '@/components/common/ui/RoundedButton';
import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/SanityImage/SanityImage';
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const height = useTransform(scrollYProgress, [0, 1], [100, 0]);

  let xMoveContainer = useRef<MoveRef>(null);
  let yMoveContainer = useRef<MoveRef>(null);
  let xMoveCursor = useRef<MoveRef>(null);
  let yMoveCursor = useRef<MoveRef>(null);
  let xMoveCursorLabel = useRef<MoveRef>(null);
  let yMoveCursorLabel = useRef<MoveRef>(null);

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
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });
  }, [width]);

  const moveItems = (x: number, y: number) => {
    !!xMoveContainer?.current && xMoveContainer.current(x);
    !!yMoveContainer?.current && yMoveContainer.current(y);
    !!xMoveCursor?.current && xMoveCursor.current(x);
    !!yMoveCursor?.current && yMoveCursor.current(y);
    !!xMoveCursorLabel?.current && xMoveCursorLabel.current(x);
    !!yMoveCursorLabel?.current && yMoveCursorLabel.current(y);
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
      className="relative z-[1] flex flex-col items-center bg-dark pt-[200px] text-light lg:pt-[300px]"
    >
      <>
        <table className="container w-full table-auto pb-[100px] max-lg:hidden">
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

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 px-5 sm:px-10 md:grid-cols-2 lg:hidden">
          {projects.slice(0, 4).map((project, index) => {
            return (
              <ProjectCard
                {...project}
                key={project._id}
                index={index}
                manageModal={manageModal}
              />
            );
          })}
        </div>
      </>

      <div className="container mx-auto flex">
        <PageTransitionLink
          className="mt-20 block md:mt-52 lg:mt-20"
          href="/work"
        >
          <MarqueeText>More Work ↗</MarqueeText>
        </PageTransitionLink>
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
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-[3] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-light text-[14px] font-light text-dark"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-[3] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] !bg-light bg-transparent text-[14px] font-light text-dark"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        >
          <ArrowIcon className="size-5" />
        </motion.div>
      </>

      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-[0_0_50%_50%] bg-dark shadow-[0px_60px_50px_rgba(0,0,0,0.2)]"></div>
      </motion.div>
    </section>
  );
};

export default Projects;
