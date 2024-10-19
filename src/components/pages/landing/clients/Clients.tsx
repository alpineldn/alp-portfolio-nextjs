'use client';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';
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
    <FadeInAndSlideUpOnViewAnimation hidden={{ y: 100 }}>
      <section className="relative overflow-hidden bg-dark py-section md:py-section-lg">
        <div className="container mx-auto">
          <h2 className="mb-xs text-section-subtitle text-lightGray xl:mb-section-md">
            Partners
          </h2>

          <ClientsList clients={clients} />
        </div>
      </section>
    </FadeInAndSlideUpOnViewAnimation>
  );
};

export default Clients;
