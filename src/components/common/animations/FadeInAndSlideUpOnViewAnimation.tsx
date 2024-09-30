import { AnimationProps, motion, MotionProps } from 'framer-motion';
import { smoothCurve } from '../anim';

interface Props {
  children: React.ReactNode;
  className?: string;
  initial?: AnimationProps['initial'];
  whileInView?: MotionProps['whileInView'];
  transition?: MotionProps['transition'];
  viewportOnce?: boolean;
  motionProps?: MotionProps;
  delay?: number;
  viewport?: MotionProps['viewport'];
}

/**
 * FadeInAndSlideUpOnViewAnimation Component
 *
 * This component animates its children with a fade-in and slide-up effect when they come into view.
 *
 * Props:
 * - children: React.ReactNode - The content to be animated.
 * - className?: string - Additional class names for the motion div.
 * - initial?: AnimationProps['initial'] - Initial animation state.
 * - whileInView?: MotionProps['whileInView'] - Animation state when the component is in view.
 * - transition?: MotionProps['transition'] - Transition properties for the animation.
 * - viewportOnce?: boolean - Whether the animation should only occur once when the component comes into view.
 * - motionProps?: MotionProps - Additional motion properties.
 * - delay?: number - Delay before the animation starts.
 * - viewport?: MotionProps['viewport'] - Viewport properties for the animation.
 *
 * Usage:
 * ```tsx
 * <FadeInAndSlideUpOnViewAnimation>
 *   <YourComponent />
 * </FadeInAndSlideUpOnViewAnimation>
 * ```
 *
 * For more information, visit: https://www.framer.com/motion/component/
 */
const FadeInAndSlideUpOnViewAnimation: React.FC<Props> = ({
  children,
  className,
  initial,
  whileInView,
  transition,
  viewportOnce = true,
  motionProps,
  delay = 0,
  viewport,
}) => {
  const initialProps =
    typeof initial === 'object' && initial !== null ? initial : {};
  const whileInViewProps =
    typeof whileInView === 'object' && whileInView !== null ? whileInView : {};

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 200, ...initialProps }}
      whileInView={{ opacity: 1, y: 0, ...whileInViewProps }}
      transition={{ duration: 1.4, ease: smoothCurve, delay, ...transition }}
      viewport={{ once: viewportOnce, ...viewport }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAndSlideUpOnViewAnimation;
