import { AnimationProps, motion, MotionProps } from 'framer-motion';
import { smoothCurve } from '../anim';
import cn from '@/utils/cn';

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
