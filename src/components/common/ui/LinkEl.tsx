import cn from '@/utils/cn';
import ArrowTopRight from '../icons/ArrowTopRight';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const LinkEl: React.FC<MarqueeProps> = ({
  children,
  className,
  iconClassName,
}) => {
  return (
    <div
      className={cn('text-link-m group flex items-center uppercase', className)}
    >
      <div data-type="simple-hover" className="interactable">
        <div className="flex items-center justify-center gap-x-[23px] text-center transition-colors duration-500 group-hover:text-gray">
          <span>{children}</span>

          <ArrowTopRight
            className={cn(
              iconClassName,
              'scale-75 transition-[transform,colors] duration-500',
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkEl;
