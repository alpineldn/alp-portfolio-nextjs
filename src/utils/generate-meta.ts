import { SITE_URL } from './constants';
import { imageBuilder } from './sanity/client';

interface MetaData {
  title: string;
  description: string;
  og: {
    type?: string;
    url?: string;
    sanityImg?: any;
    showTitle?: boolean;
    localImg?: string;
  };
  keywords?: string[];
}

export default function generateMeta({
  title,
  description,
  og: {
    type = 'website',
    url = 'https://alpineldn.com',
    localImg,
    sanityImg,
    showTitle = true,
  },
  keywords,
}: MetaData) {
  const openGraphImages = makeOpenGraphImages(
    { sanityImg, localImg },
    title,
    url,
    showTitle,
  );

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    openGraph: {
      url,
      type,
      title,
      description,
      images: openGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@alpineldn',
      site: '@alpineldn',
      images: openGraphImages,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const makeOpenGraphImages = (
  { sanityImg, localImg }: Omit<MetaData['og'], 'type' | 'url'>,
  metaTitle: string | undefined,
  url: string,
  showTitle?: boolean,
) => {
  const baseUrl = `/api/og?title=${metaTitle}`;

  if (localImg) {
    const url = `${baseUrl}&showTitle=${showTitle}&source=local`;

    return [{ url: url + (localImg ? `&img=${localImg}` : '') }];
  }

  if (sanityImg) {
    const sanityImgUrl = imageBuilder
      .image(sanityImg)
      .width(1200)
      .height(630)
      .url();

    return [
      {
        url: `${baseUrl}&showTitle=${showTitle}&img=${encodeURIComponent(sanityImgUrl)}&source=sanity&pageUrl=${encodeURIComponent(url)}`,
      },
    ];
  }

  return [];
};
