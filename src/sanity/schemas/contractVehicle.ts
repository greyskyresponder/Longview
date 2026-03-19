import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contractVehicle',
  title: 'Contract Vehicle',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Contract Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contractNumber',
      title: 'Contract Number',
      type: 'string',
    }),
    defineField({
      name: 'agency',
      title: 'Issuing Agency',
      type: 'string',
    }),
    defineField({
      name: 'scope',
      title: 'Scope of Work',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'periodOfPerformance',
      title: 'Period of Performance',
      type: 'string',
      description: 'e.g. "2024-2029"',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Pending', value: 'pending' },
          { title: 'Expired', value: 'expired' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'agency' },
  },
});
