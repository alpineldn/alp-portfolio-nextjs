'use client';

import cn from '@/utils/cn';
import { services } from './data';
import ServiceSection from './service-section/ServiceSection';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = () => {
  return (
    <section className="services-section">
      <div className="relative overflow-hidden bg-darkGray py-section md:py-section-lg">
        <div className="container mx-auto">
          <h2
            className={cn(
              'text-section-subtitle text-lightGray',
              'pb-[calc(96px/2)] md:pb-[calc(144px/2)]',
            )}
          >
            Services
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-y-8 lg:gap-x-10">
          {services.map((service, index) => (
            <div key={index} className="service-container h-full">
              <div className="space-y-8">
                <FadeInAndSlideUpOnViewAnimation
                  className="service-title"
                  stagger={0.1} // Optional stagger for the title
                >
                  <h3 className="text-m">
                    <span className="text-m text-gray">{index + 1}. </span>
                    {service.title}
                  </h3>
                </FadeInAndSlideUpOnViewAnimation>
                <FadeInAndSlideUpOnViewAnimation
                  className="service-description"
                  stagger={0.1} // Optional stagger for the description
                >
                  <p className="text-s">{service.description}</p>
                </FadeInAndSlideUpOnViewAnimation>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
