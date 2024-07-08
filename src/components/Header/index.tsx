'use client';

import RoundedButton from '@/components/common/ui/RoundedButton';
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
import Nav from './nav';

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
  const pathName = usePathname();
  const button = useRef<HTMLDivElement>(null);
  const { firstVisit, showMenuButton, setShowMenuButton } = useStore(
    (store) => store,
  );
  const [menuIconIsActive, setMenuIconIsActive] = useState(false);

  useEffect(() => {
    if (menuIconIsActive) setMenuIconIsActive(false);
    if (showMenuButton) setShowMenuButton(false);
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
        const navLinks = document.querySelectorAll('.site-nav-link');
        gsap.set([logoEl, navLinks], { opacity: 0 });

        tl.to(logoEl, { opacity: 1 }).to(navLinks, {
          opacity: 1,
          stagger: 0.1,
        });
      });

      mm.add('(max-width: 639px)', () => {
        const navBtn = document.querySelector('#site-menu-btn');
        gsap.set([navBtn, navBtn], { opacity: 0 });
        tl.to(logoEl, { opacity: 1 }).to(navBtn, { opacity: 1 });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={header}
        className={cn(
          'absolute top-0 z-[1] box-border flex w-full items-center justify-between px-5 py-[35px] font-light text-white sm:px-[35px]',
        )}
      >
        <Logo />
        <NavLinks setIsActive={setMenuIconIsActive} />
      </div>

      <HamburgerMenuBtn
        ref={button}
        isActive={menuIconIsActive}
        setIsActive={setMenuIconIsActive}
      />

      <AnimatePresence mode="wait">
        {menuIconIsActive && <Nav />}
      </AnimatePresence>
    </>
  );
};

export default Header;

const Logo = () => {
  const { firstVisit } = useStore((store) => store);

  return (
    <PageTransitionLink
      id="site-logo"
      href="/"
      className={cn(
        'flex items-center justify-center text-base opacity-0 after:bg-white hover:before:bg-white md:text-lg xl:text-xl',
      )}
    >
      <motion.svg
        className="h-fit w-[40px] -translate-y-[2px] object-contain"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 231.53 92.95"
      >
        <motion.path
          initial={{ pathLength: 1 }}
          animate={{ pathLength: [0, 1] }}
          transition={{
            duration: 2,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: firstVisit ? 3 : 2,
          }}
          style={{
            fill: 'none',
            stroke: '#fff',
            strokeLinecap: 'square',
            strokeMiterlimit: 10,
            strokeWidth: '8px',
          }}
          d="m5.66 86.84 64.93-64.93 65.29 65.3H62.69l81.55-81.55 81.64 81.64"
        />
      </motion.svg>

      <div className="relative ml-[10px] flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-smooth-curve">
        <p className="body-1 relative transition-all duration-500 ease-smooth-curve">
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
        className="relative z-[1] flex cursor-pointer p-[15px] opacity-0 sm:hidden"
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
              'body-1',
              'after:bg-white hover:before:bg-white',
            )}
          >
            <PageTransitionLink className="interactable" href={href}>
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
      data-type="click"
      ref={ref}
      className="interactable fixed right-0 z-20 scale-0"
    >
      <RoundedButton
        onClick={() => setIsActive((prev) => !prev)}
        className="relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[50%] sm:m-[20px]"
      >
        <div
          className={cn(
            "relative z-[1] w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-[30%] before:bg-light before:duration-300 before:content-[''] before:[transition:width_0s,background_.3s] after:relative after:top-[-5px] after:m-auto after:block after:h-[1px] after:w-[30%] after:bg-light after:transition-transform after:duration-300 after:content-[''] sm:before:w-[40%] sm:after:w-[40%]",
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
