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
      className="interactable group grid w-full cursor-pointer items-center gap-2 border-t border-solid border-t-white/50 py-xs text-white transition-all duration-300 last:border-b last:border-b-white/50 hover:opacity-50 max-lg:grid-cols-12 md:gap-5 lg:grid-cols-12 2xl:py-sm"
    >
      <h3 className="col-span-12 text-l lg:col-span-5">{title}</h3>
      <div className="col-span-12 block text-m max-lg:hidden md:col-span-6 lg:col-span-4">
        {client}
      </div>
      <div className="col-span-12 block text-m md:col-span-6 lg:col-span-3 xl:text-right">
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
