import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';
import cn from '../../../../utils/cn';

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
    <motion.div
      className={cn(styles.link, className)}
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
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default LinkEl;
