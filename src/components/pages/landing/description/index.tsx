'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import LinkEl from '@/components/common/ui/LinkEl';
import cn from '@/utils/cn';

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const phrase =
    'Building brands and digital experiences for over twenty years, crafting timeless identities and executing integrated strategies.';
  const description = useRef(null);
  const isInView = useInView(description, { margin: '-200px' });

  return (
    <section
      ref={description}
      className="text-light relative bg-dark py-section md:py-section-lg"
    >
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-[70px] md:flex-row md:gap-[50px] xl:gap-[207px]">
          <p className={cn('heading-l')}>
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
          {/* <motion.p
            className="heading-m max-w-[421px]"
            variants={opacity}
            animate={isInView ? 'open' : 'closed'}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p> */}

          {/* <div className="col-span-12 max-xl:pt-xs xl:col-span-3 xl:translate-y-[-2.5rem] mx-6"> */}
          <div>
            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
              <li className="text-spaced-sm border-t border-gray py-4">
                <span>Brand Development</span>
              </li>
              <li className="text-spaced-sm border-t border-gray py-4">
                <span>Design</span>
              </li>
              <li className="text-spaced-sm border-t border-gray py-4">
                <span>Development</span>
              </li>
              <li className="text-spaced-sm border-t border-gray py-4">
                <span>Digital Marketing</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="pt-section md:pt-section-lg"
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
        >
          <PageTransitionLink className="block w-fit" href="/about">
            <LinkEl>About Us</LinkEl>
          </PageTransitionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
