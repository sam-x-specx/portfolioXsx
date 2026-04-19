
import { defineField, defineType } from 'sanity'

// ── Profile ───────────────────────────────────────────────────
export const profileSchema = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({ name: 'name',    type: 'string', title: 'Name' }),
    defineField({ name: 'role',    type: 'string', title: 'Role / Tagline' }),
    defineField({ name: 'bio',     type: 'text',   title: 'Bio' }),
    defineField({ name: 'github',  type: 'url',    title: 'GitHub URL' }),
    defineField({ name: 'twitter', type: 'url',    title: 'Twitter URL' }),
    defineField({ name: 'footerTagline', type: 'string', title: 'Footer Middle Text' }),
  ],
})