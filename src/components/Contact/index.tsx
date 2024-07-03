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
      className="relative flex flex-col items-center justify-center bg-light text-dark"
    >
      <div className="container w-full bg-light pt-[400px] sm:pt-[200px]">
        <div className="relative border-b border-solid border-b-[rgb(134,134,134)]/50 pb-[100px]">
          <span className="flex items-center">
            <h2 className="h2 m-0 leading-tight">Let's work</h2>
          </span>
          <h2 className="h2 m-0 leading-tight">together</h2>
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
        className="h4 after:bg-dark hover:before:bg-dark"
        href="mailto:info@dennissnellenberg.com"
      >
        info@dennissnellenberg.com
      </UnderlineLink>
    </div>
  );
};
