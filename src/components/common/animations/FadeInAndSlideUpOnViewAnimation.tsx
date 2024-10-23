import { MotionProps, motion } from 'framer-motion';
import React from 'react';
import FadeInOutWrapper from './FadeInOutWrapper'; // Import the fade in/out wrapper

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
  stagger?: number;
  className?: string;
  triggerOnce?: boolean;
  viewport?: MotionProps['viewport'];
  isList?: boolean;
}

const FadeInAndSlideUpOnViewAnimation: React.FC<
  FadeInAndSlideUpOnViewAnimationProps
> = ({
  children,
  stagger = 0.3,
  className,
  triggerOnce = true,
  viewport = {},
  isList = false,
}) => {
  return (
    <FadeInOutWrapper
      duration={0.5} // Set default duration
      threshold={0.2} // Set threshold to 20%
    >
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
    </FadeInOutWrapper>
  );
};

export default FadeInAndSlideUpOnViewAnimation;
