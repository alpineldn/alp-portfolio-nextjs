'use client';

import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RoundedButton from '@/components/common/ui/RoundedButton';
import cn from '@/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
import { animatePageOut } from '@/utils/animations';
import PageTransitionLink from '../common/ui/PageTransitionLink';

interface HeaderProps {}

const navItems = [
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const Header: React.FC<HeaderProps> = ({}) => {
  const header = useRef(null);
  const [showBtn, setShowBtn] = useState(false);
  const [isQuarterScreenScrolled, setIsQuarterScreenScrolled] = useState(false);
  const pathName = usePathname();
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showBtn) setShowBtn(false);
  }, [pathName]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!button?.current) return;

      const scaleValue =
        isQuarterScreenScrolled || (!isQuarterScreenScrolled && showBtn)
          ? 1
          : 0;

      gsap.to(button.current, {
        scale: scaleValue,
        duration: 0.25,
        ease: 'power1.out',
      });
    });

    return () => context.revert();
  }, [showBtn, isQuarterScreenScrolled, button?.current]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: window.innerHeight / 3,
        onLeave: () => {
          setIsQuarterScreenScrolled(true);
        },
        onEnterBack: () => {
          setIsQuarterScreenScrolled(false);
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={header}
        className={cn(
          'absolute top-0 z-[1] box-border flex w-full items-center justify-between px-5 py-[35px] font-light sm:px-[35px]',
          pathName === '/' ? 'text-white' : 'text-[#1c1d20]',
        )}
      >
        <Logo />
        <NavLinks setIsActive={setShowBtn} />
      </div>

      <HamburgerMenuBtn
        ref={button}
        isActive={showBtn}
        setIsActive={setShowBtn}
      />

      <AnimatePresence mode="wait">{showBtn && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;

const Logo = () => {
  const pathname = usePathname();

  return (
    <PageTransitionLink
      href="/"
      className={cn(
        'underline_link',
        'md:text-lg text-base xl:text-xl',
        pathname === '/'
          ? 'after:bg-white hover:before:bg-white'
          : 'after:bg-[#1c1d20] hover:before:bg-[#1c1d20]',
      )}
    >
      <svg
        className="h-fit w-[40px] object-contain"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 231.53 92.95"
      >
        <path
          style={{
            fill: 'none',
            stroke: pathname === '/' ? '#fff' : '#1c1d20',
            strokeLinecap: 'square',
            strokeMiterlimit: 10,
            strokeWidth: '8px',
          }}
          d="m5.66 86.84 64.93-64.93 65.29 65.3H62.69l81.55-81.55 81.64 81.64"
        />
      </svg>

      <div className="relative ml-[10px] flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-smooth-curve">
        <p className="relative transition-all duration-500 ease-smooth-curve">
          ALPINE
        </p>
      </div>
    </PageTransitionLink>
  );
};

const NavLinks: React.FC<{
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsActive }) => {
  const pathname = usePathname();
  return (
    <>
      <button
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
        className="relative z-[1] flex cursor-pointer p-[15px] sm:hidden"
      >
        <span>Menu</span>
      </button>

      <div className="hidden items-center gap-[16px] overflow-hidden sm:flex">
        {navItems.map(({ href, title }) => (
          <div
            key={title}
            className={cn(
              'underline_link',
              'text-base md:text-lg xl:text-xl',
              pathname === '/'
                ? 'after:bg-white hover:before:bg-white'
                : 'after:bg-[#1c1d20] hover:before:bg-[#1c1d20]',
            )}
          >
            <PageTransitionLink href={href}>{title}</PageTransitionLink>
          </div>
        ))}
      </div>
    </>
  );
};

const HamburgerMenuBtn = forwardRef<
  HTMLDivElement,
  {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ setIsActive, isActive }, ref) => {
  return (
    <div ref={ref} className="fixed right-0 z-20 scale-0">
      <RoundedButton
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
        className="relative m-[20px] flex h-[65px] w-[65px] cursor-pointer items-center justify-center rounded-[50%] bg-[#1C1D20] sm:h-[80px] sm:w-[80px]"
      >
        <div
          className={cn(
            "relative z-[1] w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-[30%] before:bg-white before:duration-300 before:content-[''] before:[transition:width_0s,background_.3s] after:relative after:top-[-5px] after:m-auto after:block after:h-[1px] after:w-[30%] after:bg-white after:transition-transform after:duration-300 after:content-[''] sm:before:w-[40%] sm:after:w-[40%]",
            {
              'before:top-0 before:-rotate-45 after:top-[-1px] after:rotate-45':
                isActive,
            },
          )}
        ></div>
      </RoundedButton>
    </div>
  );
});
