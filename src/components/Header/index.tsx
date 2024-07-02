'use client';

import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RoundedButton from '@/components/common/ui/RoundedButton';
import cn from '@/utils/cn';
import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <Link
      href="/"
      className="group relative flex cursor-pointer items-center overflow-hidden bg-transparent pb-[5px] ease-smooth-curve before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] before:w-0 before:content-[''] after:absolute after:bottom-0 after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:ease-smooth-curve after:content-[''] after:[transition:width_0.3s] hover:before:w-full hover:before:bg-white hover:before:ease-smooth-curve hover:before:[transition:width_0.3s] hover:after:w-full hover:after:bg-transparent hover:after:[transition:width_0.3s]"
    >
      <Image
        className="h-fit w-[30px] object-contain"
        width={30}
        height={30}
        src="/alpine_icon.svg"
        alt="Alpine Icon"
      />

      <div className="relative ml-[10px] flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-smooth-curve">
        <p className="relative transition-all duration-500 ease-smooth-curve">
          ALPINE
        </p>
      </div>
    </Link>
  );
};

const NavLinks: React.FC<{
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsActive }) => {
  const pathName = usePathname();
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
            className="group relative z-[1] inline-block cursor-pointer flex-col overflow-hidden bg-transparent py-[5px] ease-smooth-curve before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] before:w-0 before:content-[''] after:absolute after:bottom-0 after:right-0 after:block after:h-[2px] after:w-0 after:bg-white after:ease-smooth-curve after:content-[''] after:[transition:width_0.3s] hover:before:w-full hover:before:bg-white hover:before:ease-smooth-curve hover:before:[transition:width_0.3s] hover:after:w-full hover:after:bg-transparent hover:after:[transition:width_0.3s]"
          >
            <Link href={href}>{title}</Link>
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
        backgroundColor="#334BD3"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
        className="relative m-[20px] flex h-[65px] w-[65px] cursor-pointer items-center justify-center rounded-[50%] bg-[#334BD3] sm:h-[80px] sm:w-[80px]"
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
