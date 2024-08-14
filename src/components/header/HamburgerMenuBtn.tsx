import cn from '@/utils/cn';
import { forwardRef } from 'react';

const HamburgerMenuBtn = forwardRef<
  HTMLButtonElement,
  {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ setIsActive, isActive }, ref) => {
  return (
    <button
      ref={ref}
      data-type="simple-hover"
      className="interactable z-30 scale-0 cursor-pointer"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div
        className={cn(
          'h-[30px] w-[35px]',
          isActive ? 'sm:w-[55px]' : 'sm:w-[45px]',
        )}
      >
        <div
          className={cn(
            'w-full',
            "before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-[100%] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:transition-transform before:duration-300 before:content-[''] sm:before:w-[100%]",
            "after:absolute after:left-1/2 after:top-1/2 after:h-[2px] after:w-[100%] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white after:transition-transform after:duration-300 after:content-[''] sm:after:w-[100%]",
            'before:block after:block',
            isActive
              ? 'before:rotate-[-45deg] after:rotate-[45deg]'
              : 'before:translate-y-[270%] before:rotate-0 after:-translate-y-[270%] after:rotate-0',
          )}
        ></div>
      </div>
    </button>
  );
});

export default HamburgerMenuBtn;
