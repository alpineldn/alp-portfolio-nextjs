import {defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'video_webm',
      type: 'file',
      title: 'WebM',
      options: {
        accept: 'video/webm,video/x-matroska',
      },
      validation: (e) => e.required(),
    },
    {
      name: 'video_hevc',
      type: 'file',
      title: 'MOV - HEVC',
      options: {
        accept: 'video/quicktime,video/mp4',
      },
      validation: (e) => e.required(),
    },
  ],
  preview: {
    select: {
      webm: 'video_webm.asset.url',
      hevc: 'video_hevc.asset.url',
    },
  },
})
