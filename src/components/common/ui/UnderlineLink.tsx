import cn from '@/utils/cn';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type UnderlineLinkProps = {
  el?: 'a' | 'button';
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const UnderlineLink: React.FC<UnderlineLinkProps> = ({
  el = 'a',
  children,
  className,
  href,
  ...rest
}) => {
  if (el === 'a') {
    return (
      <Link
        data-type="simple-hover"
        href={href as string}
        className={cn('underline_link group-hover:text-primary', className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (el === 'button') {
    return (
      <button
        data-type="simple-hover"
        className={cn('underline_link', className)}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return null;
};

export default UnderlineLink;
