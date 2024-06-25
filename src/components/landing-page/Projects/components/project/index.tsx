'use client';
import { Category } from '@/app/(app)/work/page';
import Link from 'next/link';
import React from 'react';
import { Slug } from 'sanity';

interface ProjectProps {
  index: number;
  title: string;
  client?: string;
  slug: Slug;
  categories: Category[];
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  index,
  manageModal,
  title,
  client,
  slug,
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
      <td>
        <Link
          className="m-0 block py-[50px] text-[60px] font-normal transition-all duration-[0.4s] group-hover:translate-x-[-10px]"
          href={`/work/${slug.current}`}
        >
          {title}
        </Link>
      </td>
      <td>
        <Link
          href={`/work/${slug.current}`}
          className="block py-[50px] transition-all duration-300 group-hover:translate-x-[10px]"
        >
          {client}
        </Link>
      </td>
      <td>
        <Link
          href={`/work/${slug.current}`}
          className="block py-[50px] transition-all duration-300 group-hover:translate-x-[10px]"
        >
          {categories.map(({ title, _id }, index) => (
            <span key={_id}>
              {title} {index !== categories.length - 1 && ', '}
            </span>
          ))}
        </Link>
      </td>
    </tr>
  );
};

export default Project;
