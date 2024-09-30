'use client';

import { services } from './data';
import ServiceSection from './service-section/ServiceSection';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = ({}) => {
  return (
    <section className="relative overflow-hidden bg-dark">
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
