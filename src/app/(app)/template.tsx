'use client';

import { useStore } from '@/store/store';
import { animatePageIn } from '@/utils/animations';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const { pageName, firstVisit, setFirstVisit } = useStore((state) => state);
  const time = firstVisit ? 2 : 1;

  useEffect(() => {
    animatePageIn(time, firstVisit, setFirstVisit);
  }, [pageName]);

  return (
    <div>
      <div
        id="loading-banner-1"
        className="fixed left-0 top-0 z-30 flex min-h-screen w-full items-center justify-center bg-neutral-950"
      >
        {firstVisit ? (
          <>
            <AnimatedLogo className="max-w-[100px] xl:max-w-[200px]" />
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