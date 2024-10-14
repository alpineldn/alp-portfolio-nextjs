import cn from '@/utils/cn';
import { useRef } from 'react';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

interface ServiceListProps {
  items: string[];
}

const ServiceList: React.FC<ServiceListProps> = ({ items }) => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className={cn('w-full py-8')}>
      <ul ref={listRef}>
        {items.map((item, index) => (
          <li
            key={item}
            //className="border-y border-b border-y-gray border-b-gray py-1 text-s"
            className="inline"
          >
            <FadeInAndSlideUpOnViewAnimation
              initial={{ y: 50 }}
              delay={0.2 + index * 0.02}
              viewport={{ root: listRef }}
              className={cn(
                'border-mediumGray my-1 mr-2 inline-block border border-solid p-2 text-s',
                {
                  'border-mediumGray border border-solid': index === 0,
                },
              )}
            >
              {item}
            </FadeInAndSlideUpOnViewAnimation>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
