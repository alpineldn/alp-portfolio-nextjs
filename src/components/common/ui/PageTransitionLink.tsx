'use client';

import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/animations';
import Link from 'next/link';
import { MouseEvent, TouchEvent } from 'react';
import cn from '@/utils/cn';

interface Props {
  id?: string;
  href: string;
  className?: string;
  children: React.ReactNode;
  dataType?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void;
  onTouchStart?: (e?: TouchEvent<HTMLAnchorElement>) => void;
  onTouchEnd?: (e?: TouchEvent<HTMLAnchorElement>) => void;
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
  dataType,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
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
      data-type={dataType}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
      onMouseEnter={onMouseEnter}
      className={cn('', className)}
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
