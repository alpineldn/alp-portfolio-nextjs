import { motion } from 'framer-motion';
import { slide } from '../../animation';
import PageTransitionLink from '@/components/common/ui/PageTransitionLink';
import cn from '@/utils/cn';

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

  return (
    <motion.li
      className={cn('relative flex items-center', className)}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <PageTransitionLink
        dataType="simple-hover"
        className={cn('underline_link interactable', 'link-hover-xl')}
        href={href}
      >
        {title}
      </PageTransitionLink>
    </motion.li>
  );
};

export default LinkEl;
