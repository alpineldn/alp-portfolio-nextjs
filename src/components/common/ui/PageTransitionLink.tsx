'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/animations';
import Link from 'next/link';
import { MouseEvent } from 'react';

interface Props {
  id?: string;
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void;
  onMouseEnter?: (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => void;
  onMouseLeave?: (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => void;
}

const PageTransitionLink = ({
  id,
  href,
  className,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <Link
      id={id}
      href={href}
      data-type="link"
      onMouseEnter={onMouseEnter}
      className={className}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
        if (!!onClick) onClick(e);
      }}
    >
      {children}
    </Link>
  );
};

export default PageTransitionLink;
