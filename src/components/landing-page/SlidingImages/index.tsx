'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Project } from '@/app/(app)/work/page';
import SanityImage from '@/components/common/SanityImage/SanityImage';
import { getRandomColor } from '@/utils/create-random-color';

interface SlidingImagesProps {
  projects: Project[];
}
const SlidingImages: React.FC<SlidingImagesProps> = ({ projects }) => {
  const midpoint = Math.ceil(projects.length / 2);
  const firstHalf = projects.slice(0, midpoint);
  const secondHalf = projects.slice(midpoint);

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section
      ref={container}
      className="relative z-[1] flex flex-col gap-[3vw] bg-white pt-[100px] lg:pt-[200px]"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {firstHalf.map((project) => (
          <Image key={project._id} {...project} />
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {secondHalf.map((project) => (
          <Image key={project._id} {...project} />
        ))}
      </motion.div>
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-[0_0_50%_50%] bg-white shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </section>
  );
};

export default SlidingImages;

const Image: React.FC<Project> = ({ _id, title, mainImage }) => {
  return (
    <div
      key={_id}
      className="flex h-[20vw] w-3/12 items-center justify-center"
      style={{ backgroundColor: getRandomColor() }}
    >
      <div className="relative h-4/5 w-4/5">
        <SanityImage
          sizes="33vw"
          className="h-full w-full object-cover"
          alt={title}
          src={mainImage}
        />
      </div>
    </div>
  );
};
