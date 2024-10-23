'use client';

import cn from '@/utils/cn';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';
import { services } from './data';
import ServiceSection from './service-section/ServiceSection';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = () => {
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
          className="container mx-auto grid grid-cols-2 gap-10 max-lg:gap-y-8 max-sm:grid-cols-1 lg:gap-x-10"
          stagger={0.3} // Adjust stagger time as needed
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
