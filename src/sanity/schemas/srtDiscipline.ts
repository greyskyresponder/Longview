import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'srtDiscipline',
  title: 'SRT Discipline',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Discipline Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'abbreviation',
      title: 'Abbreviation',
      type: 'string',
      description: 'Short code (e.g., IMT, USAR, HazMat)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'assessmentPdf',
      title: 'Self-Assessment PDF Path',
      type: 'string',
      description: 'Path to the PDF file (e.g., /documents/srt/imt-assessment.pdf)',
    }),
    defineField({
      name: 'uploadUrl',
      title: 'Upload Portal URL',
      type: 'url',
      description: 'External link for submitting completed assessments',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Coming Soon', value: 'coming-soon' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'orderRank', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'status' },
  },
});
