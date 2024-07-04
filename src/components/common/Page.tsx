'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/store';

interface PageProps {
  children: React.ReactNode;
  pageName: string;
}

const Page: React.FC<PageProps> = ({ children, pageName }) => {
  const { setPageName } = useStore((state) => state);

  useEffect(() => {
    setPageName(pageName);
  }, []);

  return <main>{children}</main>;
};
export default Page;
