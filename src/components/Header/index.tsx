'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RoundedButton from '@/components/common/ui/RoundedButton';
import cn from '@/utils/cn';
import Magnetic from '@/components/common/ui/Magnetic';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const pathName = usePathname();
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out',
          });

          setIsActive(false);
        },
      },
    });
  }, [button?.current]);

  return (
    <>
      <div
        ref={header}
        className={cn(
          'absolute top-0 z-[1] box-border flex w-full items-center justify-between p-[35px] font-light',
          pathName === '/' ? 'text-white' : 'text-[#1c1d20]',
        )}
      >
        <div className="group flex cursor-pointer">
          <p className="m-0 transition-all duration-500 ease-smooth-curve group-hover:rotate-[360deg]">
            ©
          </p>
          <div className="relative ml-[5px] flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-smooth-curve group-hover:pr-[30px]">
            <p className="relative transition-all duration-500 ease-smooth-curve group-hover:-translate-x-full">
              Code by
            </p>
            <p className="relative pl-[0.3em] transition-all duration-500 ease-smooth-curve group-hover:translate-x-[-65px]">
              Dennis
            </p>
            <p className="absolute left-[120px] pl-[0.3em] transition-all duration-500 ease-smooth-curve group-hover:translate-x-[-65px]">
              Snellenberg
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Magnetic>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <a>Work</a>
              <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-[50%] bg-white transition-transform duration-200 ease-smooth-curve group-hover:scale-100"></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <a>About</a>
              <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-[50%] bg-white transition-transform duration-200 ease-smooth-curve group-hover:scale-100"></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <a>Contact</a>
              <div className="absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-[50%] bg-white transition-transform duration-200 ease-smooth-curve group-hover:scale-100"></div>
            </div>
          </Magnetic>
        </div>
      </div>

      <div ref={button} className="fixed right-0 z-[4] scale-0">
        <RoundedButton
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative m-[20px] flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] bg-[#1c1d20]"
        >
          <div
            className={cn(
              "relative z-[1] w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-300 before:content-[''] after:relative after:top-[-5px] after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-300 after:content-['']",
              {
                'before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45':
                  isActive,
              },
            )}
          ></div>
        </RoundedButton>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
