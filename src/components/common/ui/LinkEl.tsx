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
  iconClassName = 'size-[24px] text-white group-hover:text-gray',
}) => {
  return (
    <div
      className={cn('text-link-m group flex items-center uppercase', className)}
    >
      <div data-type="simple-hover" className="interactable">
        <div className="flex items-center justify-center gap-x-[23px] text-center transition-colors duration-500 group-hover:text-gray">
          {children}

          <div className="relative overflow-hidden">
            <ArrowTopRight
              className={cn(
                iconClassName,
                'transition-[transform,colors] duration-500 group-hover:-translate-y-full',
              )}
            />
            <ArrowTopRight
              className={cn(
                iconClassName,
                'absolute left-0 transition-[transform,colors] duration-500 group-hover:-translate-y-full',
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkEl;
