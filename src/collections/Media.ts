import type { CollectionConfig } from 'payload'



export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
};


const Blogs: CollectionConfig = {
  slug: 'blogs', // Collection name (used in API endpoints)
  admin: {
    useAsTitle: 'title', // Show 'title' as the main label in the admin panel
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users', // Assuming you have a 'users' collection
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a 'media' collection for image uploads
    },
  ],
};

export default Blogs;
