import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'i5vzfkqt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const documents = [
  // Status Bar (singleton)
  {
    _id: 'statusBar',
    _type: 'statusBar',
    activeMissions: 3,
    statesServed: 12,
    respondersCredentialed: '150+',
    yearsOfOperations: '20+',
    watchStatus: 'QUIET',
  },

  // Deployments
  {
    _id: 'deployment-helene',
    _type: 'deployment',
    name: 'Hurricane Helene',
    disasterType: 'Hurricane',
    jurisdiction: 'State of Florida',
    state: 'FL',
    role: 'Disaster Housing Operations — IMT Lead',
    teamSize: 45,
    outcome: 'Ongoing housing mission operations across multiple Florida counties.',
    startDate: '2024-09-27',
    status: 'active',
    featured: true,
    coordinates: { _type: 'geopoint', lat: 30.4383, lng: -84.2807 },
  },
  {
    _id: 'deployment-milton',
    _type: 'deployment',
    name: 'Hurricane Milton',
    disasterType: 'Hurricane',
    jurisdiction: 'State of Florida',
    state: 'FL',
    role: 'Individual Assistance IMT',
    teamSize: 32,
    outcome: 'Full IA mission support for impacted communities.',
    startDate: '2024-10-09',
    status: 'active',
    featured: true,
    coordinates: { _type: 'geopoint', lat: 27.7676, lng: -82.6403 },
  },
  {
    _id: 'deployment-ky-tornadoes',
    _type: 'deployment',
    name: 'Western KY Tornadoes',
    disasterType: 'Tornado',
    jurisdiction: 'Commonwealth of Kentucky',
    state: 'KY',
    role: 'Long-Term Recovery & EOC Staffing',
    teamSize: 18,
    outcome: 'Multi-year recovery support through community rebuilding and EOC operations.',
    startDate: '2021-12-11',
    endDate: '2023-12-31',
    status: 'complete',
    featured: true,
    coordinates: { _type: 'geopoint', lat: 36.8381, lng: -88.7530 },
  },

  // Services (9)
  {
    _id: 'service-imt',
    _type: 'service',
    title: 'Incident Management Teams',
    slug: { _type: 'slug', current: 'incident-management-teams' },
    description: 'Trained, credentialed IMTs deployable within 24-72 hours to any jurisdiction in the nation.',
    icon: 'shield',
    esfAlignment: 'ESF-5, ESF-7',
    orderRank: 1,
  },
  {
    _id: 'service-eoc',
    _type: 'service',
    title: 'EOC Management',
    slug: { _type: 'slug', current: 'eoc-management' },
    description: 'Full EOC staffing, activation support, and operational management for state and local governments.',
    icon: 'radio',
    esfAlignment: 'ESF-5',
    orderRank: 2,
  },
  {
    _id: 'service-housing',
    _type: 'service',
    title: 'Disaster Housing Operations',
    slug: { _type: 'slug', current: 'disaster-housing-operations' },
    description: 'End-to-end housing mission management from needs assessment through unit placement and closeout.',
    icon: 'home',
    esfAlignment: 'ESF-6, ESF-14',
    orderRank: 3,
  },
  {
    _id: 'service-srt',
    _type: 'service',
    title: 'Specialty Response Teams',
    slug: { _type: 'slug', current: 'specialty-response-teams' },
    description: 'Scalable, mission-ready SRT units for state and local deployment. Includes Florida SRT CAP operations.',
    icon: 'users',
    esfAlignment: 'ESF-5, ESF-9',
    orderRank: 4,
  },
  {
    _id: 'service-human-services',
    _type: 'service',
    title: 'Human Services',
    slug: { _type: 'slug', current: 'human-services' },
    description: 'Disaster case management, individual assistance programs, and community recovery support for impacted populations.',
    icon: 'heart',
    esfAlignment: 'ESF-6',
    orderRank: 5,
  },
  {
    _id: 'service-travel',
    _type: 'service',
    title: 'Grey Sky Travel',
    slug: { _type: 'slug', current: 'grey-sky-travel' },
    description: 'Managed travel and logistics for deployed responders — housing, transport, and per diem coordination at operational tempo.',
    icon: 'plane',
    esfAlignment: 'ESF-7',
    orderRank: 6,
  },
  {
    _id: 'service-resilience',
    _type: 'service',
    title: 'Strategic Resilience Planning',
    slug: { _type: 'slug', current: 'strategic-resilience-planning' },
    description: 'Long-range capability development, COOP planning, and community resilience strategy.',
    icon: 'target',
    esfAlignment: 'ESF-5, ESF-14',
    orderRank: 7,
  },
  {
    _id: 'service-exercise',
    _type: 'service',
    title: 'Exercise Design & Evaluation',
    slug: { _type: 'slug', current: 'exercise-design-evaluation' },
    description: 'HSEEP-compliant exercises that test real capability, not just check compliance boxes.',
    icon: 'clipboard',
    esfAlignment: 'HSEEP',
    orderRank: 8,
  },
  {
    _id: 'service-national-security',
    _type: 'service',
    title: 'National Security & Expeditionary Ops',
    slug: { _type: 'slug', current: 'national-security-expeditionary-ops' },
    description: 'Specialized capability development for defense and intelligence community requirements.',
    icon: 'lock',
    orderRank: 9,
  },

  // Programs (3)
  {
    _id: 'program-gsrs',
    _type: 'program',
    name: 'Grey Sky Responder Society',
    slug: { _type: 'slug', current: 'grey-sky-responder-society' },
    description: 'A credentialed network of field-proven emergency management professionals ready for rapid deployment nationwide.',
    status: 'active',
    orderRank: 1,
  },
  {
    _id: 'program-drone',
    _type: 'program',
    name: 'Grey Sky Drone Program',
    slug: { _type: 'slug', current: 'grey-sky-drone-program' },
    description: 'sUAS capability for damage assessment, situational awareness, and infrastructure inspection during disaster operations.',
    status: 'developing',
    orderRank: 2,
  },
  {
    _id: 'program-ndd',
    _type: 'program',
    name: 'National Disaster Database',
    slug: { _type: 'slug', current: 'national-disaster-database' },
    description: 'Centralized operational intelligence platform for disaster data, deployment history, and lessons learned.',
    status: 'developing',
    orderRank: 3,
  },
];

async function seed() {
  console.log(`Seeding ${documents.length} documents to Sanity...`);

  for (const doc of documents) {
    try {
      const result = await client.createOrReplace(doc);
      console.log(`  ✓ ${result._type}: ${result._id}`);
    } catch (err) {
      console.error(`  ✗ ${doc._type}: ${doc._id} — ${err.message}`);
    }
  }

  console.log('\nDone. Check /studio to verify.');
}

seed();
