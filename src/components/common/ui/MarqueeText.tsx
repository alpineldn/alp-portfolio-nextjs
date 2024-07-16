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

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeText: React.FC<MarqueeProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'body-1 group flex items-center uppercase text-light',
        className,
      )}
    >
      <span className="flex-shrink-0 transition-[padding-right] duration-500 group-hover:pr-2">
        [
      </span>
      <div
        data-type="simple-hover"
        className={cn('interactable w-min overflow-hidden')}
      >
        <div className="flex h-full w-full flex-1">
          <div className="link-1 flex flex-1 items-start justify-center gap-x-2 whitespace-nowrap pl-3 pr-1.5 text-center tracking-wider transition-[letter-spacing] duration-500 group-hover:tracking-[0.2em]">
            {children}
          </div>
        </div>
      </div>
      <span className="flex-shrink-0 transition-[padding-left] duration-500 group-hover:pl-2">
        ]
      </span>
    </div>
  );
};

export default MarqueeText;
