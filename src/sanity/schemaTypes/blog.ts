import { defineField, defineType } from 'sanity'

export const blogSchema = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',   title: 'Title' }),
    defineField({ name: 'slug',        type: 'slug',     title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',     title: 'Short Description' }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({
      name: 'coverImage', type: 'image', title: 'Cover Image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images', type: 'array', title: 'Additional Images',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'content', type: 'markdown', title: 'Caption / Writing' }),
    defineField({ name: 'views',   type: 'number',   title: 'Views', initialValue: 0 }),
  ],
  orderings: [
    { title: 'Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
