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

/**
 * Usage:
 *
 * Import the component:
 * import SplitTextAnimation from '@/components/common/animations/SplitTextAnimation';
 *
 * Use it in your JSX:
 *
 * <SplitTextAnimation
 *   className="your-custom-class"
 *   animationOptions={{ ease: 'elastic.out' }}
 *   delay={0.5}
 *   stagger={0.1}
 *   duration={2}
 *   animate={true}
 *   el="div"
 *   target="current"
 * >
 *   Your text goes here.
 * </SplitTextAnimation>
 *
 * Props:
 * - `children`: The text content to be animated.
 * - `className`: Additional CSS classes for styling.
 * - `animationOptions`: GSAP animation options (e.g., easing).
 * - `delay`: Delay before the animation starts.
 * - `stagger`: Time between the start of each word's animation.
 * - `duration`: Duration of the animation.
 * - `animate`: Boolean flag to trigger the animation.
 * - `el`: The HTML element to wrap the text (default is 'span').
 * - `target`: Whether to split the text of the current element or its child nodes.
 *
 * Useful Links:
 * - GSAP Documentation: https://greensock.com/docs/
 * - SplitType Documentation: https://github.com/lukePeavey/SplitType
 * - React Documentation: https://reactjs.org/docs/getting-started.html
 */

const SplitTextAnimation: React.FC<SplitTextAnimationProps> = ({
  el: Element = 'span', // Default element to wrap the text is 'span'
  children, // The text content to be animated
  delay, // Delay before the animation starts
  className, // Additional CSS classes for styling
  animationOptions, // GSAP animation options (e.g., easing)
  stagger = 0.05, // Time between the start of each word's animation
  duration = 1.5, // Duration of the animation
  animate = true, // Boolean flag to trigger the animation
  target = 'current', // Whether to split the text of the current element or its child nodes
}) => {
  const ref = useRef<HTMLElement>(null); // Reference to the HTML element
  const [_splitText, setSplitTexts] = useState<SplitType>(); // State to store the SplitType instance

  useLayoutEffect(() => {
    if (!ref.current) return; // If the reference is not set, do nothing

    // Split the text into lines and words
    const splitText = new SplitType(
      target === 'current'
        ? (ref.current as HTMLElement) // Split the text of the current element
        : (ref.current.childNodes as NodeListOf<HTMLElement>), // Split the text of the child nodes
      {
        types: 'lines,words', // Split into lines and words
        lineClass: 'overflow-hidden', // Add 'overflow-hidden' class to lines
      },
    );
    setSplitTexts(splitText); // Store the SplitType instance in state
    gsap.set(splitText.words, { y: '100%' }); // Set initial position of words
  }, [ref]); // Run this effect when the reference changes

  useLayoutEffect(() => {
    if (!ref.current || !animate || !_splitText) return; // If conditions are not met, do nothing

    // Create the animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut', ...animationOptions }, // Default animation options
      delay, // Delay before the animation starts
    });

    tl.to(_splitText.words, {
      y: '0%', // Animate words to their final position
      duration, // Duration of the animation
      stagger, // Time between the start of each word's animation
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
