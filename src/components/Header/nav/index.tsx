import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import LinkEl from './Link';
import Curve from './Curve';
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
      className="fixed right-0 top-0 z-[3] h-screen bg-[rgb(41,41,41)] text-white"
    >
      <div className="box-border flex h-full flex-col justify-between p-[100px]">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="mt-[80px] flex flex-col gap-[12px] text-[56px]"
        >
          <div className="mb-[40px] border-b border-b-[rgb(153,153,153)] text-[11px] uppercase text-[rgb(153,153,153)]">
            <p>Navigation</p>
          </div>
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
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
