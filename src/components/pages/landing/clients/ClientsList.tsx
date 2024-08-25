import cn from '@/utils/cn';
import { Client } from './Clients';
import SanityImage from '@/components/common/sanity-image/SanityImage';

interface ClientsListProps {
  clients: Client[];
  className?: string;
}

const ClientsList: React.FC<ClientsListProps> = ({ clients, className }) => {
  return (
    <div className={cn('relative w-full gap-x-5 gap-y-5', className)}>
      {clients.map(({ image, name, _id }, index) => {
        const desktopColumnIndex = index % 3;

        return (
          <div
            key={_id}
            // className={cn('flex rounded-sm py-5 pr-5 max-md:justify-start', {
            //   'md:justify-start': desktopColumnIndex === 0,
            //   'md:justify-center': desktopColumnIndex === 1,
            //   'md:justify-end': desktopColumnIndex === 2,
            // })}
              className={cn('flex rounded-sm py-5 pr-5')}

          >
            <div className="">
              <SanityImage
                className="block max-h-[2.5rem] object-contain"
                src={image}
                alt={name}
                sizes="200px"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientsList;
