import { motion, useViewportScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface ScrollPerspectiveProps {
  children: React.ReactNode;
  className?: string;
  perspectiveDistance?: number;
  perspectiveScale?: number; // Factor by which scale changes on scroll
}

const ScrollPerspective: React.FC<ScrollPerspectiveProps> = ({
  children,
  className = '',
  perspectiveDistance = 800,
  perspectiveScale = 0.1, // Control scale effect
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();

  // Transform values based on scroll
  const rotateX = useTransform(scrollY, [0, 1000], [0, 45]); // Rotate up to 45 degrees
  const scale = useTransform(scrollY, [0, 1000], [1, 1 + perspectiveScale]); // Scale from 1 to 1 + perspectiveScale

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{
        perspective: perspectiveDistance,
        perspectiveOrigin: 'center',
        scale,
        rotateX,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollPerspective;
