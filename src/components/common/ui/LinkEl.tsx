// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import cn from '@/utils/cn';

// interface MarqueeProps {
//   children: React.ReactNode;
//   className?: string;
//   innerClassName?: string;
// }

// const MarqueeText: React.FC<MarqueeProps> = ({
//   children,
//   className,
//   innerClassName,
// }) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     function setSize() {
//       if (!contentRef?.current || !marqueeRef?.current) return;

//       const contentWidth = contentRef.current.getBoundingClientRect().width;
//       marqueeRef.current.style.width = `${contentWidth}px`;
//     }

//     setSize();
//     window.addEventListener('resize', setSize);
//     return () => window.removeEventListener('resize', setSize);
//   }, [marqueeRef, contentRef]);

//   useEffect(() => {
//     const marqueeAnimation = gsap.to(marqueeRef.current, {
//       xPercent: -99,
//       repeat: -1,
//       duration: 2,
//       ease: 'linear',
//       paused: true,
//     });

//     if (isHovered) {
//       marqueeAnimation.play();
//     } else {
//       marqueeAnimation.pause();
//       gsap.to(marqueeRef.current, {
//         xPercent: 0,
//         duration: 0.5,
//         ease: 'linear',
//       });
//     }

//     return () => {
//       marqueeAnimation.kill();
//     };
//   }, [isHovered]);

//   return (
//     <div
//       className={cn('body-1 flex items-center uppercase text-light', className)}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <span className="flex-shrink-0">[</span>
//       <div className={cn('w-min overflow-hidden', innerClassName)}>
//         <div ref={marqueeRef} className="marquee flex h-full">
//           <div ref={contentRef} className="flex h-full w-full flex-1">
//             <div className="link-1 flex flex-1 items-start justify-center gap-x-2 whitespace-nowrap pl-3 pr-1.5 text-center tracking-wider">
//               {children}
//             </div>
//           </div>
//           <div className="flex h-full flex-1">
//             <div className="link-1 flex flex-1 items-start justify-center gap-x-2 whitespace-nowrap pl-1.5 pr-3 text-center tracking-wider">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//       <span className="flex-shrink-0">]</span>
//     </div>
//   );
// };

// export default MarqueeText;

import cn from '@/utils/cn';
import ArrowTopRight from '../icons/ArrowTopRight';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
  icon?: JSX.Element;
}

const LinkEl: React.FC<MarqueeProps> = ({
  children,
  className,
  icon,
  iconClassName = 'size-[24px] text-white',
}) => {
  return (
    <div
      className={cn('text-link-m group flex items-center uppercase', className)}
    >
      <div data-type="simple-hover" className="interactable">
        <div className="flex items-center justify-center gap-x-[23px] text-center transition-[letter-spacing] duration-500 group-hover:tracking-[0.2em]">
          {children}
          {icon ? icon : <ArrowTopRight className={iconClassName} />}
        </div>
      </div>
    </div>
  );
};

export default LinkEl;
