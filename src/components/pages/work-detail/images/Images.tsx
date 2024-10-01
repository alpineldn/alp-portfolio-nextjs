'use client';

import SanityImage from '@/components/common/sanity-image/SanityImage';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

interface ImagesProps {
  images: SanityImageObject[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <section className="relative z-[1] space-y-16 py-[100px] lg:space-y-20">
      {images.map((img, index) => (
        <FadeInAndSlideUpOnViewAnimation
          key={index}
          className="container relative z-10 mx-auto !overflow-hidden"
        >
          <SanityImage
            sizes="80vw"
            src={img}
            className="aspect-auto h-full w-full object-cover"
          />
        </FadeInAndSlideUpOnViewAnimation>
      ))}
    </section>
  );
};
export default Images;
