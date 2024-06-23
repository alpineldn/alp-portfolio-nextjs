import { useState } from 'react';
import ViewControl from './components/ViewControl';
import ProjectList from './components/ProjectList';
interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <section>
      <div className="container pt-[37px] space-y-20">
        <ViewControl viewMode={viewMode} setViewMode={setViewMode} />
        <ProjectList />
      </div>
    </section>
  );
};
export default Projects;
