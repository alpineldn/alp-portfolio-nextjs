'use client';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import RoundedButton from '@/components/common/ui/RoundedButton';
import Magnetic from '@/components/common/ui/Magnetic';

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
      <div className="container w-full bg-[#141516] pt-[200px]">
        <div className="relative border-b border-solid border-b-[rgb(134,134,134)] pb-[100px]">
          <span className="flex items-center">
            {/* <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[50%]">
              <Image className="object-cover" fill={true} alt={'image'} src={`/images/background.jpg`} />
            </div> */}
            <h2 className="m-0 text-[5vw] font-light">Let's work</h2>
          </span>
          <h2 className="m-0 text-[5vw] font-light">together</h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
          >
            <RoundedButton
              backgroundColor={'#334BD3'}
              className="absolute flex h-[180px] w-[180px] cursor-pointer items-center justify-center rounded-[50%] bg-[#455CE9] text-white"
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
        <div className="mx-[200px] mt-[100px] flex gap-5">
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
        <div className="mt-[200px] flex justify-between p-5">
          <div className="flex items-end gap-2.5">
            <span className="flex flex-col gap-[15px]">
              <h3 className="m-0 cursor-default p-[2.5px] text-[1em] font-light text-[grey]">
                Version
              </h3>
              <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
                2022 © Edition
              </p>
            </span>
            <span className="flex flex-col gap-[15px]">
              <h3 className="m-0 cursor-default p-[2.5px] text-[1em] font-light text-[grey]">
                Version
              </h3>
              <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
                11:49 PM GMT+2
              </p>
            </span>
          </div>
          <div className="flex items-end gap-2.5">
            <span className="flex flex-col gap-[15px]">
              <h3 className="m-0 cursor-default p-[2.5px] text-[1em] font-light text-[grey]">
                socials
              </h3>
              <Magnetic>
                <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
                  Awwwards
                </p>
              </Magnetic>
            </span>
            <Magnetic>
              <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
                Instagram
              </p>
            </Magnetic>
            <Magnetic>
              <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
                Dribbble
              </p>
            </Magnetic>
            <Magnetic>
              <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
                Linkedin
              </p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
