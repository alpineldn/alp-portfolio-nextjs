'use client';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ContactInfo from '../common/ContactInfoLinks/ContactInfo';
import UnderlineLink from '../common/ui/UnderlineLink';

interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.section
      style={{ y }}
      ref={container}
      className="bg-light relative flex flex-col items-center justify-center text-dark"
    >
      <div className="bg-light container w-full pt-[400px] sm:pt-[200px]">
        <div className="relative border-b border-solid border-b-[rgb(134,134,134)]/50 pb-[100px]">
          <span className="flex items-center">
            <h2 className="m-0 text-[clamp(3.5rem,5vw+1rem,6.5rem)] leading-tight">
              Let's work
            </h2>
          </span>
          <h2 className="m-0 text-[clamp(3.5rem,5vw+1rem,6.5rem)] leading-tight">
            together
          </h2>
        </div>

        <CTAs />
        <ContactInfo />
      </div>
    </motion.section>
  );
};

export default Contact;

const CTAs = () => {
  return (
    <div className="mt-[120px] flex gap-5 max-lg:flex max-lg:flex-col md:mt-[100px]">
      <UnderlineLink
        className="text-2xl md:text-3xl xl:text-4xl"
        href="mailto:info@dennissnellenberg.com"
      >
        info@dennissnellenberg.com
      </UnderlineLink>
    </div>
  );
};
