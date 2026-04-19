
import { defineField, defineType } from 'sanity'

export const experienceSchema = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'role',        type: 'string',  title: 'Job Title' }),
    defineField({ name: 'company',     type: 'string',  title: 'Company' }),
    defineField({ name: 'description', type: 'text',    title: 'Description' }),
    defineField({ name: 'startDate',   type: 'date',    title: 'Start Date' }),
    defineField({ name: 'endDate',     type: 'date',    title: 'End Date' }),
    defineField({ name: 'current',     type: 'boolean', title: 'Currently Working Here' }),
    defineField({ name: 'order',       type: 'number',  title: 'Display Order' }),
  ],
})