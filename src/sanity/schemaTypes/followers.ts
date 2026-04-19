// sanity/schemas/followers.js
export default {
  name: 'followers',
  title: 'Followers',
  type: 'document',
  fields: [
    {
      name: 'fakeBoost',
      title: 'Fake Follower Boost',
      type: 'number',
      description: 'Add fake followers on top of real count (e.g. 1000000 → shows 1.0M)',
      initialValue: 0,
    },
    {
      name: 'followers',
      title: 'Followers List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'userId',    title: 'User ID',    type: 'string' },
            { name: 'name',      title: 'Name',       type: 'string' },
            { name: 'email',     title: 'Email',      type: 'string' },
            { name: 'image',     title: 'Image URL',  type: 'url'    },
            { name: 'followedAt',title: 'Followed At',type: 'datetime' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'email', media: 'image' },
          },
        },
      ],
    },
  ],
}