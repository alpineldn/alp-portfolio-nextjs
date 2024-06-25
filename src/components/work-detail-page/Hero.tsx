import { Category } from '@/app/(app)/work/page';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { Slug } from 'sanity';

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
      <div className="container mx-auto pt-[277px]">
        <h1 className="max-w-5xl text-[117px] font-normal uppercase leading-[1.2] tracking-tighter text-black">
          {title}
        </h1>

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
      </div>
    </section>
  );
};
export default Hero;
