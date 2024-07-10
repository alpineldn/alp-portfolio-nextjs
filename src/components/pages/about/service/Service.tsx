'use client';

import MarqueeText from '@/components/common/ui/MarqueeText';
import zeroPad from '@/utils/zero-pad';
import Image from 'next/image';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto border-t border-[#E8E6E3] py-[4rem]">
        <div>
          <h2 className="h2 pb-[5rem] xl:pb-[16rem]">Lorem, ipsum.</h2>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col xl:col-span-8">
            <h4 className="h4 xl:pb-[3.5rem] xl:pr-[7rem] 2xl:pr-[10rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              id asperiores velit eius enim aspernatur?
            </h4>

            <div data-type="link" className="interactable hidden xl:block">
              <MarqueeText>Lorem, ipsum.</MarqueeText>
            </div>
          </div>

          <div className="col-span-12 max-xl:pt-[5rem] xl:col-span-4 xl:translate-y-[-2.5rem]">
            <h5 className="body-1 pb-[2.25rem] font-medium">Services</h5>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
              {Array.from({ length: 5 }).map((_, i) => (
                <li
                  key={i}
                  className="body-1 border-sonic-silver border-t py-[1.4rem]"
                >
                  <span className="pr-[1.5rem]">{zeroPad(i + 1, 2)}</span>
                  <span>lorem</span>
                </li>
              ))}
            </ul>

            <div data-type="link" className="interactable block xl:hidden">
              <MarqueeText>Lorem, ipsum.</MarqueeText>
            </div>
          </div>
        </div>
        <div className="py-[2rem]">
          <Image
            className="aspect-video h-full max-h-[650px] w-full rounded-lg object-cover"
            src="/images/funny.jpg"
            width={1920}
            height={1080}
            alt="Alt"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
