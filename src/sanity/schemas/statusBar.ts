import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'statusBar',
  title: 'Operational Status Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'activeMissions',
      title: 'Active Missions',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'statesServed',
      title: 'States Served',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'respondersCredentialed',
      title: 'Responders Credentialed',
      type: 'string',
      description: 'e.g. "150+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'yearsOfOperations',
      title: 'Years of Operations',
      type: 'string',
      description: 'e.g. "20+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'watchStatus',
      title: 'Watch Status',
      type: 'string',
      options: {
        list: [
          { title: 'Quiet', value: 'QUIET' },
          { title: 'Watch', value: 'WATCH' },
          { title: 'Warning', value: 'WARNING' },
          { title: 'Active', value: 'ACTIVE' },
        ],
      },
      initialValue: 'QUIET',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Operational Status Bar' };
    },
  },
});
