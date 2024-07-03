import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import LinkEl from './Link';
import Footer from './Footer';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
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
          className="flex flex-col pt-24 text-[56px] sm:pt-[40px]"
        >
          <div className="border-b border-b-[rgb(153,153,153)] pb-10 text-[11px] uppercase text-[rgb(153,153,153)] sm:pb-[40px]">
            <p>Navigation</p>
          </div>
          <ul className="space-y-6 pt-10">
            {navItems.map((data, index) => {
              return (
                <LinkEl
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></LinkEl>
              );
            })}
          </ul>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Nav;
