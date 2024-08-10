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
    <PageTransitionLink
      href={`work/${slug.current}`}
      dataType="link"
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="interactable 2xl:py-sm py-xs group grid w-full cursor-pointer grid-cols-12 items-center border-t border-solid border-t-white/50 text-white transition-all duration-300 last:border-b last:border-b-white/50 hover:opacity-50"
    >
      <h3 className="heading-xl col-span-6">{title}</h3>
      <div className="heading-m col-span-3 block">{client}</div>
      <div className="heading-m interactable col-span-3 block text-right">
        {categories.map((category, index) => (
          <span key={category._id}>
            {category.title}
            {index !== categories.length - 1 && ', '}
          </span>
        ))}
      </div>
    </PageTransitionLink>
  );
};

export default ProjectList;
