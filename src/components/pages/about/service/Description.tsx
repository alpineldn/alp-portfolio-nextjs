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
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!descriptionRef?.current) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        },
      );
    });

    return () => context.revert();
  }, [descriptionRef]);

  return (
    <div className={cn('space-y-8 md:max-w-[65%] xl:max-w-[55%]')}>
      <h3 className="text-xl">
        <span className="text-gray">{index + 1}.</span> {title}
      </h3>
      <p ref={descriptionRef} className="text-m">
        {description}
      </p>
    </div>
  );
};

export default Description;
