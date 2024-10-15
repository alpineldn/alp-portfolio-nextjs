'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import cn from '@/utils/cn';

interface SplitTextAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationOptions?: gsap.TweenVars;
  delay?: number;
  stagger?: number;
  duration?: number;
  animate?: boolean;
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
  const [_splitText, setSplitTexts] = useState<SplitType | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Split the text into words and apply inline-block display for proper wrapping
    const splitText = new SplitType(ref.current, {
      types: 'chars,words',
    });
    setSplitTexts(splitText);

    // Ensure words exist before wrapping
    if (splitText.words && splitText.words.length) {
      // Wrap each word with an overflow-hidden container
      splitText.words.forEach((word) => {
        const wrapper = document.createElement('div'); // Create a wrapper element
        wrapper.style.overflow = 'hidden'; // Ensure overflow is hidden
        wrapper.style.display = 'inline-block'; // Inline-block for each word to wrap properly
        wrapper.style.verticalAlign = 'top'; // Ensure words align correctly
        word.parentNode?.insertBefore(wrapper, word); // Insert the wrapper before the word
        wrapper.appendChild(word); // Move the word inside the wrapper
      });

      // Set initial position of words off the visible area
      gsap.set(splitText.words, { y: '100%' });
    }
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current || !animate || !_splitText?.words?.length) return; // Check if words exist before animating

    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut', ...animationOptions },
      delay,
    });

    // Animate each word from y: 100% to y: 0%
    tl.to(_splitText.words, {
      y: '0%',
      duration,
      stagger,
    });

    return () => {
      _splitText?.revert(); // Clean up SplitType changes
      tl.kill(); // Clean up the GSAP timeline
    };
  }, [ref, animate, _splitText]);

  return (
    <Element ref={ref} className={cn('overflow-hidden', className)}>
      {children}
    </Element>
  );
};

export default SplitTextAnimation;
