import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'capabilityStatement',
  title: 'Capability Statement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "General Capability Statement" or "FL DMS Capability Statement"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audience',
      title: 'Target Audience',
      type: 'string',
      options: {
        list: ['General', 'Federal', 'State', 'Local', 'Defense'],
      },
    }),
    defineField({
      name: 'pdf',
      title: 'PDF File',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'date',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'audience' },
  },
});
