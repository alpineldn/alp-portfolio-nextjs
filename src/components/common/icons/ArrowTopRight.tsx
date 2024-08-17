interface ArrowTopRightProps {
  className?: string;
}

const ArrowTopRight: React.FC<ArrowTopRightProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 26L26 2M26 2V26M26 2H2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default ArrowTopRight;
