'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import cn from '@/utils/cn';
import Image from 'next/image';

const clients = [
  {
    name: 'Google',
    logo: '/images/clients/google.png',
    url: 'https://www.google.com/',
  },
  {
    name: 'Facebook',
    logo: '/images/clients/facebook.png',
  },
  {
    name: 'Twitter',
    logo: '/images/clients/twitter.png',
  },
  {
    name: 'Microsoft',
    logo: '/images/clients/microsoft.png',
    url: 'https://www.microsoft.com/',
  },
  {
    name: 'Apple',
    logo: '/images/clients/apple.png',
  },
  {
    name: 'Google',
    logo: '/images/clients/google.png',
    url: 'https://www.google.com/',
  },
  {
    name: 'Facebook',
    logo: '/images/clients/facebook.png',
  },
  {
    name: 'Twitter',
    logo: '/images/clients/twitter.png',
  },
  {
    name: 'Microsoft',
    logo: '/images/clients/microsoft.png',
    url: 'https://www.microsoft.com/',
  },
  {
    name: 'Apple',
    logo: '/images/clients/apple.png',
  },
  {
    name: 'Google',
    logo: '/images/clients/google.png',
    url: 'https://www.google.com/',
  },
  {
    name: 'Facebook',
    logo: '/images/clients/facebook.png',
  },
  {
    name: 'Twitter',
    logo: '/images/clients/twitter.png',
  },
  {
    name: 'Microsoft',
    logo: '/images/clients/microsoft.png',
    url: 'https://www.microsoft.com/',
  },
  {
    name: 'Apple',
    logo: '/images/clients/apple.png',
  },
];

interface ClientsProps {}
const Clients: React.FC<ClientsProps> = ({}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 8000,
      dragFree: true,
    },
    [Autoplay({ delay: 0 })],
  );

  return (
    <div className="relative overflow-hidden bg-dark">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[20%] bg-gradient-to-r from-dark via-dark/95 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[20%] bg-gradient-to-l from-dark via-dark/95 to-transparent"></div>
        <div
          className="relative cursor-grab border-y-[0.5px] border-[#D9D9D9]/20 active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex items-center">
            {clients.map(({ logo, name, url }) => {
              const Element = url ? 'a' : 'div';

              return (
                <Element
                  data-type="link"
                  key={name}
                  href={url}
                  title={name}
                  target="_blank"
                  className={cn(
                    !!url && 'interactable',
                    'flex-[0_0_auto] px-[3rem] py-[1.66rem]',
                  )}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      className="h-fit max-h-[2.8rem] w-fit object-contain"
                      src={logo}
                      alt={name}
                      width={200}
                      height={200}
                    />
                  </div>
                </Element>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;