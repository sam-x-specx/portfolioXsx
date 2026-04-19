// // sanity/schemaTypes/update.ts
// import { defineField, defineType } from 'sanity'

// export const updateSchema = defineType({
//   name: 'update',
//   title: 'Update',
//   type: 'document',
//   fields: [
//     defineField({ name: 'title',       type: 'string',   title: 'Title' }),
//     defineField({ name: 'heading',     type: 'string',   title: 'Heading (shown large at top)' }),
//     defineField({ name: 'slug',        type: 'slug',     title: 'Slug', options: { source: 'title' } }),
//     defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
//     defineField({
//       name: 'coverImage', type: 'image', title: 'Cover Photo',
//       options: { hotspot: true },
//     }),
//     defineField({
//       name: 'body', type: 'array', title: 'Content',
//       of: [
//         {
//           type: 'block',
//           styles: [
//             { title: 'Normal',     value: 'normal' },
//             { title: 'H2',        value: 'h2' },
//             { title: 'H3',        value: 'h3' },
//             { title: 'H4',        value: 'h4' },
//             { title: 'Quote',     value: 'blockquote' },
//           ],
//           marks: {
//             decorators: [
//               { title: 'Bold',          value: 'strong' },
//               { title: 'Italic',        value: 'em' },
//               { title: 'Code',          value: 'code' },
//               { title: 'Underline',     value: 'underline' },
//               { title: 'Strikethrough', value: 's' },
//             ],
//             annotations: [
//               {
//                 name: 'link', type: 'object', title: 'Link',
//                 fields: [
//                   defineField({ name: 'href',  type: 'url',     title: 'URL' }),
//                   defineField({ name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true }),
//                 ],
//               },
//             ],
//           },
//         },
//         { type: 'image', options: { hotspot: true } },
//         defineField({
//           name: 'linkCard', type: 'object', title: 'Link Card',
//           fields: [
//             defineField({ name: 'label', type: 'string', title: 'Label' }),
//             defineField({ name: 'url',   type: 'url',    title: 'URL' }),
//             defineField({ name: 'note',  type: 'string', title: 'Short Note' }),
//           ],
//         }),
//       ],
//     }),
//     defineField({ name: 'tags',  type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
//     defineField({ name: 'views', type: 'number', title: 'Views', initialValue: 0 }),
//   ],
// })




// sanity/schemaTypes/update.ts
// import { defineField, defineType } from 'sanity'

// export const updateSchema = defineType({
//   name: 'update',
//   title: 'Update',
//   type: 'document',
//   fields: [
//     defineField({ name: 'title',       type: 'string',   title: 'Title' }),
//     defineField({ name: 'heading',     type: 'string',   title: 'Heading (shown large at top)' }),
//     defineField({ name: 'slug',        type: 'slug',     title: 'Slug', options: { source: 'title' } }),
//     defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
//     defineField({
//       name: 'coverImage',
//       type: 'image',
//       title: 'Cover Photo (16:9)',
//       options: {
//         hotspot: true,
//         metadata: ['lqip'],
//       },
//     }),
//     defineField({
//       name: 'body',
//       type: 'array',
//       title: 'Content',
//       of: [
//         {
//           type: 'block',
//           styles: [
//             { title: 'Normal',    value: 'normal' },
//             { title: 'H2',       value: 'h2' },
//             { title: 'H3',       value: 'h3' },
//             { title: 'H4',       value: 'h4' },
//             { title: 'Quote',    value: 'blockquote' },
//           ],
//           marks: {
//             decorators: [
//               { title: 'Bold',          value: 'strong' },
//               { title: 'Italic',        value: 'em' },
//               { title: 'Code',          value: 'code' },
//               { title: 'Underline',     value: 'underline' },
//               { title: 'Strikethrough', value: 's' },
//             ],
//             annotations: [
//               {
//                 name: 'link',
//                 type: 'object',
//                 title: 'Link',
//                 fields: [
//                   defineField({ name: 'href',  type: 'url',     title: 'URL' }),
//                   defineField({ name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true }),
//                 ],
//               },
//             ],
//           },
//         },
//         {
//           type: 'image',
//           options: {
//             hotspot: true,
//             metadata: ['lqip'],
//           },
//           fields: [
//             defineField({
//               name: 'alt',
//               type: 'string',
//               title: 'Alt text',
//             }),
//             defineField({
//               name: 'caption',
//               type: 'string',
//               title: 'Caption',
//             }),
//             defineField({
//               name: 'ratio',
//               type: 'string',
//               title: 'Display Ratio',
//               options: {
//                 list: [
//                   { title: '16:9 (Landscape)', value: '16/9' },
//                   { title: '1:1 (Square)',      value: '1/1' },
//                   { title: '4:3 (Standard)',    value: '4/3' },
//                   { title: '9:16 (Portrait)',   value: '9/16' },
//                 ],
//                 layout: 'radio',
//               },
//               initialValue: '16/9',
//             }),
//           ],
//         },
//         defineField({
//           name: 'linkCard',
//           type: 'object',
//           title: 'Link Card',
//           fields: [
//             defineField({ name: 'label', type: 'string', title: 'Label' }),
//             defineField({ name: 'url',   type: 'url',    title: 'URL' }),
//             defineField({ name: 'note',  type: 'string', title: 'Short Note' }),
//           ],
//         }),
//       ],
//     }),
//     defineField({ name: 'tags',  type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
//     defineField({ name: 'views', type: 'number', title: 'Views', initialValue: 0 }),
//   ],
//   orderings: [
//     { title: 'Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
//   ],
// })




import { defineField, defineType } from 'sanity'

export const updateSchema = defineType({
  name: 'update',
  title: 'Update',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',   title: 'Title' }),
    defineField({ name: 'heading',     type: 'string',   title: 'Heading (large display title)' }),
    defineField({ name: 'description', type: 'text',     title: 'Subtitle / Short Description' }),
    defineField({ name: 'slug',        type: 'slug',     title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'coverImage',  type: 'image',    title: 'Cover Photo (list page only)', options: { hotspot: true } }),
    defineField({ name: 'content',     type: 'markdown', title: 'Content' }),
    defineField({ name: 'tags',        type: 'array',    title: 'Tags', of: [{ type: 'string' }] }),
    defineField({ name: 'views',       type: 'number',   title: 'Views', initialValue: 0 }),
  ],
  orderings: [
    { title: 'Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})