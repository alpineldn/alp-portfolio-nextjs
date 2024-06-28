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
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
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
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-240px)] top-[calc(100%-75px)] lg:left-[calc(100%-300px)] 2xl:left-[calc(100%-400px)]"
          >
            <RoundedButton
              backgroundColor={'#334BD3'}
              className="absolute flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-[50%] bg-[#455CE9] text-white lg:h-[180px] lg:w-[180px]"
            >
              <p className="relative z-[2] m-0 text-base font-light">
                Get in touch
              </p>
            </RoundedButton>
          </motion.div>
          <motion.svg
            className="absolute left-full top-[30%]"
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
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
      <RoundedButton>
        <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
          +31 6 27 84 74 30
        </p>
      </RoundedButton>
    </div>
  );
};
