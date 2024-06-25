import Magnetic from '@/components/common/ui/Magnetic';

interface ContactInfoProps {}

const ContactInfo: React.FC<ContactInfoProps> = ({}) => {
  return (
    <div className="mt-[150px] flex justify-between p-5">
      <div className="flex items-end gap-2.5">
        <span className="flex flex-col gap-[15px]">
          <h3 className="m-0 cursor-default p-[2.5px] text-[1em] font-light text-[grey]">
            Version
          </h3>
          <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            2022 © Edition
          </p>
        </span>
        <span className="flex flex-col gap-[15px]">
          <h3 className="m-0 cursor-default p-[2.5px] text-[1em] font-light text-[grey]">
            Version
          </h3>
          <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            11:49 PM GMT+2
          </p>
        </span>
      </div>
      <div className="flex items-end gap-2.5">
        <span className="flex flex-col gap-[15px]">
          <h3 className="m-0 cursor-default p-[2.5px] text-[1em] font-light text-[grey]">
            socials
          </h3>
          <Magnetic>
            <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
              Awwwards
            </p>
          </Magnetic>
        </span>
        <Magnetic>
          <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            Instagram
          </p>
        </Magnetic>
        <Magnetic>
          <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            Dribbble
          </p>
        </Magnetic>
        <Magnetic>
          <p className='m-0 cursor-pointer p-[2.5px] after:relative after:left-2/4 after:mt-[2px] after:block after:h-px after:w-[0%] after:-translate-x-2/4 after:bg-[white] after:transition-[width] after:duration-[0.2s] after:ease-linear after:content-[""] hover:after:w-full'>
            Linkedin
          </p>
        </Magnetic>
      </div>
    </div>
  );
};
export default ContactInfo;
