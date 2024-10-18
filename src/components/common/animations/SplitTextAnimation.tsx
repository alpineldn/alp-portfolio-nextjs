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

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const splitText = () => {
    if (!ref.current) return;

    // Clear previous SplitType instance
    _splitText?.revert();

    const split = new SplitType(ref.current, {
      types: 'chars,words',
    });
    setSplitTexts(split);

    if (split.words && split.words.length) {
      split.words.forEach((word) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        wrapper.style.display = 'inline-block';
        wrapper.style.verticalAlign = 'top';
        word.parentNode?.insertBefore(wrapper, word);
        wrapper.appendChild(word);
      });

      gsap.set(split.words, { y: '100%' });
    }
  };

  useLayoutEffect(() => {
    splitText(); // Initial split

    const handleResize = debounce(() => {
      splitText(); // Re-split on resize
    }, 150); // Adjust debounce time as needed

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      _splitText?.revert(); // Clean up SplitType changes
    };
  }, []);

  useLayoutEffect(() => {
    if (!ref.current || !animate || !_splitText?.words?.length) return;

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
      tl.kill();
    };
  }, [ref, animate, _splitText]);

  return (
    <Element ref={ref} className={cn('overflow-hidden', className)}>
      {children}
    </Element>
  );
};

export default SplitTextAnimation;
