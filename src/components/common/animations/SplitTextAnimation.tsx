'use client';

import { useRef, useLayoutEffect, useState } from 'react';
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
  target?: 'current' | 'childNodes';
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
  target = 'current',
}) => {
  const ref = useRef<HTMLElement>(null);
  const [_splitText, setSplitTexts] = useState<SplitType>();

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Split the text into lines and words
    const splitText = new SplitType(
      target === 'current'
        ? (ref.current as HTMLElement)
        : (ref.current.childNodes as NodeListOf<HTMLElement>),
      {
        types: 'lines,words',
        lineClass: 'overflow-hidden',
      },
    );
    setSplitTexts(splitText);
    gsap.set(splitText.words, { y: '100%' });
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current || !animate || !_splitText) return;

    // Create the animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut', ...animationOptions },
      delay,
    });

    tl.to(_splitText.words, {
      y: '0%',
      duration,
      stagger,
    });

    return () => {
      _splitText.revert(); // Cleanup SplitType
      tl.kill(); // Clean up the GSAP timeline
    };
  }, [ref, animate, _splitText]); // Dependency array includes 'animate'

  return (
    <Element ref={ref} className={cn('overflow-hidden', className)}>
      {children}
    </Element>
  );
};

export default SplitTextAnimation;
