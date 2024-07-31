'use client';

import SanityImage from '@/components/common/sanity-image/SanityImage';
import cn from '@/utils/cn';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export interface Client {
  _id: string;
  name: string;
  image: SanityImageObject;
}

interface ClientsProps {
  clients: Client[];
}
const Clients: React.FC<ClientsProps> = ({ clients }) => {
  const [allClient, setClients] = useState(clients);

  const checkAndRepeatClients = () => {
    if (clients.length < 10) {
      const repeatedClients = [...clients];
      while (repeatedClients.length < 10) {
        repeatedClients.push(...clients.slice(0, 10 - repeatedClients.length));
      }
      setClients(repeatedClients);
    }
  };

  useEffect(() => {
    checkAndRepeatClients();
  }, [clients]);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 8000,
      watchDrag: false,
    },
    [Autoplay({ delay: 0 })],
  );

  return (
    <div className="relative overflow-hidden bg-dark">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[20%] bg-gradient-to-r from-dark via-dark/95 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[20%] bg-gradient-to-l from-dark via-dark/95 to-transparent"></div>
        <div
          className="relative border-y-[0.5px] border-[#D9D9D9]/20"
          ref={emblaRef}
        >
          <div className="flex items-center">
            {allClient.map(({ image, name, _id }, index) => (
              <div
                key={_id + index}
                title={name}
                className={cn('flex-[0_0_auto] px-[3rem] py-[1.66rem]')}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <SanityImage
                    className="h-fit max-h-[2.8rem] w-fit object-contain"
                    src={image}
                    alt={name}
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
