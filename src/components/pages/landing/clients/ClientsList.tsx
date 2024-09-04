import cn from '@/utils/cn';
import { Client } from './Clients';
import SanityImage from '@/components/common/sanity-image/SanityImage';

interface ClientsListProps {
  clients: Client[];
  className?: string;
}

const ClientsList: React.FC<ClientsListProps> = ({ clients }) => {
  return (
    <div className={cn('relative flex w-full flex-wrap gap-5 lg:gap-10')}>
      {clients.map(({ image, name, _id }) => (
        <div key={_id}>
          <SanityImage
            className="block max-h-[2rem] max-w-[15rem] object-contain lg:max-h-[2.5rem] lg:max-w-[15rem]"
            src={image}
            alt={name}
            sizes="180px"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientsList;
