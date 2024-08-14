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
}

const LinkEl: React.FC<LinkProps> = ({
  data,
  setSelectedIndicator,
  className,
}) => {
  const { title, href, index } = data;
  const pathName = usePathname();

  return (
    <motion.li
      className={cn('relative', className, {
        group: pathName !== href,
      })}
      onMouseEnter={() => setSelectedIndicator(href)}
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
          'flex items-center gap-x-20 group-hover:text-gray',
          { 'text-gray': pathName === href },
        )}
      >
        <span className="link-hover-xl transition-colors duration-500">
          {title}
        </span>
        <svg
          className="size-[28px] text-gray opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:size-[40px] md:size-[50px] lg:size-[84px]"
          viewBox="0 0 91 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 88L88 3M88 3V88M88 3H3"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="square"
          />
        </svg>
      </PageTransitionLink>
    </motion.li>
  );
};

export default LinkEl;
