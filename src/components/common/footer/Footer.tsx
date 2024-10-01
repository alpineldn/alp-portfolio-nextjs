import cn from '@/utils/cn';
import PageTransitionLink from '../ui/PageTransitionLink';

interface FooterProps {
  id?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ id, className }) => {
  return (
    <div
      id={id}
      className={cn(
        'mt-section px-5 pb-sm sm:px-[43px] md:mt-section-md xl:mt-[241px]',
        className,
      )}
    >
      <div className="flex flex-row justify-between border-t border-gray pt-4 lg:pt-8">
        <div className="flex items-center gap-2.5 max-md:justify-between max-md:pt-8">
          <span className="flex flex-col gap-[15px]">
            <p className="text-xs !font-medium">
              ©{new Date().getFullYear()} ALPINE
            </p>
          </span>
        </div>
        <div className="flex items-center gap-2.5 max-md:justify-between max-md:pt-8">
          <span className="flex flex-col gap-[15px]">
            <PageTransitionLink
              dataType="simple-hover"
              href="/privacy-policy"
              className="underline_link interactable text-xs !font-medium leading-none"
            >
              Privacy
            </PageTransitionLink>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
