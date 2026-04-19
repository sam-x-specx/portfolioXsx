
import { defineField, defineType } from 'sanity'

// ── Post (Writing) ────────────────────────────────────────────
export const postSchema = defineType({
  name: 'post',
  title: 'Post (Writing)',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',   title: 'Title' }),
    defineField({ name: 'slug',        type: 'slug',     title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',     title: 'Short Description' }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'featured',    type: 'boolean',  title: 'Show on Home Page' }),
    defineField({
      name: 'body', type: 'array', title: 'Body',
      of: [{ type: 'block' }],
    }),
  ],
})
