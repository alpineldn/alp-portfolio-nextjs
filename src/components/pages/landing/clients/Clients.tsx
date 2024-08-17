'use client';

import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import ClientsList from './ClientsList';

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
    <section className="relative overflow-hidden bg-dark">
      <div className="container mx-auto">
        <h2 className="subtitle-md mb-xs text-lightGray xl:mb-section-md">
          Partners
        </h2>

        <ClientsList
          className="grid grid-cols-2 md:grid-cols-3"
          clients={clients}
        />
      </div>
    </section>
  );
};

export default Clients;
