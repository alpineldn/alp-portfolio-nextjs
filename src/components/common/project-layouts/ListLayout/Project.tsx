import { Project as ProjectTypes } from '@/app/(app)/work/page';
import Link from 'next/link';
import React from 'react';

interface ProjectProps extends ProjectTypes {
  index: number;
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const ProjectList: React.FC<ProjectProps> = ({
  index,
  manageModal,
  title,
  categories,
  client,
  slug,
}) => {
  return (
    <tr
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group w-full cursor-pointer border-t border-solid border-t-[rgb(201,201,201)] transition-all duration-200 last:border-b last:border-b-[rgb(201,201,201)] hover:opacity-50"
    >
      <td>
        <Link
          className="block py-7 pl-5 text-2xl font-normal transition-all duration-[0.4s] group-hover:translate-x-[-10px] sm:pl-10 md:text-3xl lg:text-4xl 2xl:py-[50px] 2xl:pl-[100px] 2xl:text-6xl"
          href={`work/${slug.current}`}
        >
          {title}
        </Link>
      </td>
      <td>
        <Link
          className="block py-7 pr-5 text-lg transition-all duration-300 group-hover:translate-x-[10px] sm:pr-10 2xl:py-[50px] 2xl:pr-[100px]"
          href={`work/${slug.current}`}
        >
          {client}
        </Link>
      </td>
      <td>
        <Link
          className="block py-7 text-lg transition-all duration-300 group-hover:translate-x-[10px] 2xl:py-[50px]"
          href={`work/${slug.current}`}
        >
          {categories.map((category, index) => (
            <span key={category._id}>
              {category.title}
              {index !== categories.length - 1 && ', '}
            </span>
          ))}
        </Link>
      </td>
    </tr>
  );
};

export default ProjectList;