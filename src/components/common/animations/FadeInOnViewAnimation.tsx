import { motion, MotionProps, Variants } from 'framer-motion';
import { smoothCurve } from '../anim';

interface Props {
  children: React.ReactNode;
  className?: string;
  initial?: { y: number; opacity: number }; // Initial animation state
  whileInView?: { y: number; opacity: number }; // State when in view
  transition?: MotionProps['transition']; // Transition settings
  viewportOnce?: boolean; // Animation plays once when in view
  motionProps?: MotionProps; // Additional motion props
  viewport?: MotionProps['viewport']; // Viewport settings
  staggerChildren?: number; // Stagger delay for children
  delayChildren?: number; // Initial delay before children animation
}

const FadeInAndSlideUpOnViewAnimation: React.FC<Props> = ({
  children,
  className,
  initial = { y: 65, opacity: 0 }, // Default initial values
  whileInView = { y: 0, opacity: 1 }, // Animation values when in view
  transition,
  viewportOnce = true,
  motionProps,
  viewport,
  staggerChildren = 0.1, // Default stagger value
  delayChildren = 0.3, // Default delay value
}) => {
  const variants: Variants = {
    hidden: initial,
    show: {
      ...whileInView,
      transition: {
        staggerChildren,
        delayChildren,
        ...transition,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden" // Specify hidden state
      animate="show" // Specify show state
      variants={variants} // Pass the variants object
      viewport={{ once: viewportOnce, ...viewport }} // Viewport settings
      {...motionProps} // Additional motion props
    >
      {children}
    </motion.div>
  );
};

export default FadeInAndSlideUpOnViewAnimation;
