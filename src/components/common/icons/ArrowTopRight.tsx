interface ArrowTopRightProps {
  className?: string;
}

const ArrowTopRight: React.FC<ArrowTopRightProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 26L26 2M26 2V26M26 2H2" stroke="white" stroke-width="3" />
    </svg>
  );
};

export default ArrowTopRight;
