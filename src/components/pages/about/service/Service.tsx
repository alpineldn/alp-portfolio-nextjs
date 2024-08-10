'use client';

import LinkEl from '@/components/common/ui/LinkEl';
import zeroPad from '@/utils/zero-pad';
import Image from 'next/image';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto border-t border-white/50 py-sm">
        <div>
          <h2 className="heading-xl pb-xs xl:pb-section-lg">Lorem, ipsum.</h2>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col xl:col-span-8">
            <h4 className="heading-m xl:pb-sm xl:pr-[7rem] 2xl:pr-[10rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              id asperiores velit eius enim aspernatur?
            </h4>

            <div data-type="link" className="interactable hidden xl:block">
              <LinkEl>Lorem, ipsum.</LinkEl>
            </div>
          </div>

          <div className="col-span-12 max-xl:pt-xs xl:col-span-4 xl:translate-y-[-2.5rem]">
            <h5 className="subtitle-md mb-xs text-lightGray">Services</h5>

            <ul className="pb-[3.5rem] md:pb-[2.5rem]">
              {Array.from({ length: 5 }).map((_, i) => (
                <li
                  key={i}
                  className="text-spaced-sm border-sonic-silver border-t py-xs"
                >
                  <span className="pr-[1.5rem]">{zeroPad(i + 1, 2)}</span>
                  <span>lorem</span>
                </li>
              ))}
            </ul>

            <div data-type="link" className="interactable block xl:hidden">
              <LinkEl>Lorem, ipsum.</LinkEl>
            </div>
          </div>
        </div>
        <div className="py-xs">
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
