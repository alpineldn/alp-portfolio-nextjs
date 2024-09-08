import cn from '@/utils/cn';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ServicesListProps {
  items: string[];
}

const ServicesList: React.FC<ServicesListProps> = ({ items }) => {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!listRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        },
      );
    });
    return () => context.revert();
  }, [listRef]);

  return (
    <div className={cn('w-full md:max-w-[35%] xl:max-w-[45%]')}>
      <ul ref={listRef}>
        {items.map((item) => (
          <li
            className="border-b border-b-gray py-3 text-m first:border-y first:border-y-gray"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
