import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactNode;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!magnetic?.current) return;

    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    magnetic.current.addEventListener('mousemove', (e) => {
      if (!magnetic?.current) return;

      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });
    magnetic.current.addEventListener('mouseleave', (e) => {
      xTo(0);
      yTo(0);
    });
  }, [magnetic?.current]);

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
};

export default Magnetic;
