'use client';

import { useStore } from '@/store/store';
import { animatePageIn } from '@/utils/animations';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const { pageName } = useStore((state) => state);
  const pathname = usePathname();
  const time = pathname === '/' ? 2 : 1;

  useEffect(() => {
    if (index === words.length - 1 || pathname !== '/') return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );
  }, [index]);

  useEffect(() => {
    animatePageIn(time);
  }, [pageName]);

  return (
    <div>
      <div
        id="loading-banner-1"
        className="fixed left-0 top-0 z-30 flex min-h-screen w-full items-center justify-center bg-neutral-950"
      >
        <p
          key={pathname}
          className="absolute z-[1] flex items-center text-[42px] text-white opacity-0"
        >
          {pathname === '/' ? words[index] : pageName}
        </p>
      </div>

      {children}
    </div>
  );
}
