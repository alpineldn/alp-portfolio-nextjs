import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { projectId } from './client';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: 'production',
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
};

export const urlFor = (source: Image) => {
  return imageBuilder?.image(source);
};
