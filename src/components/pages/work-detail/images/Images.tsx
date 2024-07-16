'use client';

import SanityImage from '@/components/common/sanity-image/SanityImage';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { fadeInAndSlideUp } from '@/components/common/anim';
import { motion } from 'framer-motion';

interface ImagesProps {
  images: SanityImageObject[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <section className="relative z-[1] space-y-16 pb-[100px] lg:space-y-20">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial="initial"
          whileInView="enter"
          variants={fadeInAndSlideUp}
          viewport={{ once: true }}
          className="container relative z-10 mx-auto !overflow-hidden first:pt-[100px]"
        >
          <SanityImage
            sizes="80vw"
            src={img}
            className="aspect-auto h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </section>
  );
};
export default Images;
