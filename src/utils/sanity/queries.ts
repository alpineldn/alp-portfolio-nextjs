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

export const CLIENTS_QUERY = groq`*[_type == "client"][]{
  _id,
  name,
  ${asset('image')},

}`;

export const ALL_WORK_QUERY = groq`
	*[_type == "project"] | order(orderRank)[]{
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

export const WORK_QUERY = groq`
	*[_type == "project" && selectedWorks == true] | order(orderRank)[$start...$end]{
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
    defined(*[_type == "project" && orderRank > ^.orderRank] | order(orderRank)[0]) =>
      *[_type == "project" && orderRank > ^.orderRank] | order(orderRank)[0],
    *[_type == "project"] | order(orderRank)[0]){
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
    body,
    ogImage
  }
`;
