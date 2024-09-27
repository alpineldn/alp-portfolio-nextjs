import {defineField, defineType} from 'sanity'
import {Building2} from 'lucide-react'

export default defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  icon: Building2,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
