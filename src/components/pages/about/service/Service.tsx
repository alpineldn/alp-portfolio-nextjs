'use client';

import cn from '@/utils/cn';
import { services } from './data';
import Description from './Description';
import ServicesList from './ServicesList';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* <div className="container mx-auto">
        <h2 className="pt-sm text-section-subtitle text-lightGray md:pt-section xl:mb-section-md">
          Services
        </h2>
      </div> */}

      <div>
        <div>
          {services.map(({ items, title, description }, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={cn(
                  index === 0
                    ? 'pb-section md:py-section-lg'
                    : 'py-section md:py-section-lg',
                  isEven ? 'bg-dark' : 'bg-darkGray',
                )}
              >
                <div
                  className={cn(
                    'container mx-auto flex gap-7 xl:gap-16',
                    isEven
                      ? 'flex-row justify-start max-md:flex-col'
                      : 'flex-row justify-end max-md:flex-col-reverse',
                  )}
                >
                  {isEven ? (
                    <Description
                      index={index}
                      title={title}
                      description={description}
                    />
                  ) : (
                    <ServicesList items={items} />
                  )}

                  <div className="md:col-span-1 2xl:col-span-2" />

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
