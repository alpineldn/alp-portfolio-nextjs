import { motion } from 'framer-motion';

interface AlpLogoProps {
  className?: string;
  firstVisit?: boolean;
  normalDelay?: number;
}

const AlpLogo: React.FC<AlpLogoProps> = ({
  firstVisit,
  className,
  normalDelay = 2,
}) => {
  return (
    <motion.svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 231.53 92.95"
    >
      <motion.path
        initial={{ pathLength: 1 }}
        animate={{ pathLength: [0, 1] }}
        transition={{
          duration: 2,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: firstVisit ? 3 : normalDelay,
        }}
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: '10px',
        }}
        d="m5.66 86.84 64.93-64.93 65.29 65.3H62.69l81.55-81.55 81.64 81.64"
      />
    </motion.svg>
  );
};
export default AlpLogo;
