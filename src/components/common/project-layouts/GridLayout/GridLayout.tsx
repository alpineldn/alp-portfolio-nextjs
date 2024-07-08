import { Project as ProjectType } from '@/app/(app)/work/page';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './GridProject';
import { fadeInAndSlideUp, scaleAnimation } from '@/components/common/anim';
import { useWindowSize } from '@/hooks/useWindowSize';
import ArrowIcon from '../../icons/ArrowIcon';

type MoveRef = gsap.QuickToFunc | null;
interface Model {
  active: boolean;
  index: number;
}
interface GridViewProps {
  projects: ProjectType[];
  className?: string;
}

const GridLayout: React.FC<GridViewProps> = ({ projects, className }) => {
  const { width = 0 } = useWindowSize();
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [modal, setModal] = useState<Model>({
    active: false,
    index: 0,
  });
  const { active } = modal;

  let xMoveCursor = useRef<MoveRef>(null);
  let yMoveCursor = useRef<MoveRef>(null);
  let xMoveCursorLabel = useRef<MoveRef>(null);
  let yMoveCursorLabel = useRef<MoveRef>(null);

  useEffect(() => {
    if (width <= 640) return;

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
      className={className}
      variants={fadeInAndSlideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
    >
      <div className="mb-[200px] grid grid-cols-1 gap-y-20 md:mb-[300px] md:grid-cols-2 md:gap-x-10 md:gap-y-48">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project._id}
            manageModal={manageModal}
            {...project}
          />
        ))}
      </div>

      <>
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-[3] flex h-[120px] w-[120px] items-center justify-center rounded-[50%] bg-light text-[14px] font-light text-dark"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-[3] flex h-[120px] w-[120px] items-center justify-center rounded-[50%] !bg-light bg-transparent text-[14px] font-light text-dark"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        >
          <ArrowIcon className="size-5" />
        </motion.div>
      </>
    </motion.section>
  );
};

export default GridLayout;
