import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';
import cn from '../../../../utils/cn';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';

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
  isActive,
  setSelectedIndicator,
  className,
}) => {
  const { title, href, index } = data;

  return (
    <motion.li
      className={cn('relative flex items-center', className)}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute left-[-30px] h-2.5 w-2.5 rounded-[50%] bg-[white]"
      ></motion.div>
      <PageTransitionLink
        className="text-5xl lg:text-6xl lg:!leading-snug"
        href={href}
      >
        {title}
      </PageTransitionLink>
    </motion.li>
  );
};

export default LinkEl;
