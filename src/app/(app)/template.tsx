'use client';

import { useStore } from '@/store/store';
import { animatePageIn, logo_animation } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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
            className="heading-xl absolute z-[1] flex items-center text-white opacity-0"
          >
            {pageName}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}

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
        transition={logo_animation}
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
