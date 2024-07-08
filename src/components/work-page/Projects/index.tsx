'use client';
import type { Project } from '@/app/(app)/work/page';
import GridLayout from '@/components/common/project-layouts/GridLayout/GridLayout';
import ListLayout from '@/components/common/project-layouts/ListLayout/ListLayout';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store/store';
import MarqueeText from '@/components/common/ui/MarqueeText';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { firstVisit } = useStore((store) => store);
  const [hideMoreWorkBtn, setHideMoreWorkBtn] = useState(false);
  const [allProjects, setAllProjects] = useState(projects);
  const [loading, setLoading] = useState(false);

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
        <GridLayout className="pt-12 md:pt-32" projects={allProjects} />

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
