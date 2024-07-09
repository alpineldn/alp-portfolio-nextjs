import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import LinkEl from './link';
import UnderlineLink from '@/components/common/ui/UnderlineLink';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
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
          <ul className="space-y-6 pt-10">
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
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <UnderlineLink
            className="h4 interactable"
            href="mailto:info@dennissnellenberg.com"
          >
            info@dennissnellenberg.com
          </UnderlineLink>

          <div>
            <PageTransitionLink
              className="underline_link interactable body-1"
              href="/privacy-policy"
            >
              Privacy Policy
            </PageTransitionLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
