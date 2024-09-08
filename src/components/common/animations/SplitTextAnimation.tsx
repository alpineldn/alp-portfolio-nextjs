'use client';

import { useRef, useLayoutEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  el?: React.ElementType;
}

const SplitTextAnimation: React.FC<SplitTextAnimationProps> = ({
  el: Element = 'span',
  children,
  delay,
  className,
}) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!ref.current) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 1.4 },
        delay: delay || 0,
      });

      const header = new SplitType(ref.current as HTMLElement, {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      });

      gsap.set(header.words, { y: '100%' });
      tl.to(header.words, { y: '0%', stagger: 0.05 });

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'bottom bottom',
        markers: true,
        onEnter: () => {
          console.log('onEnter');
          tl.play();
        },
        onLeaveBack: () => {
          tl.reverse();
          console.log('onLeaveBack');
        },
      });
    });

    return () => context.revert();
  }, [ref]);

  return (
    <Element ref={ref} className={cn('overflow-hidden', className)}>
      {children}
    </Element>
  );
};

export default SplitTextAnimation;
