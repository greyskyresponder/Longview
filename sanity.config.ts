import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'longview-digital-ops',
  title: 'LvSG Digital Operations',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'i5vzfkqt',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Operations Center')
          .items([
            S.listItem()
              .title('🎯 Operations')
              .child(
                S.list()
                  .title('Operations')
                  .items([
                    S.listItem()
                      .title('Status Bar')
                      .child(S.document().schemaType('statusBar').documentId('statusBar')),
                    S.documentTypeListItem('deployment').title('Deployments'),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('📋 Service Lines')
              .child(
                S.list()
                  .title('Service Lines')
                  .items([
                    S.documentTypeListItem('service').title('Services'),
                    S.documentTypeListItem('caseStudy').title('Case Studies'),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('🏛️ Government')
              .child(
                S.list()
                  .title('Government')
                  .items([
                    S.documentTypeListItem('contractVehicle').title('Contract Vehicles'),
                    S.documentTypeListItem('capabilityStatement').title('Capability Statements'),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('📡 Intel')
              .child(S.documentTypeList('intel').title('Intel Articles')),
            S.listItem()
              .title('🚀 Programs')
              .child(S.documentTypeList('program').title('Programs & Initiatives')),
            S.listItem()
              .title('👥 Leadership')
              .child(S.documentTypeList('leader').title('Leadership Team')),
            S.divider(),
            S.listItem().title('📄 Pages').child(S.documentTypeList('page').title('Site Pages')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
