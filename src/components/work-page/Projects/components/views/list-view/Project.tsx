import { Project as ProjectTypes } from '@/app/(app)/work/page';
import Link from 'next/link';
import React from 'react';

interface ProjectProps extends ProjectTypes {
  index: number;
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const Project: React.FC<ProjectProps> = ({
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
          className="block py-[50px] pl-[100px] text-5xl font-normal transition-all duration-[0.4s] group-hover:translate-x-[-10px]"
          href={`work/${slug.current}`}
        >
          {title}
        </Link>
      </td>
      <td>
        <Link
          className="block py-[50px] pr-[100px] text-lg transition-all duration-300 group-hover:translate-x-[10px]"
          href={`work/${slug.current}`}
        >
          {client}
        </Link>
      </td>
      <td>
        <Link
          className="block py-[50px] text-lg transition-all duration-300 group-hover:translate-x-[10px]"
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

export default Project;
