import SanityImage from '@/components/common/SanityImage/SanityImage';
import { getRandomColor } from '@/utils/create-random-color';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Slug } from 'sanity';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { fadeInAndSlideUp, scaleAnimation } from '../../common/anim';
import Link from 'next/link';

type MoveRef = gsap.QuickToFunc | null;
interface NextCaseProps {
  title: string;
  mainImage: SanityImageObject;
  slug: Slug;
}

const NextCase: React.FC<NextCaseProps> = ({ title, mainImage, slug }) => {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [active, setActive] = useState(false);
  const color = useMemo(() => getRandomColor(), []);

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
    <Link className="block" href={`/work/${slug.current}`}>
      <motion.div
        variants={fadeInAndSlideUp}
        initial="initial"
        animate="enter"
        exit="exit"
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        onMouseEnter={(e) => {
          manageModal(true, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, e.clientX, e.clientY);
        }}
        className="group relative flex flex-col items-center justify-center gap-7 overflow-hidden md:gap-16"
      >
        <span className="text-lg">Next Case</span>
        <h2 className="w-full border-b-2 border-b-gray-600/50 pb-[150px] text-center text-[clamp(3.5rem,5vw+1rem,6.5rem)] transition-all duration-500 ease-smooth-curve group-hover:opacity-40">
          {title}
        </h2>

        <div className="absolute bottom-0 left-1/2 w-full max-w-[300px] -translate-x-1/2 translate-y-[50%] transition-transform duration-500 ease-smooth-curve sm:max-w-[450px] md:translate-y-[70%] md:group-hover:translate-y-[40%]">
          <div className="overflow-hidden" style={{ backgroundColor: color }}>
            <SanityImage
              className="w-full rounded object-cover px-3 py-7 md:px-6 md:py-14"
              src={mainImage}
              sizes="(min-width: 1024px) 450px, (min-width: 640px) 350px, 300px"
              alt={title}
            />
          </div>
        </div>
      </motion.div>

      <>
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-30 flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-[#455CE9] text-[14px] font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-30 flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-[#455CE9] bg-transparent font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        >
          Next Case
        </motion.div>
      </>
    </Link>
  );
};
export default NextCase;
