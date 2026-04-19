export const contactLink = {
  name: 'contactLink',
  title: 'Contact Link',
  type: 'document',
  fields: [
    {
      name: 'appName',
      title: 'App Name',
      type: 'string',          // e.g. "GitHub", "Twitter", "Email"
      validation: (R: any) => R.required(),
    },
    {
      name: 'handle',
      title: 'Handle / Label',
      type: 'string',          // e.g. "@yourhandle" or "yourname@email.com"
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string',          // one-two line description shown on the card
      validation: (R: any) => R.max(120),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',             // the destination when arrow is clicked
      validation: (R: any) => R.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',          // drag-to-sort workaround; lower = first
    },
  ],
  preview: {
    select: { title: 'appName', subtitle: 'handle' },
  },
}
