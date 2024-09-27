// schemas/post.js
import {UserRoundSearch} from 'lucide-react'

export default {
  name: 'meta',
  title: 'Meta',
  type: 'document',
  icon: UserRoundSearch,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Your page title.',
    },
    {
      name: 'path',
      title: 'Path',
      type: 'slug',
      description: 'Your meta path to identify the current page.',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'ogImage',
      type: 'image',
    },

    {
      name: 'meta',
      title: 'Meta Tags',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Meta description for the post',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Meta keywords for the post',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'path.current',
      media: 'ogImage',
    },
  },
}
