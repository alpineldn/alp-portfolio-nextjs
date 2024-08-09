import SanityImage from '@/components/common/sanity-image/SanityImage';
import LinkEl from '@/components/common/ui/LinkEl';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { Slug } from 'sanity';

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
            .to(header1Ref.current, { y: 0, opacity: 0.8 }, '-=0.7')
            .to(header2Ref.current, { y: 0, opacity: 1 }, '-=0.7')
            .to(allWorkCtaEl, { y: 0, opacity: 1 }, '-=0.7')
            .to(infoEl, { y: 0, opacity: 1 }, '-=0.7');
        },
      });
    });

    return () => context.revert();
  }, [containerRef, backdropRef, header1Ref, header2Ref]);

  return (
    <div ref={containerRef}>
      <PageTransitionLink
        dataType="link"
        className="interactable group relative block h-[35vh] w-full overflow-hidden"
        href={`/work/${slug.current}`}
      >
        <motion.div className="relative h-full w-full max-sm:aspect-square">
          <figure className="relative h-full w-full overflow-hidden">
            <SanityImage
              className="h-full w-full rounded object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
              src={mainImage}
              sizes="100vw"
              alt={title}
            />
            <div
              ref={backdropRef}
              className="absolute inset-0 h-full w-full bg-black opacity-0"
            />
          </figure>
          <div className="absolute left-0 top-1/2 h-fit w-full -translate-y-1/2">
            <div className="container mx-auto">
              <h2
                ref={header1Ref}
                className="h5 translate-y-[25px] opacity-0 drop-shadow-lg"
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
        <PageTransitionLink
          dataType="simple-hover"
          className="interactable"
          href="/work"
        >
          <LinkEl>All Work</LinkEl>
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
            <p
              data-type="simple-hover"
              className="underline_link interactable body-2"
            >
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
              dataType="interactable"
              href="/privacy-policy"
              className="underline_link body-2"
            >
              Privacy
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
