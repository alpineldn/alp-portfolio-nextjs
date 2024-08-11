import cn from '@/utils/cn';

interface ChevronIconProps {
  className?: string;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      className={cn('size-6', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_307_756)">
        <path d="M1 1H25V25" stroke="black" stroke-width="2" />
      </g>
      <path
        d="M24.4545 1.55811L2.09091 24.4418"
        stroke="black"
        stroke-width="2"
        stroke-linecap="square"
      />
      <defs>
        <filter
          id="filter0_b_307_756"
          x="-9"
          y="-10"
          width="45"
          height="45"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_307_756"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_307_756"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default ChevronIcon;
