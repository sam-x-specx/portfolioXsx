// schemas/codeblock.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "codeblock",
  title: "Code Block",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "abbreviation",
      title: "Abbreviation (3–4 letters)",
      type: "string",
      description: 'Short label shown on card — e.g. "TSX", "API", "AUTH"',
      validation: (R) => R.required().min(2).max(4),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "Max 8 words · shown on the card preview",
      validation: (R) => R.required().max(60),
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      rows: 20,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "TypeScript", value: "typescript" },
          { title: "JavaScript", value: "javascript" },
          { title: "TSX", value: "tsx" },
          { title: "JSX", value: "jsx" },
          { title: "CSS", value: "css" },
          { title: "SCSS", value: "scss" },
          { title: "Python", value: "python" },
          { title: "Bash", value: "bash" },
          { title: "JSON", value: "json" },
          { title: "Markdown", value: "markdown" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "fileExtension",
      title: "File Extension",
      type: "string",
      description: "e.g. .tsx · .ts · .py · .sh",
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "string",
      description: "e.g. Animation · Auth · Database · UI",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "abbreviation",
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
