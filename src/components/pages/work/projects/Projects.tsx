'use client';

import type { Project } from '@/app/(app)/work/page';
import GridLayout from '@/components/common/work-layouts/GridLayout/GridLayout';
import { useStore } from '@/store/store';
import { motion } from 'framer-motion';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { firstVisit } = useStore((store) => store);

  return (
    <motion.section className="section-padding-t relative z-[1] pb-[100px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: firstVisit ? 3.5 : 2, duration: 1.5 },
        }}
        className="container mx-auto space-y-20"
      >
        <GridLayout projects={projects} />
      </motion.div>
    </motion.section>
  );
};
export default Projects;
