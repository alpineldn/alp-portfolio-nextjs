import Link from 'next/link';
import { Project as ProjectType } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/SanityImage/SanityImage';
import { getRandomColor } from '@/utils/create-random-color';
import { useMemo, useState } from 'react';

interface ProjectProps extends ProjectType {
  manageModal: (active: boolean, x: number, y: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  slug,
  mainImage,
  title,
  categories,
  client,
  manageModal,
}) => {
  const color = useMemo(() => getRandomColor(), []);

  return (
    <Link
      className="even:translate-y-[20%]"
      href={`/work/${slug.current}`}
      onMouseEnter={(e) => {
        manageModal(true, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, e.clientX, e.clientY);
      }}
    >
      <div className="relative w-full">
        <div
          style={{ backgroundColor: color }}
          className="group flex aspect-square h-full w-full items-center justify-center overflow-hidden"
        >
          <figure className="max-w-[85%]">
            <SanityImage
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={mainImage}
              alt={title}
              className="aspect-auto object-cover transition-transform duration-500 ease-smooth-curve group-hover:scale-105"
            />
          </figure>
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
export default Project;
