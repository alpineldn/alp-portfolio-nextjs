import {orderRankField} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    orderRankField({type: 'project'}),

    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Your page title.',
        },
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
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tileMedia',
      type: 'object',
      description: "If you don't upload a video, the tile image will be used.",
      fields: [
        {
          name: 'tileImage',
          title: 'Tile image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'tileVideo',
          title: 'Tile video',
          type: 'video',
        },
      ],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'agency',
      title: 'Agency',
      type: 'string',
    }),
    defineField({
      name: 'previewURL',
      title: 'Preview URL',
      type: 'slug',
      options: {
        maxLength: 96,
      },
    }),
    defineField({
      name: 'youtubeVideoUrl',
      title: 'Youtube Video URL',
      type: 'slug',
      options: {
        maxLength: 96,
      },
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    {
      title: 'Selected Works',
      name: 'selectedWorks',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
