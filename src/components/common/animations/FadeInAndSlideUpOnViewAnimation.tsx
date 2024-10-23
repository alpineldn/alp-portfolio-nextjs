import { MotionProps, motion } from 'framer-motion';
import React from 'react';

const containerVariants = (stagger: number) => ({
  hidden: { opacity: 0, y: 65 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: stagger,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 65 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface FadeInAndSlideUpOnViewAnimationProps {
  children: React.ReactNode;
  stagger?: number; // Stagger for child animations
  className?: string;
  triggerOnce?: boolean; // Animation plays once when in view
  viewport?: MotionProps['viewport']; // Viewport settings
  isList?: boolean; // Add isList prop for potential list styling
}

const FadeInAndSlideUpOnViewAnimation: React.FC<
  FadeInAndSlideUpOnViewAnimationProps
> = ({
  children,
  stagger = 0.3,
  className,
  triggerOnce = true,
  viewport = {},
  isList = false, // Default value for isList
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: triggerOnce, ...viewport }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={itemVariants}
          className={isList ? 'list-item-class' : ''}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeInAndSlideUpOnViewAnimation;
