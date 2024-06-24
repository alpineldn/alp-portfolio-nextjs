import { useEffect, useRef, useState } from 'react';
import ViewControl from './components/ViewControl';
import ListView from './components/views/list-view/ListView';
import { AnimatePresence } from 'framer-motion';
import GridView from './components/views/grid-view/GridView';

interface ProjectsProps {}
const Projects: React.FC<ProjectsProps> = ({}) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  return (
    <section>
      <div className="mx-auto max-w-[1536px] space-y-20 pt-[37px]">
        <ViewControl viewMode={viewMode} setViewMode={setViewMode} />

        <AnimatePresence mode="wait">
          {viewMode === 'list' && <ListView />}
          {viewMode === 'grid' && <GridView />}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Projects;
