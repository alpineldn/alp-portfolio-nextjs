'use client';

import { useStore } from '@/store/store';
import { animatePageIn } from '@/utils/animations';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

export default function Template({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState<number>(0);
  const { pageName, firstVisit, setFirstVisit } = useStore((state) => state);
  const time = firstVisit ? 2 : 1;

  useEffect(() => {
    if (index === words.length - 1 || !firstVisit) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );
  }, [index]);

  useEffect(() => {
    animatePageIn(time, firstVisit);
  }, [pageName]);

  useEffect(() => {
    if (firstVisit) {
      setTimeout(() => {
        setFirstVisit();
      }, 3000);
    }
  }, [firstVisit, setFirstVisit]);

  return (
    <div>
      <div
        id="loading-banner-1"
        className="fixed left-0 top-0 z-30 flex min-h-screen w-full items-center justify-center bg-neutral-950"
      >
        {firstVisit ? (
          <>
            <AnimatedLogo className="max-w-[120px]" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              id="logo-name"
              className="ml-3 text-xl font-medium text-white"
            >
              Alpineldn
            </motion.p>
          </>
        ) : (
          <p
            id="page-name"
            className="absolute z-[1] flex items-center text-[42px] text-white opacity-0"
          >
            {pageName}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}

const transition = {
  duration: 2,
  yoyo: Infinity,
  ease: 'easeInOut',
};

export const AnimatedLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 231.53 92.95"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: '8px',
        }}
        d="m5.66 86.84 64.93-64.93 65.29 65.3H62.69l81.55-81.55 81.64 81.64"
      />
    </svg>
  );
};
