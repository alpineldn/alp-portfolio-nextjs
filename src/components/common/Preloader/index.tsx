import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import { usePathname } from 'next/navigation';
import { smoothCurve } from '../anim';

const words: string[] = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
];

interface PreloaderProps {
  pageName?: string;
  pathName: string;
}
const Preloader: React.FC<PreloaderProps> = ({ pageName, pathName }) => {
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 },
  );

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1 || pathName !== '/') return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: smoothCurve },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: smoothCurve, delay: 0.3 },
    },
  };

  return (
    <motion.div
      key={pathName}
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-[99] flex h-screen w-screen items-center justify-center bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="absolute z-[1] flex items-center text-[42px] text-white"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <span className="mr-[10px] block h-[10px] w-[10px] rounded-[50%] bg-white"></span>

            {pathName === '/' ? words[index] : pageName}
          </motion.p>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
