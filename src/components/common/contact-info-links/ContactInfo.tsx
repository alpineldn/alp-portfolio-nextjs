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
        'mt-[80px] flex flex-col-reverse justify-between p-5 md:flex-row lg:mt-[200px]',
        className,
      )}
    >
      <div className="flex items-end gap-2.5 max-md:justify-between max-md:pt-8">
        <span className="flex flex-col gap-[15px]">
          {/* <h3 className="m-0 cursor-default p-[2.5px] text-xs font-light text-[grey]">
            Version
          </h3> */}
          <p className="underline_link body-2">©2024 ALPINE</p>
        </span>
      </div>
      <div className="flex items-end gap-2.5 border-b-[rgb(134,134,134)]/50 max-md:border-b max-md:pb-8">
        <span className="flex flex-col gap-[15px]">
          {/* <h3 className="m-0 cursor-default p-[2.5px] text-xs font-light text-[grey]">
            Socials
          </h3> */}
          <PageTransitionLink
            href="/privacy-policy"
            className="underline_link body-2"
          >
            Privacy Policy
          </PageTransitionLink>
        </span>
        {/* <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
          Instagram
        </p>
        <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
          Dribbble
        </p>
        <p className='m-0 cursor-pointer p-[2.5px] text-sm after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
          Linkedin
        </p> */}
      </div>
    </div>
  );
};
export default ContactInfo;
