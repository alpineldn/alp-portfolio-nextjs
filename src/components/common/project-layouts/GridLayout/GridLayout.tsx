import { Project as ProjectType } from '@/app/(app)/work/page';
import ProjectCard from './GridProject';

interface GridViewProps {
  projects: ProjectType[];
  className?: string;
}

const GridLayout: React.FC<GridViewProps> = ({ projects, className }) => {
  return (
    <section className={className}>
      <div className="mb-[200px] grid grid-cols-1 gap-y-20 md:mb-[300px] md:grid-cols-2 md:gap-x-10 md:gap-y-48">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project._id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default GridLayout;
