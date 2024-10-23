import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';
import cn from '@/utils/cn';

interface ServiceListProps {
  items: string[];
}

const ServiceList: React.FC<ServiceListProps> = ({ items }) => {
  return (
    <div className={cn('w-full py-8')}>
      <FadeInAndSlideUpOnViewAnimation
        className="flex flex-wrap"
        stagger={0.3} // Stagger delay for children
      >
        {items.map((item) => (
          <li key={item} className="inline">
            <span
              className={cn(
                'my-1 mr-2 inline-block border border-solid border-mediumGray p-2 text-s',
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </FadeInAndSlideUpOnViewAnimation>
    </div>
  );
};

export default ServiceList;
