'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import MarqueeText from '@/components/common/ui/MarqueeText';

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const phrase =
    'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
  const description = useRef(null);
  const isInView = useInView(description, { margin: '-200px' });

  return (
    <section
      ref={description}
      className="relative z-10 bg-dark pt-[100px] text-light lg:pt-[200px]"
    >
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-12 md:flex-row">
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
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>
        </div>

        <motion.div variants={opacity} animate={isInView ? 'open' : 'closed'}>
          <PageTransitionLink
            className="mt-12 block w-fit lg:mt-32"
            href="/about"
          >
            <MarqueeText innerClassName="">About Us ↗</MarqueeText>
          </PageTransitionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
