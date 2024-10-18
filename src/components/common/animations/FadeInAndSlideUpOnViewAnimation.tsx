import { MotionProps, motion } from 'framer-motion';
import React from 'react';

// Function to define container animation variants
// This function returns an object with two states: 'hidden' and 'show'.
// 'hidden' state sets the initial opacity to 0 and moves the element down by 65 pixels.
// 'show' state sets the final opacity to 1 and moves the element to its original position.
// The 'show' state also includes a transition configuration with duration, delay, and staggerChildren properties.
const containerVariants = (
  stagger: number,
  duration: number,
  delay?: number,
  hidden?: object,
  show?: object,
) => ({
  hidden: { opacity: 0, y: 65, ...hidden },
  show: {
    opacity: 1,
    y: 0,
    ...show,
    transition: {
      duration,
      delay,
      staggerChildren: stagger,
    },
  },
});

// Function to define item animation variants
// This function returns an object with two states: 'hidden' and 'show'.
// 'hidden' state sets the initial opacity to 0 and moves the element down by 65 pixels.
// 'show' state sets the final opacity to 1 and moves the element to its original position.
// The 'show' state also includes a transition configuration with duration property.
const itemVariants = (hidden?: object, show?: object, duration?: number) => ({
  hidden: { opacity: 0, y: 65, ...hidden },
  show: { opacity: 1, y: 0, ...show, transition: { duration: duration } },
});

interface FadeInAndSlideUpOnViewAnimationProps {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  delay?: number;
  className?: string;
  hidden?: object;
  show?: object;
  triggerOnce?: boolean;
  viewport?: MotionProps['viewport'];
  isList?: boolean;
}

// Component to animate children with fade-in and slide-up effect on view
// This component uses framer-motion to animate its children elements.
// It accepts several props to customize the animation:
// - children: The elements to be animated.
// - stagger: Time in seconds to stagger the animation of child elements.
// - duration: Duration of the animation in seconds.
// - delay: Delay before the animation starts in seconds.
// - className: Additional CSS classes for the container.
// - hidden: Custom styles for the 'hidden' state.
// - show: Custom styles for the 'show' state.
// - triggerOnce: If true, the animation will only trigger once.
// - viewport: Custom viewport settings for the animation.
// - isList: If true, each child will be wrapped in a motion.div to apply individual animations. Use isList for looping through children.
const FadeInAndSlideUpOnViewAnimation: React.FC<
  FadeInAndSlideUpOnViewAnimationProps
> = ({
  children,
  stagger = 0.3,
  duration = 1,
  delay,
  className,
  hidden,
  show,
  triggerOnce = true,
  isList = false,
  viewport = {},
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger, duration, delay, hidden, show)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: triggerOnce, ...viewport }}
    >
      {isList
        ? React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              variants={itemVariants(hidden, show, duration)}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default FadeInAndSlideUpOnViewAnimation;

// Example usage of the FadeInAndSlideUpOnViewAnimation component
// <FadeInAndSlideUpOnViewAnimation stagger={0.2} duration={0.8} delay={0.5} className="my-animation">
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </FadeInAndSlideUpOnViewAnimation>
