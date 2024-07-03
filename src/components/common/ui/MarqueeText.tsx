import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import cn from '@/utils/cn';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

const MarqueeText: React.FC<MarqueeProps> = ({
  children,
  className,
  innerClassName,
}) => {
  const marqueeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const marqueeAnimation = gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 2,
      ease: 'linear',
      paused: true,
    });

    if (isHovered) {
      marqueeAnimation.play();
    } else {
      marqueeAnimation.pause();
      gsap.to(marqueeRef.current, {
        xPercent: 0,
        duration: 0.5,
        ease: 'linear',
      });
    }

    return () => {
      marqueeAnimation.kill();
    };
  }, [isHovered]);

  return (
    <div
      className={cn('body-1 flex items-center uppercase text-light', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="pr-2">[</span>
      <div className={cn('w-min overflow-hidden', innerClassName)}>
        <div ref={marqueeRef} className="marquee flex h-full w-[200%]">
          <div className="flex h-full flex-1">
            <div className="flex flex-1 items-center justify-center text-center tracking-wider">
              {children}
            </div>
          </div>
          <div className="flex h-full flex-1">
            <div className="flex flex-1 items-center justify-center text-center tracking-wider">
              {children}
            </div>
          </div>
        </div>
      </div>
      <span className="pl-2">]</span>
    </div>
  );
};

export default MarqueeText;
