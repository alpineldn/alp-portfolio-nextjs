import React from 'react';
import { motion } from 'framer-motion';
import { smoothCurve } from '@/components/common/anim';

interface CurveProps {}

const Curve: React.FC<CurveProps> = ({}) => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: smoothCurve },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: smoothCurve },
    },
  };

  return (
    <svg className="absolute left-[-99px] top-0 h-full w-[100px] fill-[rgb(41,41,41)] stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
