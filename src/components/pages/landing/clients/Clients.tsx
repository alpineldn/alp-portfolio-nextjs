'use client';

import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

export interface Client {
  _id: string;
  name: string;
  image: SanityImageObject;
}

interface ClientsProps {
  clients: Client[];
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  return (
    <div className="relative overflow-hidden bg-dark">
      <div className="subtitle-md container mx-auto text-lightGray">
        <h2 className="subtitle-md mb-xs text-lightGray xl:mb-section-md">
          Partners
        </h2>
      </div>

      {/* <DesktopView className="hidden sm:block" clients={clients} /> */}
      <MobileView className="grid" clients={clients} />
    </div>
  );
};

export default Clients;
