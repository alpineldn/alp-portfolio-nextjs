'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ProjectList from './Project';
import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/SanityImage/SanityImage';
import { fadeInAndSlideUp, scaleAnimation } from '@/components/common/anim';
import { useWindowSize } from '@/hooks/useWindowSize';

type MoveRef = gsap.QuickToFunc | null;
interface Model {
  active: boolean;
  index: number;
}

interface ListViewProps {
  projects: ProjectType[];
}
const ListLayout: React.FC<ListViewProps> = ({ projects }) => {
  const { width = 0 } = useWindowSize();
  const [modal, setModal] = useState<Model>({
    active: false,
    index: 0,
  });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

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
    <motion.section
      variants={fadeInAndSlideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="flex flex-col items-center"
    >
      <div className="mb-[100px] flex w-full flex-col items-center justify-center">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="pb-10 pl-[100px] text-left text-xs font-light uppercase text-[#1c1d20]">
                Title
              </th>
              <th className="pb-10 text-left text-xs font-light uppercase text-[#1c1d20]">
                Client
              </th>
              <th className="pb-10 text-left text-xs font-light uppercase text-[#1c1d20]">
                Categories
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              return (
                <ProjectList
                  key={project._id}
                  index={index}
                  manageModal={manageModal}
                  {...project}
                />
              );
            })}
          </tbody>
        </table>
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
          className="pointer-events-none fixed z-[3] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-[#455CE9] text-[14px] font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-[3] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-[#455CE9] bg-transparent text-[14px] font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        >
          View
        </motion.div>
      </>
    </motion.section>
  );
};

export default ListLayout;
