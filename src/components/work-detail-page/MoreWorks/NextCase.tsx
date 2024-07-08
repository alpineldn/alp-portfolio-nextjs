import SanityImage from '@/components/common/SanityImage/SanityImage';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Slug } from 'sanity';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { scaleAnimation } from '../../common/anim';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import ArrowIcon from '@/components/common/icons/ArrowIcon';
import MarqueeText from '@/components/common/ui/MarqueeText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type MoveRef = gsap.QuickToFunc | null;
interface NextCaseProps {
  title: string;
  mainImage: SanityImageObject;
  slug: Slug;
}

const NextCase: React.FC<NextCaseProps> = ({ title, mainImage, slug }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const header1Ref = useRef<HTMLHeadingElement>(null);
  const header2Ref = useRef<HTMLHeadingElement>(null);

  // const cursor = useRef(null);
  // const cursorLabel = useRef(null);
  // const [active, setActive] = useState(false);

  // let xMoveCursor = useRef<MoveRef>(null);
  // let yMoveCursor = useRef<MoveRef>(null);
  // let xMoveCursorLabel = useRef<MoveRef>(null);
  // let yMoveCursorLabel = useRef<MoveRef>(null);

  // useEffect(() => {
  //   //Move cursor
  //   xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
  //     duration: 0.5,
  //     ease: 'power3',
  //   });
  //   yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
  //     duration: 0.5,
  //     ease: 'power3',
  //   });
  //   //Move cursor label
  //   xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
  //     duration: 0.45,
  //     ease: 'power3',
  //   });
  //   yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
  //     duration: 0.45,
  //     ease: 'power3',
  //   });
  // }, []);

  // const moveItems = (x: number, y: number) => {
  //   !!xMoveCursor?.current && xMoveCursor.current(x);
  //   !!yMoveCursor?.current && yMoveCursor.current(y);
  //   !!xMoveCursorLabel?.current && xMoveCursorLabel.current(x);
  //   !!yMoveCursorLabel?.current && yMoveCursorLabel.current(y);
  // };

  // const manageModal = (active: boolean, x: number, y: number) => {
  //   moveItems(x, y);
  //   setActive(active);
  // };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      if (!containerRef?.current) return;

      const allWorkCtaEl =
        containerRef.current.querySelector<HTMLDivElement>('#all-work-cta');
      const infoEl =
        containerRef.current.querySelector<HTMLDivElement>('#info');

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power4.inOut',
        },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: '35% bottom',
        onEnter: () => {
          tl.to(backdropRef.current, { opacity: 0.7 })
            .to(
              header1Ref.current,
              {
                y: 0,
                opacity: 0.8,
              },
              '-=0.6',
            )
            .to(
              header2Ref.current,
              {
                y: 0,
                opacity: 1,
              },
              '-=0.6',
            )
            .to(
              allWorkCtaEl,
              {
                y: 0,
                opacity: 1,
              },
              '-=0.6',
            )
            .to(
              infoEl,
              {
                y: 0,
                opacity: 1,
              },
              '-=0.6',
            );
        },
      });
    });

    return () => context.revert();
  }, [containerRef, backdropRef, header1Ref, header2Ref]);

  return (
    <div ref={containerRef}>
      <PageTransitionLink
        className="interactable relative block h-full w-full"
        href={`/work/${slug.current}`}
      >
        <motion.div
          // onMouseMove={(e) => {
          //   moveItems(e.clientX, e.clientY);
          // }}
          // onMouseEnter={(e) => {
          //   manageModal(true, e.clientX, e.clientY);
          // }}
          // onMouseLeave={(e) => {
          //   manageModal(false, e.clientX, e.clientY);
          // }}
          className="relative h-full w-full max-sm:aspect-square"
        >
          <figure className="relative h-full w-full">
            <div
              ref={backdropRef}
              className="absolute inset-0 h-full w-full bg-black opacity-0"
            />
            <SanityImage
              className="h-full w-full rounded object-cover"
              src={mainImage}
              sizes="100vw"
              alt={title}
            />
          </figure>
          <div className="absolute left-0 top-1/2 h-fit w-full -translate-y-1/2">
            <div className="container mx-auto">
              <h2
                ref={header1Ref}
                className="h4 translate-y-[25px] opacity-0 drop-shadow-lg"
              >
                Next Project_
              </h2>
              <h3
                ref={header2Ref}
                className="h2 translate-y-[25px] opacity-0 drop-shadow-lg"
              >
                {title}
              </h3>
            </div>
          </div>
        </motion.div>

        <>
          {/* <motion.div
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
          </motion.div> */}
        </>
      </PageTransitionLink>
      <motion.div>
        <ContactInfo />
      </motion.div>
    </div>
  );
};
export default NextCase;

const ContactInfo: React.FC = () => {
  return (
    <div id="all-work-cta" className="translate-y-[25px] pb-5 opacity-0">
      <div
        data-type="click"
        className="flex w-full items-center justify-center py-10"
      >
        <PageTransitionLink className="interactable" href="/work">
          <MarqueeText>All Work</MarqueeText>
        </PageTransitionLink>
      </div>

      <div
        id="info"
        className="flex translate-y-[25px] flex-col-reverse justify-between px-5 opacity-0 md:flex-row"
      >
        <div className="flex items-end gap-2.5 max-md:justify-between max-md:pt-8">
          <span className="flex flex-col gap-[15px]">
            {/* <h3 className="m-0 cursor-default p-[2.5px] text-xs font-light text-[grey]">
              Version
            </h3> */}
            <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
              ©2024 ALPINE
            </p>
          </span>
        </div>
        <div className="flex items-end gap-2.5 border-b-[rgb(134,134,134)]/50 max-md:border-b max-md:pb-8">
          <span className="flex flex-col gap-[15px]">
            {/* <h3 className="m-0 cursor-default p-[2.5px] text-xs font-light text-[grey]">
              Socials
            </h3> */}
            <PageTransitionLink
              href="/privacy-policy"
              className='interactable m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'
            >
              Privacy Policy
            </PageTransitionLink>
          </span>
          {/* <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            Instagram
          </p>
          <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            Dribbble
          </p>
          <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            Linkedin
          </p> */}
        </div>
      </div>
    </div>
  );
};
