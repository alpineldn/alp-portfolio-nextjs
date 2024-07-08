import { Project as ProjectTypes } from '@/app/(app)/work/page';
import React from 'react';
import PageTransitionLink from '../../ui/PageTransitionLink';
import cn from '@/utils/cn';

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
      data-type="link"
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="interactable group w-full cursor-pointer border-t border-solid border-t-light/50 text-light transition-all duration-200 last:border-b last:border-b-light/50 hover:opacity-50"
    >
      <td>
        <PageTransitionLink
          className={cn(
            'h3',
            'block py-7 font-normal transition-all duration-[0.4s] 2xl:py-[50px]',
          )}
          href={`work/${slug.current}`}
        >
          {title}
        </PageTransitionLink>
      </td>
      <td>
        <PageTransitionLink
          className="body-2 block py-7 pr-5 transition-all duration-300 sm:pr-10 2xl:py-[50px] 2xl:pr-[100px]"
          href={`work/${slug.current}`}
        >
          {client}
        </PageTransitionLink>
      </td>
      <td>
        <PageTransitionLink
          className="body-2 block py-7 transition-all duration-300 2xl:py-[50px]"
          href={`work/${slug.current}`}
        >
          {categories.map((category, index) => (
            <span key={category._id}>
              {category.title}
              {index !== categories.length - 1 && ', '}
            </span>
          ))}
        </PageTransitionLink>
      </td>
    </tr>
  );
};

export default ProjectList;
