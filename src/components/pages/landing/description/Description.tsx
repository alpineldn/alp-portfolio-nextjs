'use client';

import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import LinkEl from '@/components/common/ui/LinkEl';
import cn from '@/utils/cn';
import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

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
  const descriptionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(descriptionRef, { margin: '-50%' });

  return (
    <motion.section
      ref={descriptionRef}
      className="text-light relative z-20 bg-dark py-section md:py-section-lg" // Ensure it's below the hero
      initial={{ y: '100%' }} // Start below the viewport
      animate={{ y: isInView ? '0%' : '100%' }} // Slide in when in view
      transition={{ duration: 0.5 }} // Smooth transition
    >
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-[70px] md:flex-row md:gap-[50px] lg:w-9/12">
          <div className="intro_para">
            <SplitTextAnimation
              el="p"
              className={cn('text-l')}
              animate={isInView}
            >
              {phrase}
            </SplitTextAnimation>
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap">
          <FadeInAndSlideUpOnViewAnimation
            hidden={{ y: 35 }}
            delay={0.5}
            isList
            className="mt-20 flex flex-row flex-wrap max-sm:flex-col max-sm:flex-nowrap"
          >
            {services.map(({ id, title }) => (
              <div
                key={id}
                className="mr-10 inline-flex items-center space-x-3 text-m sm:flex lg:space-x-4"
              >
                <span>{title}</span>
              </div>
            ))}
          </FadeInAndSlideUpOnViewAnimation>
        </div>

        <motion.div className="pt-section md:pt-section-lg">
          <FadeInAndSlideUpOnViewAnimation delay={0.5}>
            <PageTransitionLink className="block w-fit" href="/about">
              <LinkEl>About Us</LinkEl>
            </PageTransitionLink>
          </FadeInAndSlideUpOnViewAnimation>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Description;
