import SanityImage from '@/components/common/SanityImage/SanityImage';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { useEffect, useRef, useState } from 'react';
import { Slug } from 'sanity';
import gsap from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scaleAnimation } from '../../common/anim';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import ArrowIcon from '@/components/common/icons/ArrowIcon';
// import ArrowIcon from '@/components/common/icons/ArrowIcon';

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
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <>
      <PageTransitionLink
        className="block h-full w-full"
        href={`/work/${slug.current}`}
      >
        <motion.div
          ref={container}
          style={{ y }}
          onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
          }}
          onMouseEnter={(e) => {
            manageModal(true, e.clientX, e.clientY);
          }}
          onMouseLeave={(e) => {
            manageModal(false, e.clientX, e.clientY);
          }}
          className="h-full w-full pt-[50px] max-sm:aspect-square md:pt-[50px]"
        >
          <figure className="relative h-full w-full">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <SanityImage
              className="h-full w-full rounded object-cover"
              src={mainImage}
              sizes="100vw"
              alt={title}
            />
          </figure>
          <div className="absolute left-0 top-1/2 h-full w-full">
            <div className="container mx-auto">
              <h2 className="h4 opacity-80 drop-shadow-lg">Next Project_</h2>
              <h3 className="h2 drop-shadow-lg">{title}</h3>
            </div>
          </div>
        </motion.div>

        <>
          <motion.div
            ref={cursor}
            className="pointer-events-none fixed z-30 flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-white text-[14px] font-light text-[#141516]"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
          ></motion.div>
          <motion.div
            ref={cursorLabel}
            className="pointer-events-none fixed z-30 flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-transparent bg-white font-light text-white"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? 'enter' : 'closed'}
          >
            <ArrowIcon />
          </motion.div>
        </>
      </PageTransitionLink>
    </>
  );
};
export default NextCase;
