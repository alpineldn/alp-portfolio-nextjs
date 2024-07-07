import { imageBuilder } from './sanity/client';

interface MetaData {
  title: string;
  description: string;
  og: {
    type?: string;
    url?: string;
    sanityImg?: any;
    localImg?: {
      showTitle?: boolean;
      localImgPath?: string;
    };
  };
  keywords?: string[];
}

export default function generateMeta({
  title,
  description,
  og: { type = 'website', url = 'https://alpineldn.com', localImg, sanityImg },
  keywords,
}: MetaData) {
  const openGraphImages = makeOpenGraphImages({ sanityImg, localImg }, title);

  return {
    title: title,
    description: description,
    keywords,
    openGraph: {
      url: url,
      type: type,
      title: title,
      description: description,
      images: openGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: '@alpineldn',
      site: '@alpineldn',
      images: openGraphImages,
    },
    alternates: {
      canonical: 'https://alpineldn.com',
    },
  };
}

export const makeOpenGraphImages = (
  { sanityImg, localImg }: Omit<MetaData['og'], 'type' | 'url'>,
  metaTitle: string | undefined,
) => {
  const sizes = [
    { w: 800, h: 600 },
    { w: 1200, h: 630 },
    { w: 600, h: 600 },
    { w: 256, h: 256 },
  ];

  if (localImg) {
    const { localImgPath, showTitle = false } = localImg;
    const url = `/api/og?title=${metaTitle}&showTitle=${showTitle}`;

    if (!!localImgPath) {
      return [{ url: url + `&img=${localImgPath}` }];
    }

    return [{ url: url }];
  } else if (sanityImg) {
    return sizes.map(({ w, h }) => ({
      url: `${imageBuilder.image(sanityImg).width(w).height(h).url()}`,
      width: w,
      height: h,
      alt: `${metaTitle ?? 'og image'}`,
    }));
  } else {
    return [];
  }
};
