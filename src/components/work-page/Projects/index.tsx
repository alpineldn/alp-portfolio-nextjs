import { useEffect, useRef, useState } from 'react';
import ViewControl from './components/ViewControl';
import ListView from './components/views/list-view/ListView';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';
import GridView from './components/views/grid-view/GridView';
import { motion } from 'framer-motion';

interface ProjectsProps {}
const Projects: React.FC<ProjectsProps> = ({}) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  return (
    <section className="relative z-[1] bg-white" ref={container}>
      <div className="mx-auto max-w-[1536px] space-y-20 pt-[37px]">
        <ViewControl viewMode={viewMode} setViewMode={setViewMode} />

        <AnimatePresence mode="wait">
          {viewMode === 'list' && <ListView />}
          {viewMode === 'grid' && <GridView />}
        </AnimatePresence>
        {/*  */}
        {/*  */}
      </div>
      <motion.div style={{ height }} className="relative">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-[0_0_50%_50%] bg-white shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </section>
  );
};
export default Projects;
