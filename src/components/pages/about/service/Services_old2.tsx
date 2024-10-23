'use client';

import cn from '@/utils/cn';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';
import { services } from './data';
import ServiceSection from './service-section/ServiceSection';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface ServiceProps {}

const containerVariants = {
  hidden: { opacity: 0, y: 65 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 65 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services: React.FC<ServiceProps> = () => {
  const serviceListContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="services">
      <div className="relative overflow-hidden bg-darkGray py-section md:py-section-lg">
        <div className="container mx-auto">
          <h2
            className={cn(
              'text-lightGray',
              'pb-[calc(96px/2)] md:pb-[calc(144px/2)]',
              'text-section-subtitle',
            )}
          >
            Services
          </h2>
        </div>
        <FadeInAndSlideUpOnViewAnimation
          isList
          className="container mx-auto grid grid-cols-2 gap-10 max-lg:gap-y-8 max-sm:grid-cols-1 lg:gap-x-10"
        >
          {services.map(({ items, title, description }, index) => (
            <ServiceSection
              key={index}
              description={description}
              index={index}
              isEven={index % 2 === 0}
              items={items}
              title={title}
            />
          ))}
        </FadeInAndSlideUpOnViewAnimation>
      </div>
    </section>
  );
};

export default Services;
