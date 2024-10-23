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
  duration = 0.5, // Default duration is 0.5 seconds
  delay = 0, // Default delay is 0 seconds
  threshold = 0.2, // Set threshold to 20%
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Element is in view
          } else {
            setIsVisible(false); // Element is out of view
          }
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
      // Fade in when in view with delay
      gsap.to(ref.current, { opacity: 1, duration, delay, ...gsapOptions });
    } else {
      // Fade out when out of view with delay
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
