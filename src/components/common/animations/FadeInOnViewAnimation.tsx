import { motion, MotionProps } from 'framer-motion';
import { smoothCurve } from '../anim';

interface Props {
  children: React.ReactNode;
  className?: string;
  initial?: MotionProps['initial'];
  whileInView?: MotionProps['whileInView'];
  transition?: MotionProps['transition'];
  viewportOnce?: boolean;
  motionProps?: MotionProps;
  viewport?: MotionProps['viewport'];
}

/**
 * FadeInOnViewAnimation component
 *
 * This component wraps its children with a motion element that fades in when it comes into view.
 *
 * Props:
 * - children: The content to be wrapped by the animation.
 * - className: Optional additional class names for the motion element.
 * - initial: Optional initial animation state.
 * - whileInView: Optional animation state when the element is in view.
 * - transition: Optional transition settings for the animation.
 * - viewportOnce: If true, the animation will only play once when the element comes into view.
 * - motionProps: Additional motion properties to be passed to the motion element.
 * - viewport: Optional viewport settings for the animation.
 *
 * Usage:
 * ```tsx
 * <FadeInOnViewAnimation>
 *   <YourComponent />
 * </FadeInOnViewAnimation>
 * ```
 *
 * For more information, visit: https://www.framer.com/motion/component/
 */
const FadeInOnViewAnimation: React.FC<Props> = ({
  children,
  className,
  initial,
  whileInView,
  transition,
  viewportOnce = true,
  motionProps,
  viewport,
}) => {
  const initialProps =
    typeof initial === 'object' && initial !== null ? initial : {};
  const whileInViewProps =
    typeof whileInView === 'object' && whileInView !== null ? whileInView : {};

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, ...initialProps }}
      whileInView={{ opacity: 1, ...whileInViewProps }}
      transition={{ delay: 0.2, ease: smoothCurve, duration: 1, ...transition }}
      viewport={{ once: viewportOnce, ...viewport }}
      {...motionProps}
    >
      {children}
    </motion.p>
  );
};

export default FadeInOnViewAnimation;
