'use client';

import { useStore } from '@/store/store';
import { animatePageIn } from '@/utils/animations';
import { HOMEPAGE_ID } from '@/utils/constants';
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
        className="bg-noise-animation fixed left-0 top-0 z-30 flex min-h-screen w-full items-center justify-center overflow-hidden bg-darkGray bg-cover bg-center"
      >
        {firstVisit ? (
          <>
            <AnimatedLogo className="w-full max-w-[100px] xl:max-w-[200px]" />
          </>
        ) : (
          <div
            className="absolute z-[1] flex items-center opacity-0"
            id="page-name"
          >
            {pageName === HOMEPAGE_ID ? (
              <AnimatedLogo
                duration={1.6}
                className="w-full max-w-[100px] xl:max-w-[200px]"
              />
            ) : (
              <p className="text-loading-text uppercase text-gray">
                {pageName}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="bg-noise-animation relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export const AnimatedLogo = ({
  className,
  duration = 2,
}: {
  className?: string;
  duration?: number;
}) => {
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
        transition={{ duration: duration, yoyo: Infinity, ease: 'easeInOut' }}
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: '8px',
        }}
        d="m5.66 86.84 64.93-64.93 65.29 65.3H62.69l81.55-81.55 81.64 81.64"
      />
    </svg>
  );
};
