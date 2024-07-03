'use client';

import SanityImage from '@/components/common/SanityImage/SanityImage';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ImagesProps {
  images: SanityImageObject[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section
      ref={container}
      className="relative z-[1] space-y-16 bg-dark lg:space-y-20"
    >
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

      <motion.div style={{ height }} className="relative">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-[0_0_50%_50%] bg-dark shadow-[0px_60px_50px_rgba(0,0,0,0.2)]"></div>
      </motion.div>
    </section>
  );
};
export default Images;
