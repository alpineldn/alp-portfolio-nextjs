'use client';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import RoundedButton from '@/components/common/ui/RoundedButton';
import ContactInfo from '../common/ContactInfoLinks/ContactInfo';

interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.section
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center bg-[#141516] text-white"
    >
      <div className="container w-full bg-[#141516] pt-[400px] sm:pt-[200px]">
        <div className="relative border-b border-solid border-b-[rgb(134,134,134)]/50 pb-[100px]">
          <span className="flex items-center">
            {/* <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[50%]">
              <Image className="object-cover" fill={true} alt={'image'} src={`/images/background.jpg`} />
            </div> */}
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
      <RoundedButton>
        <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
          info@dennissnellenberg.com
        </p>
      </RoundedButton>
    </div>
  );
};
