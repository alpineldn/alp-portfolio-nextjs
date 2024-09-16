import { motion } from 'framer-motion';
import { slide } from '../../animation';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import cn from '@/utils/cn';
import { usePathname } from 'next/navigation';

interface LinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  className?: string;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinkEl: React.FC<LinkProps> = ({
  data,
  setSelectedIndicator,
  className,
  setShowOverlay,
}) => {
  const { title, href, index } = data;
  const pathName = usePathname();

  return (
    <motion.li
      className={cn('relative', className, {
        group: pathName !== href,
      })}
      onMouseEnter={() => setSelectedIndicator(href)}
      onClick={() => pathName === href && setShowOverlay(false)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <PageTransitionLink
        dataType="simple-hover"
        href={href}
        className={cn(
          'interactable',
          'group-hover:text-primary-hover flex items-center gap-x-20 !text-link-xxl',
          { 'text-primary-active hover:text-primary-hover': pathName === href },
        )}
      >
        <span className="!leading-none transition-colors duration-500">
          {title}
        </span>
        <svg
          width="1em"
          height="1em"
          className="scale-[.65] text-gray opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          viewBox="0 0 91 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-[6.5] md:stroke-[7] xl:stroke-[8]"
            d="M3 88L88 3M88 3V88M88 3H3"
            stroke="currentColor"
            strokeLinecap="square"
          />
        </svg>
      </PageTransitionLink>
    </motion.li>
  );
};

export default LinkEl;
