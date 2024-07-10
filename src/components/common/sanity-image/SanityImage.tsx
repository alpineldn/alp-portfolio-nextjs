'use client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import {
  SanityAsset,
  SanityImageObject,
} from '@sanity/image-url/lib/types/types';
import sanityClient from '@/utils/sanity/client';

interface SanityImageProps {
  src: SanityImageObject;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

const SanityImage: React.FC<SanityImageProps> = ({
  src,
  className,
  sizes = '(max-width: 800px) 100vw, 800px',
  style = { width: '100%', height: '100%' },
  alt = 'Image',
}) => {
  const imageProps = useNextSanityImage(sanityClient, src);

  return (
    <Image
      {...imageProps}
      className={className}
      style={style}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={(src.asset as SanityAsset).metadata.lqip}
      alt={alt}
    />
  );
};

export default SanityImage;
