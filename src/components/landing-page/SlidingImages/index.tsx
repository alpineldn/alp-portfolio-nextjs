import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const slider1 = [
  {
    color: '#e3e5e7',
    src: 'c2.jpg',
  },
  {
    color: '#d6d7dc',
    src: 'decimal.jpg',
  },
  {
    color: '#e3e3e3',
    src: 'funny.jpg',
  },
  {
    color: '#21242b',
    src: 'google.jpg',
  },
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: 'maven.jpg',
  },
  {
    color: '#e5e0e1',
    src: 'panda.jpg',
  },
  {
    color: '#d7d4cf',
    src: 'powell.jpg',
  },
  {
    color: '#e1dad6',
    src: 'wix.jpg',
  },
];

interface SlidingImagesProps {}
const SlidingImages: React.FC<SlidingImagesProps> = ({}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="relative z-[1] mt-[200px] flex flex-col gap-[3vw] bg-white"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="flex h-[20vw] w-3/12 items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div className="relative h-4/5 w-4/5">
                <Image
                  className="object-cover"
                  fill={true}
                  alt={'image'}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="relative left-[-10vw] flex w-[120vw] gap-[3vw]"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="flex h-[20vw] w-3/12 items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative h-4/5 w-4/5">
                <Image
                  className="object-cover"
                  fill={true}
                  alt={'image'}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-[0_0_50%_50%] bg-white shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
