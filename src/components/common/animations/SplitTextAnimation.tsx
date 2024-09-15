'use client';

import { useRef, useLayoutEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationOptions?: gsap.TweenVars;
  delay?: number;
  stagger?: number;
  duration?: number;
  animate?: boolean; // Flag to trigger the animation
  el?: React.ElementType;
}

const SplitTextAnimation: React.FC<SplitTextAnimationProps> = ({
  el: Element = 'span',
  children,
  delay,
  className,
  animationOptions,
  stagger = 0.05,
  duration = 1.5,
  animate = true,
}) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!ref.current || !animate) return; // If animate is false, skip the animation

    // Split the text into lines and words
    const splitText = new SplitType(ref.current as HTMLElement, {
      types: 'lines,words',
      lineClass: 'overflow-hidden',
    });

    gsap.set(splitText.words, { y: '100%' });

    // Create the animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut', ...animationOptions },
      delay,
    });

    tl.to(splitText.words, {
      y: '0%',
      duration,
      stagger,
    });

    return () => {
      splitText.revert(); // Cleanup SplitType
      tl.kill(); // Clean up the GSAP timeline
    };
  }, [ref]); // Dependency array includes 'animate'

  return (
    <Element ref={ref} className={cn('overflow-hidden', className)}>
      {children}
    </Element>
  );
};

export default SplitTextAnimation;
