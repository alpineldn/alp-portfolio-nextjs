import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import LinkEl from './link';
import UnderlineLink from '@/components/common/ui/UnderlineLink';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import AlpLogo from '@/components/common/icons/AlpLogo';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
];

interface NavProps {}

const OverlayNav: React.FC<NavProps> = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ scale: 0 }}
        className="fixed left-2 z-20 flex h-[80px] w-[80px] items-center justify-center sm:m-[20px]"
      >
        <AlpLogo
          normalDelay={1}
          className="h-fit w-[40px] -translate-y-[2px] object-contain lg:w-[70px]"
        />
      </motion.div>

      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[15] h-screen w-screen bg-[rgb(41,41,41)] text-white"
      >
        <div className="box-border flex h-full flex-col justify-between p-5 sm:p-[100px]">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="flex flex-col pt-24 sm:pt-[40px]"
          >
            <ul className="pt-10">
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
          <div className="flex flex-col justify-between gap-xs sm:flex-row sm:items-center">
            <UnderlineLink
              className="text-spaced-sm interactable"
              href="mailto:studio@alpineldn.com"
            >
              studio@alpineldn.com
            </UnderlineLink>

            <div>
              <PageTransitionLink
                className="underline_link interactable text-spaced-sm"
                href="/privacy-policy"
              >
                Privacy
              </PageTransitionLink>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OverlayNav;
