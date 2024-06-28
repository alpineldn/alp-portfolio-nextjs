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
  const height = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <section ref={container} className="relative z-[1] bg-[#DDDDDD]">
      {images.map((img) => (
        <div className="container relative z-10 mx-auto !overflow-hidden first:pt-[100px]">
          <div className="overflow-hidden">
            <div
              data-scroll
              data-scroll-speed={0.05}
              className="overflow-hidden"
            >
              <SanityImage
                sizes="80vw"
                src={img}
                className="aspect-auto h-full w-full scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      ))}

      <motion.div style={{ height }} className="relative">
        <div className="absolute left-[-10%] z-[1] h-[1550%] w-[120%] rounded-[0_0_50%_50%] bg-[#DDDDDD] shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </section>
  );
};
export default Images;
