import { motion } from 'framer-motion';
import { fadeInAndSlideUp } from '../anim';
import { projects } from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import RoundedButton from '@/components/common/ui/RoundedButton';

type MoveRef = gsap.QuickToFunc | null;
interface GridViewProps {}

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const GridView: React.FC<GridViewProps> = ({}) => {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [active, setActive] = useState(false);

  let xMoveCursor = useRef<MoveRef>(null);
  let yMoveCursor = useRef<MoveRef>(null);
  let xMoveCursorLabel = useRef<MoveRef>(null);
  let yMoveCursorLabel = useRef<MoveRef>(null);

  useEffect(() => {
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
  }, []);

  const moveItems = (x: number, y: number) => {
    !!xMoveCursor?.current && xMoveCursor.current(x);
    !!yMoveCursor?.current && yMoveCursor.current(y);
    !!xMoveCursorLabel?.current && xMoveCursorLabel.current(x);
    !!yMoveCursorLabel?.current && yMoveCursorLabel.current(y);
  };

  const manageModal = (active: boolean, x: number, y: number) => {
    moveItems(x, y);
    setActive(active);
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
    >
      <div className="mb-[100px] grid grid-cols-2 gap-x-10 gap-y-48">
        {projects.map(({ src, title, service, year, color }, index) => (
          <Link
            href={`/work/${index}`}
            onMouseEnter={(e) => {
              manageModal(true, e.clientX, e.clientY);
            }}
            onMouseLeave={(e) => {
              manageModal(false, e.clientX, e.clientY);
            }}
          >
            <div className="relative w-full">
              <figure
                style={{ backgroundColor: color }}
                className="flex aspect-square h-full w-full items-center justify-center overflow-hidden"
              >
                <Image
                  src={`/images/${src}`}
                  width={600}
                  height={600}
                  alt={title}
                  className="aspect-auto h-auto w-auto object-cover"
                />
              </figure>
              <div className="w-full py-4">
                <h3 className="border-b-2 py-6 text-5xl text-[#1c1d20]">
                  {title}
                </h3>
                <div className="flex justify-between py-5">
                  <p className="text-lg">{service}</p>
                  <p className="text-lg">{year}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <RoundedButton>
          <p>More work</p>
        </RoundedButton>
      </div>

      <>
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-[3] flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-[#455CE9] text-[14px] font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-[3] flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-[#455CE9] bg-transparent font-light text-white"
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

export default GridView;
