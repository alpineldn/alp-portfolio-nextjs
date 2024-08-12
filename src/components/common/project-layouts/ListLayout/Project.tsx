import { Project as ProjectTypes } from '@/app/(app)/work/page';
import React from 'react';
import PageTransitionLink from '../../ui/PageTransitionLink';

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
      className="interactable group grid w-full cursor-pointer grid-flow-col items-center gap-5 border-t border-solid border-t-white/50 py-xs text-white transition-all duration-300 last:border-b last:border-b-white/50 hover:opacity-50 2xl:py-sm"
    >
      <h3 className="heading-xl col-span-6">{title}</h3>
      <div className="heading-m block">{client}</div>
      <div className="heading-m block text-right">
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
