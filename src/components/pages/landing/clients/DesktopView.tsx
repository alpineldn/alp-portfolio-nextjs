'use client';

import SanityImage from '@/components/common/sanity-image/SanityImage';
import cn from '@/utils/cn';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { Client } from './Clients';

interface DesktopViewProps {
  clients: Client[];
  className?: string;
}

const DesktopView: React.FC<DesktopViewProps> = ({ clients, className }) => {
  const DESIRED_LENGTH = 12;
  const [allClient, setClients] = useState(clients);

  const checkAndRepeatClients = () => {
    if (clients.length < DESIRED_LENGTH) {
      const repeatedClients = [...clients];
      while (repeatedClients.length < DESIRED_LENGTH) {
        repeatedClients.push(
          ...clients.slice(0, DESIRED_LENGTH - repeatedClients.length),
        );
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
    <div className={cn('relative', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[20%] bg-gradient-to-r from-dark via-dark/95 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[20%] bg-gradient-to-l from-dark via-dark/95 to-transparent"></div>
      <div className="relative border-y-[0.5px] border-gray/50" ref={emblaRef}>
        <div className="flex items-center">
          {allClient.map(({ image, name, _id }, index) => (
            <div
              key={_id + index}
              title={name}
              className={cn(
                'flex-[0_0_auto] px-[1.5rem] py-[1.66rem] xl:px-[3rem]',
              )}
            >
              <div className="flex h-full w-full items-center justify-center">
                <SanityImage
                  className="h-fit max-h-[2.8rem] w-fit max-w-[150px] object-contain xl:max-w-[200px]"
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
  );
};

export default DesktopView;
