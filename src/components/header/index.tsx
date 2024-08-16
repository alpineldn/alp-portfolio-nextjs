'use client';

import { useStore } from '@/store/store';
import cn from '@/utils/cn';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import OverlayNav from './nav/OverlayNav';
import Logo from './Logo';
import HamburgerMenuBtn from './HamburgerMenuBtn';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const header = useRef(null);
  const pathName = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { firstVisit, showMenuButton, setShowMenuButton } = useStore(
    (store) => store,
  );
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (showOverlay) setShowOverlay(false);
    if (showMenuButton) setShowMenuButton(true);
  }, [pathName]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (!buttonRef?.current) return;

      const scaleValue =
        showMenuButton || (!showMenuButton && showOverlay) ? 1 : 0;

      gsap.to(buttonRef.current, {
        scale: scaleValue,
        duration: 0.25,
        ease: 'power1.out',
      });
    });

    return () => context.revert();
  }, [showOverlay, showMenuButton, buttonRef?.current]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        delay: firstVisit ? 2.9 : 1.5,
      });

      const logoEl = document.querySelector('#site-logo');
      tl.to(logoEl, { opacity: 1 });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={header}
        className={cn(
          'fixed left-0 top-2 z-20 box-border flex w-full items-center justify-between px-[20px] font-light text-white sm:px-[20px]',
        )}
      >
        <Logo showOverlay={showOverlay} />
        {/* <NavLinks setIsActive={setMenuIconIsActive} /> */}

        <HamburgerMenuBtn
          ref={buttonRef}
          isActive={showOverlay}
          setIsActive={setShowOverlay}
        />
      </div>

      <AnimatePresence mode="wait">
        {showOverlay && <OverlayNav />}
      </AnimatePresence>
    </>
  );
};

export default Header;

// const NavLinks: React.FC<{
//   setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
// }> = ({ setIsActive }) => {
//   return (
//     <>
//       <button
//         id="site-menu-btn"
//         onClick={() => {
//           setIsActive((prev) => !prev);
//         }}
//         className="text-link relative z-[1] flex cursor-pointer opacity-0 sm:hidden"
//       >
//         <span>Menu</span>
//       </button>

//       <div className="hidden items-center gap-6 overflow-hidden sm:flex">
//         {navItems.map(({ href, title }) => (
//           <div
//             key={title}
//             className={cn(
//               'site-nav-link sm:opacity-0',
//               'underline_link',
//               'text-link',
//               'after:bg-white hover:before:bg-white',
//             )}
//           >
//             <PageTransitionLink
//               className="interactable"
//               dataType="simple-hover"
//               href={href}
//             >
//               {title}
//             </PageTransitionLink>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
