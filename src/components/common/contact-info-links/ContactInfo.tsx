import cn from '@/utils/cn';
import PageTransitionLink from '../ui/PageTransitionLink';

interface ContactInfoProps {
  id?: string;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ id, className }) => {
  return (
    <div
      id={id}
      className={cn(
        'mt-section px-5 pb-sm sm:px-[43px] md:mt-section-md xl:mt-[241px]',
        className,
      )}
    >
      <div className="flex flex-col-reverse justify-between pt-8 md:flex-row lg:border-t lg:border-white/50">
        <div className="flex items-end gap-2.5 max-md:justify-between max-md:pt-8">
          <span className="flex flex-col gap-[15px]">
            <p className="text-xs !font-medium">
              ©{new Date().getFullYear()} ALPINE
            </p>
          </span>
        </div>
        <div className="flex items-end gap-2.5 border-b-white/50 max-md:border-b max-md:pb-8">
          <span className="flex flex-col gap-[15px]">
            <PageTransitionLink
              dataType="simple-hover"
              href="/privacy-policy"
              className="underline_link text-xs interactable !font-medium"
            >
              Privacy
            </PageTransitionLink>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
