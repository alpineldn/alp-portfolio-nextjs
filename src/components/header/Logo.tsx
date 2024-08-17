import { useStore } from '@/store/store';
import { useEffect, useState } from 'react';
import PageTransitionLink from '../common/ui/PageTransitionLink';
import cn from '@/utils/cn';
import AlpLogo from '../common/icons/AlpLogo';
import { AnimatePresence, motion } from 'framer-motion';

interface LogoProps {
  showOverlay: boolean;
}

const Logo: React.FC<LogoProps> = ({ showOverlay }) => {
  const { firstVisit } = useStore((store) => store);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
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
          className="mr-[10px] w-[60px] -translate-y-[2px] object-contain sm:w-[50px]"
        />

        <AnimatePresence mode="wait">
          {!showOverlay && scrollY < 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex overflow-hidden whitespace-nowrap"
            >
              <p
                className={cn(
                  'relative text-brand-text-link leading-none transition-all duration-500 ease-smooth-curve',
                )}
              >
                ALPINE
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransitionLink>
    </div>
  );
};
export default Logo;
