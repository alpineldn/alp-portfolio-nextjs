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
import Magnetic from '@/components/common/ui/Magnetic';
import Link from 'next/link';

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

  useEffect(() => {
    if (!button?.current) return;

    const scaleValue =
      isQuarterScreenScrolled || (!isQuarterScreenScrolled && showBtn) ? 1 : 0;

    gsap.to(button.current, {
      scale: scaleValue,
      duration: 0.25,
      ease: 'power1.out',
    });
  }, [showBtn, isQuarterScreenScrolled, button?.current]);

  useLayoutEffect(() => {
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
  }, []);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(button.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: 0,
  //       end: window.innerHeight / 3,
  //       onLeave: () => {
  //         setIsQuarterScreenScrolled(true);
  //       },
  //       onEnterBack: () => {
  //         setIsQuarterScreenScrolled(false);
  //       },
  //     },
  //   });
  // }, [button?.current]);

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
    <Link href="/" className="group flex cursor-pointer">
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
    </Link>
  );
};

const NavLinks: React.FC<{
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsActive }) => {
  const pathName = usePathname();
  return (
    <>
      <Magnetic>
        <button
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
          className="relative z-[1] flex cursor-pointer p-[15px] sm:hidden"
        >
          <span>Menu</span>
          <div
            className={cn(
              'absolute left-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-[50%] transition-transform duration-200 ease-smooth-curve',
              pathName === '/' ? 'bg-white' : 'bg-[#1c1d20]',
            )}
          ></div>
        </button>
      </Magnetic>

      <div className="hidden items-center sm:flex">
        {navItems.map(({ href, title }) => (
          <Magnetic key={title}>
            <div className="group relative z-[1] flex cursor-pointer flex-col p-[15px]">
              <Link href={href}>{title}</Link>
              <div
                className={cn(
                  'absolute left-[50%] top-[45px] h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-[50%] transition-transform duration-200 ease-smooth-curve group-hover:scale-100',
                  pathName === '/' ? 'bg-white' : 'bg-[#1c1d20]',
                )}
              ></div>
            </div>
          </Magnetic>
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
            "relative z-[1] w-full before:relative before:top-[3px] before:m-auto before:block before:h-[1px] before:w-[30%] before:bg-white before:transition-transform before:duration-300 before:content-[''] after:relative after:top-[-3px] after:m-auto after:block after:h-[1px] after:w-[30%] after:bg-white after:transition-transform after:duration-300 after:content-[''] sm:before:top-[5px] sm:before:w-[40%] sm:after:top-[-5px] sm:after:w-[40%]",
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
