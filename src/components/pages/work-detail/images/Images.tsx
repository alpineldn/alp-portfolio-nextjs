'use client';

import SanityImage from '@/components/common/sanity-image/SanityImage';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

interface ImagesProps {
  images: SanityImageObject[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <section className="relative z-[1] space-y-16 bg-light pb-[100px] lg:space-y-20">
      {images.map((img, index) => (
        <div
          key={index}
          className="container relative z-10 mx-auto !overflow-hidden first:pt-[100px]"
        >
          <SanityImage
            sizes="80vw"
            src={img}
            className="aspect-auto h-full w-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};
export default Images;
