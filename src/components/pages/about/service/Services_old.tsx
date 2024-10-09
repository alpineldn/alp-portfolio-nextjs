'use client';

import cn from '@/utils/cn';
import { services } from './data';
import ServiceSection from './service-section/ServiceSection_old';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = ({}) => {
  return (
    <section>
      <div className="bg-darkGray">
        <div className="container mx-auto">
          <h2
            className={cn(
              'text-section-subtitle text-lightGray',
              'pt-section md:pt-section-lg',
              'pb-[calc(96px/2)] md:pb-[calc(144px/2)]', // pb is half of the pt values
            )}
          >
            Services
          </h2>
        </div>
      </div>
      <div className="relative overflow-hidden bg-darkGray">
        {services.map(({ items, title, description }, index) => (
          <ServiceSection
            key={title}
            description={description}
            index={index}
            isEven={index % 2 === 0}
            items={items}
            title={title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
