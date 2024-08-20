'use client';

import { services } from './data';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto border-t border-white/50 py-sm">
        <div className="grid grid-cols-12">
          {services.map(({ items, title }, index) => (
            <div
              key={index}
              className="col-span-12 mx-6 max-xl:pt-xs xl:col-span-3 xl:translate-y-[-2.5rem]"
            >
              <h3 className="heading-m mb-xs text-lightGray">{title}</h3>

              <ul className="pb-[3.5rem] md:pb-[2.5rem]">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="text-spaced-sm border-t border-gray py-4"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
