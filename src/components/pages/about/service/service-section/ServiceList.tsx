import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';
import cn from '@/utils/cn';

interface ServiceListProps {
  items: string[];
}

const ServiceList: React.FC<ServiceListProps> = ({ items }) => {
  return (
    <div className={cn('w-full py-8')}>
      <FadeInAndSlideUpOnViewAnimation
        isList
        className="flex flex-wrap"
        stagger={0.3} // Optionally, you can specify stagger if needed
        duration={0.8} // Optionally, you can specify duration if needed
        hidden={{ y: 25 }} // This is still valid as 'hidden' prop
      >
        {items.map((item, index) => (
          <li key={item} className="inline">
            <span
              className={cn(
                'my-1 mr-2 inline-block border border-solid border-mediumGray p-2 text-s',
                { 'border border-solid border-mediumGray': index === 0 },
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
