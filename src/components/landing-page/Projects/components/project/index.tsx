'use client';
import { Category } from '@/app/(app)/work/page';
import React from 'react';

interface ProjectProps {
  index: number;
  title: string;
  client?: string;
  categories: Category[];
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  index,
  manageModal,
  title,
  client,
  categories,
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
      <td className="m-0 py-[50px] text-[60px] font-normal transition-all duration-[0.4s] group-hover:translate-x-[-10px]">
        {title}
      </td>
      <td className="py-[50px] transition-all duration-300 group-hover:translate-x-[10px]">
        {client}
      </td>
      <td className="py-[50px] transition-all duration-300 group-hover:translate-x-[10px]">
        {categories.map(({ title, _id }, index) => (
          <span key={_id}>
            {title} {index !== categories.length - 1 && ', '}
          </span>
        ))}
      </td>
    </tr>
  );
};

export default Project;
