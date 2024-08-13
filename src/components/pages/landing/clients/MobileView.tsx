import cn from '@/utils/cn';
import { Client } from './Clients';
import SanityImage from '@/components/common/sanity-image/SanityImage';

interface MobileViewProps {
  clients: Client[];
  className?: string;
}

const MobileView: React.FC<MobileViewProps> = ({ clients, className }) => {
  return (
    <div
      className={cn(
        'container relative grid-cols-2 gap-x-5 gap-y-5',
        className,
      )}
    >
      {clients.map(({ image, name, _id }) => (
        <div
          key={_id}
          className="flex items-center justify-center rounded-sm border border-gray/30 p-5"
        >
          <SanityImage
            className="h-fit max-h-[2.5rem] w-full object-contain"
            src={image}
            alt={name}
            sizes="200px"
          />
        </div>
      ))}
    </div>
  );
};

export default MobileView;
