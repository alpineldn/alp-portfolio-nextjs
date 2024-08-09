'use client';

import type { Project } from '@/app/(app)/work/page';
import ChevronIcon from '@/components/common/icons/ChevronIcon';
import GridLayout from '@/components/common/project-layouts/GridLayout/GridLayout';
import LinkEl from '@/components/common/ui/LinkEl';
import { useStore } from '@/store/store';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { firstVisit } = useStore((store) => store);
  const [hideMoreWorkBtn, setHideMoreWorkBtn] = useState(false);
  const [allProjects, setAllProjects] = useState(() => projects.slice(0, 8));

  const showAllWorks = () => {
    setHideMoreWorkBtn(true);
    setAllProjects(projects);
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
              data-type="simple-hover"
              onClick={showAllWorks}
            >
              <LinkEl>
                More Work
                <ChevronIcon className="size-5 rotate-45 text-white" />
              </LinkEl>
            </button>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};
export default Projects;
