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
	*[_type == "project"][]{
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
  }`;
