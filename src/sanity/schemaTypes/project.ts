
import { defineField, defineType } from 'sanity'
// ── Project ───────────────────────────────────────────────────
// export const projectSchema = defineType({
//   name: 'project',
//   title: 'Project',
//   type: 'document',
//   fields: [
//     defineField({ name: 'title',       type: 'string',  title: 'Title' }),
//     defineField({ name: 'slug',        type: 'slug',    title: 'Slug', options: { source: 'title' } }),
//     defineField({ name: 'description', type: 'text',    title: 'Short Description (card preview)' }),
//     defineField({ name: 'techStack',   type: 'array',   title: 'Tech Stack', of: [{ type: 'string' }] }),
//     defineField({ name: 'liveUrl',     type: 'url',     title: 'Live URL' }),
//     defineField({ name: 'githubUrl',   type: 'url',     title: 'GitHub URL' }),
//     defineField({ name: 'featured',    type: 'boolean', title: 'Show on Home Page' }),
//     defineField({ name: 'image',       type: 'image',   title: 'Cover Image', options: { hotspot: true } }),
//     // Status badge
//     defineField({
//       name: 'status', type: 'string', title: 'Status',
//       options: {
//         list: [
//           { title: '🟢 Active',      value: 'active' },
//           { title: '🔵 Completed',   value: 'completed' },
//           { title: '🟡 In Progress', value: 'in-progress' },
//           { title: '🔴 Archived',    value: 'archived' },
//         ],
//         layout: 'radio',
//       },
//     }),
//     // Metrics row (like Kaggle usability score)
//     defineField({
//       name: 'metrics', type: 'array', title: 'Metrics / Stats',
//       description: 'e.g. { label: "Accuracy", value: "94.2%" }',
//       of: [{
//         type: 'object',
//         fields: [
//           defineField({ name: 'label', type: 'string', title: 'Label' }),
//           defineField({ name: 'value', type: 'string', title: 'Value' }),
//         ],
//         preview: { select: { title: 'label', subtitle: 'value' } },
//       }],
//     }),
//     // Rich notebook-style body
//     defineField({
//       name: 'body', type: 'array', title: 'Notebook Content',
//       of: [
//         // Rich text block with all styles
//         {
//           type: 'block',
//           styles: [
//             { title: 'Normal',    value: 'normal' },
//             { title: 'H1',        value: 'h1' },
//             { title: 'H2',        value: 'h2' },
//             { title: 'H3',        value: 'h3' },
//             { title: 'H4',        value: 'h4' },
//             { title: 'Quote',     value: 'blockquote' },
//           ],
//           lists: [
//             { title: 'Bullet',   value: 'bullet' },
//             { title: 'Numbered', value: 'number' },
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
//                   defineField({ name: 'href',   type: 'url',     title: 'URL' }),
//                   defineField({ name: 'blank',  type: 'boolean', title: 'Open in new tab' }),
//                 ],
//               },
//             ],
//           },
//         },
//         // Code block with language selector
//         defineField({
//           name: 'codeBlock', type: 'object', title: 'Code Block',
//           fields: [
//             defineField({
//               name: 'language', type: 'string', title: 'Language',
//               options: {
//                 list: [
//                   'python','javascript','typescript','bash','json',
//                   'sql','rust','go','cpp','yaml','markdown','r',
//                 ],
//               },
//             }),
//             defineField({ name: 'filename', type: 'string', title: 'Filename (optional)' }),
//             defineField({ name: 'code',     type: 'text',   title: 'Code' }),
//           ],
//           preview: {
//             select: { title: 'filename', subtitle: 'language' },
//             prepare: ({ title, subtitle }) => ({
//               title: title ?? 'Code Block',
//               subtitle: subtitle ?? '',
//             }),
//           },
//         }),
//         // Inline image with caption
//         defineField({
//           name: 'imageBlock', type: 'object', title: 'Image',
//           fields: [
//             defineField({ name: 'image',   type: 'image',  title: 'Image', options: { hotspot: true } }),
//             defineField({ name: 'caption', type: 'string', title: 'Caption' }),
//             defineField({ name: 'alt',     type: 'string', title: 'Alt text' }),
//           ],
//           preview: {
//             select: { title: 'caption', media: 'image' },
//             prepare: ({ title, media }) => ({ title: title ?? 'Image', media }),
//           },
//         }),
//         // Info / warning / tip callout
//         defineField({
//           name: 'callout', type: 'object', title: 'Callout',
//           fields: [
//             defineField({
//               name: 'type', type: 'string', title: 'Type',
//               options: {
//                 list: [
//                   { title: '💡 Tip',     value: 'tip' },
//                   { title: '⚠️ Warning', value: 'warning' },
//                   { title: 'ℹ️ Info',    value: 'info' },
//                   { title: '🚨 Danger',  value: 'danger' },
//                 ],
//                 layout: 'radio',
//               },
//             }),
//             defineField({ name: 'text', type: 'text', title: 'Text' }),
//           ],
//           preview: {
//             select: { title: 'text', subtitle: 'type' },
//           },
//         }),
//         // Data table
//         defineField({
//           name: 'dataTable', type: 'object', title: 'Table',
//           fields: [
//             defineField({ name: 'caption', type: 'string', title: 'Caption' }),
//             defineField({
//               name: 'headers', type: 'array', title: 'Headers',
//               of: [{ type: 'string' }],
//             }),
//             defineField({
//               name: 'rows', type: 'array', title: 'Rows',
//               of: [{
//                 type: 'object',
//                 fields: [
//                   defineField({
//                     name: 'cells', type: 'array', title: 'Cells',
//                     of: [{ type: 'string' }],
//                   }),
//                 ],
//               }],
//             }),
//           ],
//           preview: {
//             select: { title: 'caption' },
//             prepare: ({ title }) => ({ title: title ?? 'Table' }),
//           },
//         }),
//         // Link card (paper / dataset / resource)
//         defineField({
//           name: 'linkCard', type: 'object', title: 'Link Card',
//           fields: [
//             defineField({ name: 'label',       type: 'string', title: 'Label' }),
//             defineField({ name: 'url',         type: 'url',    title: 'URL' }),
//             defineField({ name: 'description', type: 'string', title: 'Short Description' }),
//             defineField({
//               name: 'kind', type: 'string', title: 'Kind',
//               options: {
//                 list: [
//                   { title: '📄 Paper',   value: 'paper' },
//                   { title: '📦 Dataset', value: 'dataset' },
//                   { title: '🔗 Link',    value: 'link' },
//                   { title: '🐙 GitHub',  value: 'github' },
//                 ],
//               },
//             }),
//           ],
//           preview: {
//             select: { title: 'label', subtitle: 'kind' },
//           },
//         }),
//         // Math / equation block
//         defineField({
//           name: 'mathBlock', type: 'object', title: 'Math / Equation',
//           fields: [
//             defineField({ name: 'latex',   type: 'text',   title: 'LaTeX expression' }),
//             defineField({ name: 'caption', type: 'string', title: 'Caption (optional)' }),
//           ],
//           preview: {
//             select: { title: 'latex', subtitle: 'caption' },
//             prepare: ({ title, subtitle }) => ({ title: subtitle ?? 'Equation', subtitle: title }),
//           },
//         }),
//       ],
//     }),
//   ],
// })

