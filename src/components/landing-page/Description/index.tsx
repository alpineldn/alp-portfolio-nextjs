'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import RoundedButton from '@/components/common/ui/RoundedButton';

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const phrase =
    'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
  const description = useRef(null);
  const isInView = useInView(description, { margin: '-200px' });

  return (
    <section
      ref={description}
      className="relative z-10 flex justify-center pt-[100px] lg:pt-[200px]"
    >
      <div className="container relative flex flex-col gap-12 md:flex-row">
        <p className="m-0 gap-3 text-3xl leading-[1.3] lg:text-4xl">
          {phrase.split(' ').map((word, index) => {
            return (
              <span
                key={index}
                className="relative mr-[7px] inline-flex overflow-hidden"
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          className="m-0 max-w-64 text-sm md:max-w-full lg:text-base"
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
      </div>
    </section>
  );
};

export default Description;
