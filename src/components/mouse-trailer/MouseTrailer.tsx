'use client';

import Play from './PlayIcon';
import Click from './ClickIcon';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ChevronIcon from '../common/icons/ChevronIcon';
import { usePathname } from 'next/navigation';

type TrailerOption = 'video' | 'link' | 'click' | 'simple-hover';

const getTrailerIcon = (type: TrailerOption) => {
  switch (type) {
    case 'video':
      return <Play />;
    case 'click':
      return <Click />;
    case 'link':
      return (
        <ChevronIcon className="size-2 -translate-y-[10%] translate-x-[15%] scale-75" />
      );
    default:
      return null;
  }
};

interface MouseTrailerProps {}

const MouseTrailer: React.FC<MouseTrailerProps> = ({}) => {
  const trailerRef = useRef<HTMLDivElement>(null);
  const trailerIconRef = useRef<HTMLDivElement>(null);
  const [TrailerIcon, setTrailerIcon] = useState<JSX.Element | null>(null);
  const [mode, setMode] = useState<'dark' | 'light'>('light');
  const pathname = usePathname();

  useEffect(() => {
    if (!trailerRef.current) return;

    const trailerElement = trailerRef.current;

    trailerElement.style.mixBlendMode = 'difference';
    gsap.to(trailerElement, { scale: 1, ease: 'power2.out' });
    gsap.to(trailerRef.current, { backgroundColor: 'white' });
    setTrailerIcon(getTrailerIcon('simple-hover'));
  }, [pathname]);

  useEffect(() => {
    if (!trailerRef.current) return;

    const trailerElement = trailerRef.current;

    const quickSetX = gsap.quickTo(trailerElement, 'x', {
      ease: 'power2.out',
    });
    const quickSetY = gsap.quickTo(trailerElement, 'y', {
      ease: 'power2.out',
    });
    const quickSetOpacity = gsap.quickTo(trailerElement, 'opacity', {
      ease: 'power2.out',
    });

    const windowMouseMoveAction = (e: MouseEvent) => {
      if (window.innerWidth <= 640) return;

      if (trailerRef.current && trailerIconRef.current) {
        const target = e.target as HTMLElement;
        const interactable = target.closest('.interactable');
        const bgIsWhite = target.closest('[data-bg-white]');
        setMode(bgIsWhite ? 'dark' : 'light');

        const interacting = interactable !== null;

        const x = e.clientX - trailerRef.current.offsetWidth / 2;
        const y = e.clientY - trailerRef.current.offsetHeight / 2;

        quickSetX(x);
        quickSetY(y);

        quickSetOpacity(x > 0 && y > 0 ? 1 : 0);

        trailerRef.current.dataset.type = interacting
          ? (interactable as HTMLElement).dataset.type || ''
          : '';

        trailerIconRef.current.style.opacity =
          trailerRef.current.dataset.type !== '' ? '1' : '0';

        if (interacting) {
          const linkType = (interactable as HTMLElement).dataset
            .type as TrailerOption;

          if (linkType === 'simple-hover') {
            gsap.to(trailerRef.current, { backgroundColor: '#A9A9A9' });
          } else {
            trailerElement.style.mixBlendMode = 'normal';
            gsap.to(trailerElement, {
              scale: interacting ? 3.5 : 1,
              ease: 'power2.out',
            });
            gsap.to(trailerRef.current, { backgroundColor: 'white' });
          }

          setTrailerIcon(getTrailerIcon(linkType));
        } else {
          trailerElement.style.mixBlendMode = 'difference';
          gsap.to(trailerElement, { scale: 1, ease: 'power2.out' });
          gsap.to(trailerRef.current, { backgroundColor: 'white' });
        }
      }
    };

    window.addEventListener('mousemove', windowMouseMoveAction);
    return () => {
      window.removeEventListener('mousemove', windowMouseMoveAction);
    };
  }, [mode, trailerRef, trailerIconRef]);
  //
  return (
    <div className="hidden sm:block">
      <div
        ref={trailerRef}
        id="trailer"
        className="pointer-events-none fixed left-0 top-0 z-50 grid h-5 w-5 place-items-center rounded-full bg-white opacity-0 mix-blend-difference shadow-md transition-opacity duration-500"
      >
        <div
          ref={trailerIconRef}
          id="trailer-icon"
          className="duration-400 text-black opacity-0 transition-opacity"
        >
          {TrailerIcon && TrailerIcon}
        </div>
      </div>
    </div>
  );
};
export default MouseTrailer;
