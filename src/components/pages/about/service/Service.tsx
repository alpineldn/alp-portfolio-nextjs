'use client';

import cn from '@/utils/cn';
import { services } from './data';
import Description from './Description';
import ServicesList from './ServicesList';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="container mx-auto">
        <h2 className="subtitle-md pt-sm text-lightGray md:pt-section xl:mb-section-md">
          Services
        </h2>
      </div>

      <div>
        <div>
          {services.map(({ items, title, description }, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={cn(
                  'py-section md:py-section-lg',
                  isEven ? 'bg-dark' : 'bg-darkGray',
                )}
              >
                <div className="container mx-auto grid grid-cols-12">
                  {isEven ? (
                    <Description
                      index={index}
                      title={title}
                      description={description}
                    />
                  ) : (
                    <ServicesList items={items} />
                  )}

                  <div className="col-span-2" />

                  {isEven ? (
                    <ServicesList items={items} />
                  ) : (
                    <Description
                      index={index}
                      title={title}
                      description={description}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
