import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface FadeInOutWrapperProps {
  children: React.ReactNode;
  gsapOptions?: gsap.TweenVars; // Additional GSAP options
  duration?: number; // Duration for GSAP animations
  delay?: number; // Delay before starting the fade in/out animations
  threshold?: number; // Intersection Observer threshold for visibility
}

const FadeInOutWrapper: React.FC<FadeInOutWrapperProps> = ({
  children,
  gsapOptions = {},
  duration = 0.5,
  delay = 0,
  threshold = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (isVisible) {
      gsap.to(ref.current, { opacity: 1, duration, delay, ...gsapOptions });
    } else {
      gsap.to(ref.current, { opacity: 0, duration, delay, ...gsapOptions });
    }
  }, [isVisible, gsapOptions, duration, delay]);

  return (
    <motion.div ref={ref} style={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default FadeInOutWrapper;