// export const projectSchema = defineType({
//   name: 'project',
//   title: 'Project',
//   type: 'document',
//   fields: [
//     defineField({ name: 'title',       type: 'string',  title: 'Title' }),
//     defineField({ name: 'slug',        type: 'slug',    title: 'Slug', options: { source: 'title' } }),
//     defineField({ name: 'description', type: 'text',    title: 'Short Description (card preview)' }),
//     defineField({ name: 'techStack',   type: 'array',   title: 'Tech Stack', of: [{ type: 'string' }] }),
//     defineField({ name: 'liveUrl',     type: 'url',     title: 'Live URL' }),
//     defineField({ name: 'githubUrl',   type: 'url',     title: 'GitHub URL' }),
//     defineField({ name: 'featured',    type: 'boolean', title: 'Show on Home Page' }),
//     defineField({ name: 'image',       type: 'image',   title: 'Cover Image', options: { hotspot: true } }),
//     // Status badge
//     defineField({
//       name: 'status', type: 'string', title: 'Status',
//       options: {
//         list: [
//           { title: '🟢 Active',      value: 'active' },
//           { title: '🔵 Completed',   value: 'completed' },
//           { title: '🟡 In Progress', value: 'in-progress' },
//           { title: '🔴 Archived',    value: 'archived' },
//         ],
//         layout: 'radio',
//       },
//     }),
//     // Metrics row (like Kaggle usability score)
//     defineField({
//       name: 'metrics', type: 'array', title: 'Metrics / Stats',
//       description: 'e.g. { label: "Accuracy", value: "94.2%" }',
//       of: [{
//         type: 'object',
//         fields: [
//           defineField({ name: 'label', type: 'string', title: 'Label' }),
//           defineField({ name: 'value', type: 'string', title: 'Value' }),
//         ],
//         preview: { select: { title: 'label', subtitle: 'value' } },
//       }],
//     }),
//     defineField({ name: 'content', type: 'markdown', title: 'Notebook Content (Markdown)' }),
//   ],
// })



export const projectSchema = defineType({
  name: 'project', title: 'Project', type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',  title: 'Title' }),
    defineField({ name: 'slug',        type: 'slug',    title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',    title: 'Short Description (card preview)' }),
    defineField({ name: 'techStack',   type: 'array',   title: 'Tech Stack', of: [{ type: 'string' }] }),
    defineField({ name: 'liveUrl',     type: 'url',     title: 'Live URL' }),
    defineField({ name: 'githubUrl',   type: 'url',     title: 'GitHub URL' }),
    defineField({ name: 'featured',    type: 'boolean', title: 'Show on Home Page' }),
    defineField({ name: 'image',       type: 'image',   title: 'Cover Image', options: { hotspot: true } }),
    defineField({
      name: 'status', type: 'string', title: 'Status',
      options: {
        list: [
          { title: '🟢 Active',       value: 'active' },
          { title: '🔵 Completed',    value: 'completed' },
          { title: '🟡 In Progress',  value: 'in-progress' },
          { title: '🔴 Archived',     value: 'archived' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'metrics', type: 'array', title: 'Metrics / Stats',
      description: 'e.g. { label: "Accuracy", value: "94.2%" }',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', title: 'Label' }),
          defineField({ name: 'value', type: 'string', title: 'Value' }),
        ],
        preview: { select: { title: 'label', subtitle: 'value' } },
      }],
    }),
    defineField({ name: 'content', type: 'markdown', title: 'Notebook Content (Markdown)' }),
  ],
})
