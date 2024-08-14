import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import LinkEl from './link';
import UnderlineLink from '@/components/common/ui/UnderlineLink';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import AlpLogo from '@/components/common/icons/AlpLogo';

const navItems = [
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
];

interface NavProps {}

const OverlayNav: React.FC<NavProps> = () => {
  return (
    <>
      <Logo />

      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[15] h-screen w-screen overflow-auto bg-darkGray text-white"
      >
        <div className="container mx-auto flex h-full items-center">
          <NavLinks />
          <BottomLinks />
        </div>
      </motion.div>
    </>
  );
};

const NavLinks: React.FC<{}> = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <div
      onMouseLeave={() => {
        setSelectedIndicator(pathname);
      }}
      className="flex -translate-y-10 flex-col"
    >
      <ul className="">
        {navItems.map((data, index) => {
          return (
            <LinkEl
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Logo: React.FC<{}> = () => {
  return (
    <PageTransitionLink href="/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ scale: 0 }}
        className="fixed left-2 top-8 z-20 flex px-[20px] sm:px-[43px]"
      >
        <AlpLogo
          normalDelay={1}
          className="h-fit w-[50px] object-contain max-sm:translate-y-1 sm:w-[70px]"
        />
      </motion.div>
    </PageTransitionLink>
  );
};

const BottomLinks: React.FC<{}> = () => {
  return (
    <div className="fixed bottom-0 left-0 mx-auto w-full">
      <div className="container mx-auto flex w-full flex-col justify-between gap-5 pb-section-md sm:flex-row sm:items-center">
        <UnderlineLink
          className="heading-m interactable"
          href="mailto:studio@alpineldn.com"
        >
          studio@alpineldn.com
        </UnderlineLink>

        <div>
          <PageTransitionLink
            dataType="simple-hover"
            className="underline_link text-spaced-sm"
            href="/privacy-policy"
          >
            Privacy
          </PageTransitionLink>
        </div>
      </div>
    </div>
  );
};

export default OverlayNav;
