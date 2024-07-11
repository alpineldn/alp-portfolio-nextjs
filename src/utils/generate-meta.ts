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
    showTitle,
  );

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
        url: `${baseUrl}&showTitle=${showTitle}&img=${sanityImgUrl}&source=sanity`,
      },
    ];
  }

  return [];
};
