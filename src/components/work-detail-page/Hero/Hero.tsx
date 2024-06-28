'use client';

import { Category } from '@/app/(app)/work/page';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { Slug } from 'sanity';
import SanityImage from '../../common/SanityImage/SanityImage';
import RoundedButton from '../../common/ui/RoundedButton';

interface HeroProps {
  title: string;
  client?: string;
  agency: string;
  categories: Category[];
  mainImage: SanityImageObject;
  previewURL?: Slug;
}

const Hero: React.FC<HeroProps> = ({
  title,
  agency,
  categories,
  client,
  mainImage,
  previewURL,
}) => {
  return (
    <section>
      <div className="relative h-full w-full pt-[277px]">
        <div className="container mx-auto">
          <h1 className="max-w-5xl text-[117px] font-normal leading-[1.2] tracking-tighter text-black">
            {title}
          </h1>

          <div className="relative">
            <Details
              client={client}
              agency={agency}
              categories={categories}
              previewURL={previewURL}
            />

            {!!previewURL?.current && (
              <div data-scroll data-scroll-speed={0.1}>
                <Link href={previewURL.current}>
                  <RoundedButton className="absolute right-0 top-0 flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-[50%] bg-[#455CE9] text-white">
                    <p className="relative z-[1] m-0 font-light">Visit Site</p>
                  </RoundedButton>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="relative z-[-1] mx-auto max-w-[1536px] !overflow-hidden py-[100px]">
          <div className="overflow-hidden">
            <div
              data-scroll
              data-scroll-speed={0.2}
              className="overflow-hidden"
            >
              <SanityImage
                sizes="100vw"
                src={mainImage}
                alt={title}
                className="aspect-auto h-full w-full scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

const Details: React.FC<Omit<HeroProps, 'mainImage' | 'title'>> = ({
  client,
  agency,
  categories,
  previewURL,
}) => {
  return (
    <ul className="mt-[118px] grid grid-flow-col gap-20">
      <li>
        <div className="border-b-2 pb-8 text-xs uppercase text-gray-400">
          Client
        </div>
        <div className="pt-8 text-lg">{client}</div>
      </li>
      {!!agency && (
        <li>
          <div className="border-b-2 pb-8 text-xs uppercase text-gray-400">
            AGENCY
          </div>
          <div className="pt-8 text-lg">{agency}</div>
        </li>
      )}

      <li>
        <div className="border-b-2 pb-8 text-xs uppercase text-gray-400">
          CATEGORIES
        </div>
        <div className="pt-8 text-lg">
          {categories.map(({ title, _id }, index) => (
            <span key={_id}>
              {title} {index !== categories.length - 1 && ', '}
            </span>
          ))}
        </div>
      </li>

      {!!previewURL?.current && (
        <li>
          <div className="border-b-2 pb-8 text-xs uppercase text-gray-400">
            PREVIEW URL
          </div>

          <Link className="block pt-8 text-lg" href={previewURL.current}>
            {previewURL.current}
          </Link>
        </li>
      )}
    </ul>
  );
};
