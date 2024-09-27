import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {AppStructure} from './schemas/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Alpine-cms',

  projectId: '3uhoyu30',
  dataset: 'production',

  plugins: [structureTool({structure: AppStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
