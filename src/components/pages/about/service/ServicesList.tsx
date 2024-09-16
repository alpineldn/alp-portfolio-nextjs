import cn from '@/utils/cn';
import { useRef } from 'react';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

interface ServicesListProps {
  items: string[];
}

const ServicesList: React.FC<ServicesListProps> = ({ items }) => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className={cn('w-full md:max-w-[35%] xl:max-w-[45%]')}>
      <ul ref={listRef}>
        {items.map((item, index) => (
          <li key={item}>
            <FadeInAndSlideUpOnViewAnimation
              initial={{ y: 50 }}
              delay={0.2 + index * 0.02}
              viewport={{ root: listRef }}
              className={cn('border-b border-b-gray py-3 text-m', {
                'border-y border-y-gray': index === 0,
              })}
            >
              {item}
            </FadeInAndSlideUpOnViewAnimation>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
