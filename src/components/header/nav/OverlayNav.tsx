import React, { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import LinkEl from './link';
import UnderlineLink from '@/components/common/ui/UnderlineLink';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';

const navItems = [
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
];

interface NavProps {
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

const OverlayNav: React.FC<NavProps> = ({ setShowOverlay }) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-[15] h-screen w-screen overflow-auto bg-darkGray text-white"
    >
      <div className="container mx-auto flex h-full items-center">
        <NavLinks setShowOverlay={setShowOverlay} />
        <BottomLinks />
      </div>
    </motion.div>
  );
};

const NavLinks: React.FC<{
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowOverlay }) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <div
      onMouseLeave={() => {
        setSelectedIndicator(pathname);
      }}
      className="flex -translate-y-10 flex-col"
    >
      <ul>
        {navItems.map((data, index) => {
          return (
            <LinkEl
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
              setShowOverlay={setShowOverlay}
            />
          );
        })}
      </ul>
    </div>
  );
};

const BottomLinks: React.FC<{}> = () => {
  return (
    <div className="fixed bottom-0 left-0 mx-auto w-full">
      <div className="container mx-auto flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center sm:pb-section-md">
        <UnderlineLink
          className="heading-xl interactable max-sm:pb-section"
          href="mailto:studio@alpineldn.com"
        >
          studio@alpineldn.com
        </UnderlineLink>

        <div className="max-sm:pb-xs">
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
