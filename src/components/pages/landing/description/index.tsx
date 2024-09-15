'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import LinkEl from '@/components/common/ui/LinkEl';
import cn from '@/utils/cn';
import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';

interface DescriptionProps {}

const services = [
  { id: 1, title: 'Brand Development' },
  { id: 2, title: 'Creative Design' },
  { id: 3, title: 'Technical Solutions' },
  { id: 4, title: 'Digital Marketing' },
];

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
        <div className="flex flex-col gap-[70px] md:flex-row md:gap-[50px] lg:w-9/12">
          <div className="intro_para">
            <p className={cn('text-l')}>
              <SplitTextAnimation el="p" animate={isInView}>
                {phrase}
              </SplitTextAnimation>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap">
          <ul className="mt-20 flex flex-row flex-wrap max-sm:flex-col max-sm:flex-nowrap">
            {services.map(({ id, title }, index) => (
              <li
                key={id}
                className="mr-10 inline-flex items-center space-x-3 text-m sm:flex lg:space-x-4"
              >
                <SplitTextAnimation
                  el="span"
                  delay={index * 0.2}
                  animate={isInView}
                >
                  {title}
                </SplitTextAnimation>
              </li>
            ))}
          </ul>
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
