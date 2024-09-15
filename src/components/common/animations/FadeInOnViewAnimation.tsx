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
