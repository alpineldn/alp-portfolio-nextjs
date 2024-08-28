import cn from '@/utils/cn';

interface ServicesListProps {
  items: string[];
}

const ServicesList: React.FC<ServicesListProps> = ({ items }) => {
  return (
    <div className={cn('col-span-4')}>
      <ul>
        {items.map((item) => (
          <li
            className="heading-m border-b border-b-gray py-3 first:border-y first:border-y-gray"
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
