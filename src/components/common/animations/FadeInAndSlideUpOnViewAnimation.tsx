import { MotionProps, motion } from 'framer-motion';
import React from 'react';

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
  initial?: { y: number }; // Added initial prop
}

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
  initial = { y: 65 }, // Default initial prop
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger, duration, delay, hidden, show)}
      initial={initial} // Pass the initial prop here
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
