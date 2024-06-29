import Link from 'next/link';
import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/SanityImage/SanityImage';
import { getRandomColor } from '@/utils/create-random-color';
import { useMemo } from 'react';

interface ProjectProps extends ProjectType {
  index: number;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  mainImage,
  title,
  categories,
  client,
  manageModal,
  index,
}) => {
  return (
    <Link
      className="md:even:translate-y-[30%]"
      href={`/work/${slug.current}`}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
    >
      <div className="relative w-full">
        <div className="group flex aspect-square h-full w-full items-center justify-center overflow-hidden">
          <SanityImage
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={mainImage}
            alt={title}
            className="aspect-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
          />
        </div>
        <div className="w-full py-4">
          <h3 className="border-b-2 py-6 text-5xl text-[#1c1d20]">{title}</h3>
          <div className="flex justify-between py-5">
            <p className="text-lg">{client}</p>
            <ul className="text-lg">
              {categories.map(({ title, _id }, index) => (
                <li key={_id}>
                  {title} {index !== categories.length - 1 && ', '}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
