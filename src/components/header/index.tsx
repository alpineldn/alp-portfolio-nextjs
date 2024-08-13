'use client';

import RoundedButton from '@/components/common/ui/rounded-button';
import { useStore } from '@/store/store';
import cn from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import PageTransitionLink from '../common/ui/PageTransitionLink';
import OverlayNav from './nav/OverlayNav';
import AlpLogo from '../common/icons/AlpLogo';

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
];

const Header: React.FC<HeaderProps> = ({}) => {
  const header = useRef(null);
  const pathName = usePathname();
  const button = useRef<HTMLDivElement>(null);
  const { firstVisit, showMenuButton, setShowMenuButton } = useStore(
    (store) => store,
  );
  const [menuIconIsActive, setMenuIconIsActive] = useState(false);

  useEffect(() => {
    if (menuIconIsActive) setMenuIconIsActive(false);
    if (showMenuButton) setShowMenuButton(true);
  }, [pathName]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!button?.current) return;

      const scaleValue =
        showMenuButton || (!showMenuButton && menuIconIsActive) ? 1 : 0;

      gsap.to(button.current, {
        scale: scaleValue,
        duration: 0.25,
        ease: 'power1.out',
      });
    });

    return () => context.revert();
  }, [menuIconIsActive, showMenuButton, button?.current]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      let mm = gsap.matchMedia();
      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        delay: firstVisit ? 2.9 : 1.5,
      });

      const logoEl = document.querySelector('#site-logo');
      mm.add('(min-width: 640px)', () => {
        // const navLinks = document.querySelectorAll('.site-nav-link');
        // gsap.set([logoEl, navLinks], { opacity: 0 });

        // tl.to(logoEl, { opacity: 1 }).to(navLinks, {
        //   opacity: 1,
        //   stagger: 0.1,
        // });
        gsap.set([logoEl], { opacity: 0 });
        tl.to(logoEl, { opacity: 1 });
      });

      mm.add('(max-width: 639px)', () => {
        // const navBtn = document.querySelector('#site-menu-btn');
        // gsap.set([navBtn, navBtn], { opacity: 0 });
        // tl.to(logoEl, { opacity: 1 }).to(navBtn, { opacity: 1 });
        // const navBtn = document.querySelector('#site-menu-btn');
        // gsap.set([navBtn, navBtn], { opacity: 0 });
        // tl.to(logoEl, { opacity: 1 }).to(navBtn, { opacity: 1 });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={header}
        className={cn(
          'absolute top-0 z-[1] box-border flex w-full items-center justify-between px-5 py-[35px] font-light text-white sm:px-[43px]',
        )}
      >
        <Logo />
        {/* <NavLinks setIsActive={setMenuIconIsActive} /> */}
      </div>

      <HamburgerMenuBtn
        ref={button}
        isActive={menuIconIsActive}
        setIsActive={setMenuIconIsActive}
      />

      <AnimatePresence mode="wait">
        {menuIconIsActive && <OverlayNav />}
      </AnimatePresence>
    </>
  );
};

export default Header;

const Logo = () => {
  const { firstVisit } = useStore((store) => store);

  return (
    <PageTransitionLink
      dataType="simple-hover"
      id="site-logo"
      href="/"
      className={cn(
        'interactable',
        'text-base flex items-center justify-center opacity-0 after:bg-white hover:before:bg-white',
      )}
    >
      <AlpLogo
        firstVisit={firstVisit}
        className="h-fit w-[42px] -translate-y-[2px] object-contain"
      />

      <div className="relative ml-[10px] flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-smooth-curve">
        <p
          className={cn(
            'brand-text-link relative transition-all duration-500 ease-smooth-curve',
          )}
        >
          ALPINE
        </p>
      </div>
    </PageTransitionLink>
  );
};

const NavLinks: React.FC<{
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsActive }) => {
  return (
    <>
      <button
        id="site-menu-btn"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
        className="text-link relative z-[1] flex cursor-pointer opacity-0 sm:hidden"
      >
        <span>Menu</span>
      </button>

      <div className="hidden items-center gap-6 overflow-hidden sm:flex">
        {navItems.map(({ href, title }) => (
          <div
            key={title}
            className={cn(
              'site-nav-link sm:opacity-0',
              'underline_link',
              'text-link',
              'after:bg-white hover:before:bg-white',
            )}
          >
            <PageTransitionLink
              className="interactable"
              dataType="simple-hover"
              href={href}
            >
              {title}
            </PageTransitionLink>
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
    <div
      ref={ref}
      data-type="simple-hover"
      className="interactable fixed right-0 z-20 scale-0"
    >
      <RoundedButton
        onClick={() => setIsActive((prev) => !prev)}
        className="relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] sm:m-[20px]"
      >
        <div
          className={cn(
            'relative z-[1] w-full',
            "before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-[30%] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:transition-transform before:duration-300 before:content-[''] sm:before:w-[60%]",
            "after:absolute after:left-1/2 after:top-1/2 after:h-[2px] after:w-[30%] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white after:transition-transform after:duration-300 after:content-[''] sm:after:w-[60%]",
            'before:block after:block',
            isActive
              ? 'before:rotate-[-45deg] after:rotate-[45deg]'
              : 'before:translate-y-[200%] before:rotate-0 after:-translate-y-[200%] after:rotate-0',
          )}
        ></div>
      </RoundedButton>
    </div>
  );
});
