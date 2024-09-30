'use client';

import { services } from './data';
import ServiceSection from './service-section/ServiceSection';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = ({}) => {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="container mx-auto">
        <h2 className="pb-sm pt-sm text-section-subtitle text-lightGray md:pt-section xl:pb-section">
          Services
        </h2>
      </div>

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
    </section>
  );
};

export default Services;
