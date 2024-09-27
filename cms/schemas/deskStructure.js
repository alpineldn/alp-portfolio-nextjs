import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {Projector, ChartBarStacked} from 'lucide-react'

export const AppStructure = (S, context) => {
  return S.list()
    .title('Content')
    .id('__root__')
    .items([
      orderableDocumentListDeskItem({
        type: 'project',
        S,
        context,
        title: 'Projects',
        icon: Projector,
      }),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Brands')
        .schemaType('brand')
        .child(S.documentTypeList('brand').title('Brands')),
      S.listItem().title('Meta').schemaType('meta').child(S.documentTypeList('meta').title('Meta')),
      S.listItem()
        .title('Clients')
        .schemaType('client')
        .child(S.documentTypeList('client').title('Clients')),
    ])
}
