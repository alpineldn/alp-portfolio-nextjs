import cn from '@/utils/cn';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

interface DescriptionProps {
  index: number;
  title: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({
  description,
  index,
  title,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!descriptionRef?.current || !sectionRef.current || !headerRef.current)
        return;

      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(headerRef.current, { opacity: 1, y: 0, delay: 0.1 });
          gsap.to(descriptionRef.current, { opacity: 1, y: 0, delay: 0.3 });
        },
      });
    });

    return () => context.revert();
  }, [descriptionRef, sectionRef, headerRef]);

  return (
    <div
      ref={sectionRef}
      className={cn('space-y-8 md:max-w-[65%] xl:max-w-[55%]')}
    >
      <h3 ref={headerRef} className={cn('translate-y-12 opacity-0', 'text-xl')}>
        <span className="text-gray">{index + 1}.</span> {title}
      </h3>
      <p
        ref={descriptionRef}
        className={cn('translate-y-12 opacity-0', 'text-m')}
      >
        {description}
      </p>
    </div>
  );
};

export default Description;
