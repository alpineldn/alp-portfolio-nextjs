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
    <div className="overflow-hidden bg-dark">
      <div>
        <div
          className="relative cursor-grab border-y-[0.5px] border-[#D9D9D9]/20 active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex items-center">
            {clients.map(({ logo, name, url }) => {
              const Element = url ? 'a' : 'div';

              return (
                <Element
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
            {/* <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
