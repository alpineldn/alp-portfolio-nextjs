'use client';
import type { Project } from '@/app/(app)/work/page';
import GridLayout from '@/components/common/project-layouts/GridLayout/GridLayout';
import ListLayout from '@/components/common/project-layouts/ListLayout/ListLayout';
import { useWindowSize } from '@/hooks/useWindowSize';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ProjectLayoutControl from './components/ProjectLayoutControl';
import { useStore } from '@/store/store';
import MarqueeText from '@/components/common/ui/MarqueeText';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { width = 0 } = useWindowSize();
  const { firstVisit } = useStore((store) => store);
  const [hideMoreWorkBtn, setHideMoreWorkBtn] = useState(false);
  const [allProjects, setAllProjects] = useState(projects);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  const fetchAllWorks = async () => {
    if (loading) return;

    try {
      setLoading(true);

      fetch('/api/all-work')
        .then((res) => res.json())
        .then((data: { projects: Project[] }) => {
          setAllProjects((prev) => [...prev, ...data.projects]);
          setHideMoreWorkBtn(true);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  useEffect(() => {
    if (!width) return;

    if (width <= 1024) {
      setViewMode('grid');
    }
  }, [width]);

  return (
    <motion.section className="relative z-[1] bg-dark pb-[100px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: firstVisit ? 3.5 : 2, duration: 1.5 },
        }}
        className="mx-auto max-w-[1536px] space-y-20 px-5 pt-[37px] sm:px-10"
      >
        <ProjectLayoutControl viewMode={viewMode} setViewMode={setViewMode} />
        <AnimatePresence mode="wait">
          {viewMode === 'list' && <ListLayout projects={allProjects} />}
          {viewMode === 'grid' && <GridLayout projects={allProjects} />}
        </AnimatePresence>
        {!hideMoreWorkBtn && (
          <div className="flex items-center pb-10">
            <button
              className="interactable"
              data-type="click"
              onClick={fetchAllWorks}
            >
              <MarqueeText innerClassName="w-[calc(100%-120px)]">
                More Work ↗
              </MarqueeText>
            </button>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};
export default Projects;
