import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'deployment',
  title: 'Deployment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Deployment Name',
      type: 'string',
      description: 'e.g. "Hurricane Helene Housing Operations"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'disasterType',
      title: 'Disaster Type',
      type: 'string',
      options: {
        list: [
          'Hurricane',
          'Tornado',
          'Flood',
          'Wildfire',
          'Earthquake',
          'Winter Storm',
          'Mass Casualty',
          'HAZMAT',
          'Pandemic',
          'Other',
        ],
      },
    }),
    defineField({
      name: 'jurisdiction',
      title: 'Jurisdiction',
      type: 'string',
      description: 'e.g. "Pinellas County, FL"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'LvSG Role',
      type: 'string',
      description: 'e.g. "Housing Operations IMT Lead"',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave blank if ongoing',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Complete', value: 'complete' },
          { title: 'Standby', value: 'standby' },
        ],
      },
      initialValue: 'complete',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'object',
      fields: [
        defineField({ name: 'lat', title: 'Latitude', type: 'number' }),
        defineField({ name: 'lng', title: 'Longitude', type: 'number' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'jurisdiction',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      const icon = status === 'active' ? '🔴' : status === 'standby' ? '🟡' : '🟢';
      return {
        title: `${icon} ${title}`,
        subtitle,
      };
    },
  },
});
