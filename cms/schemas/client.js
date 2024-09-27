import {defineField, defineType} from 'sanity'
import {Handshake} from 'lucide-react'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  icon: Handshake,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
