import { groq } from 'next-sanity';

export const asset = (attr: string, opts?: { as: string }) => groq`'${
  opts?.as ?? attr
}': ${attr} {
  ...,
  asset->{
    ...,
    metadata {
      lqip,
      dimensions
    }
  }
}`;

export const WORK_QUERY = groq`
	*[_type == "project"] | order(_createdAt asc)[$start...$end]{
      _id,
	    agency,
        ${asset('mainImage')},
        categories[]->{
            _id,
            title
        },
        client,
        selectedWorks,
        slug,
        title
	}
`;

export const WORK_SLUGS_QUERY = (slug: string) =>
  groq`*[_type == "project" && slug.current == "${slug}"][0]{
    ...,
    ${asset('mainImage')},
    ${asset('images[]', { as: 'images' })},
    categories[]->{
      _id,
      title
    },
    "nextProject": select(
    defined(*[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc)[0]) =>
      *[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc)[0],
    *[_type == "project"] | order(_createdAt asc)[0]){
        title,
        slug,
        ${asset('mainImage')},
      }
  }`;

export const META_QUERY = (pageName: string) => groq`
  *[_type == "meta" && path.current == "${pageName}"][0]{
    title,
    meta,
    path,
    body
  }
`;
