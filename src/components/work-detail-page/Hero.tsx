import { Category } from '@/app/(app)/work/page';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

interface HeroProps {
  title: string;
  client?: string;
  agency: string;
  categories: Category[];
  mainImage: SanityImageObject;
}

const Hero: React.FC<HeroProps> = ({
  title,
  agency,
  categories,
  client,
  mainImage,
}) => {
  return (
    <section>
      <div className="container mx-auto pt-[277px]">
        <h1 className="max-w-5xl text-[117px] font-normal uppercase leading-[1.2] tracking-tighter text-black">
          {title}
        </h1>

        <ul className="mt-[118px] grid grid-cols-3 gap-20">
          <li>
            <div className="f border-b-2 pb-8 text-xs uppercase text-gray-400">
              AGENCY
            </div>
            <div className="pt-8 text-lg">{agency}</div>
          </li>
          <li>
            <div className="f border-b-2 pb-8 text-xs uppercase text-gray-400">
              CLIENT
            </div>
            <div className="pt-8 text-lg">{client}</div>
          </li>
          <li>
            <div className="f border-b-2 pb-8 text-xs uppercase text-gray-400">
              CATEGORIES
            </div>
            <div className="pt-8 text-lg">
              {categories.map(({ title, _id }) => (
                <span key={_id}>{title}</span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Hero;
