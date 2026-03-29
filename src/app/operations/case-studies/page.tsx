import type { Metadata } from 'next';
import { MapPin, Calendar, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { caseStudiesQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Case Studies | LvSG Operations',
  description:
    'After-action reviews and mission summaries from LvSG disaster response deployments — from hurricane housing operations to long-term recovery management.',
};

interface SanityCaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  disaster: string;
  jurisdiction: string;
  summary: string;
  publishedAt: string;
}

const fallbackStudies = [
  {
    _id: 'helene-housing',
    label: 'Hurricane Helene Housing Operations',
    situation:
      "Following Hurricane Helene's September 2024 landfall, LvSG deployed an Incident Management Team to support the Florida Division of Emergency Management's mass housing operations across 15 counties. The mission required standing up distributed hotel and motel reimbursement programs, coordinating with voluntary agencies on transitional shelter, and managing applicant case files for thousands of displaced households.",
    outcome:
      'Over 90 days of sustained operations, LvSG supported placement of more than 4,200 displaced households into transitional housing accommodations while coordinating directly with FEMA Individual Assistance and state partners to accelerate case resolution.',
    metrics: [
      { label: 'Households Supported', value: '4,200+' },
      { label: 'Counties Covered', value: '15' },
      { label: 'Operational Days', value: '90+' },
      { label: 'Agencies Coordinated', value: '12' },
    ],
    disaster: 'Hurricane / Tropical Storm',
    jurisdiction: 'State of Florida',
    published: '2025-01-15',
    slug: 'hurricane-helene-housing-operations',
  },
  {
    _id: 'milton-imt',
    label: 'Hurricane Milton IA IMT Deployment',
    situation:
      "With Milton making landfall in October 2024 — just weeks after Helene — LvSG rapidly transitioned personnel to support the Florida SERT's Individual Assistance IMT deployment. The team provided Operations Section staffing, ESF-6 coordination, and resource tracking across the Central Florida impact zone as the state managed overlapping disaster declarations simultaneously.",
    outcome:
      'LvSG IMT personnel maintained continuous 24-hour operations coverage for 45 days, supporting situational awareness, mission assignment tracking, and inter-jurisdictional coordination during one of the most complex multi-event responses in Florida SERT history.',
    metrics: [
      { label: 'IMT Personnel Deployed', value: '18' },
      { label: 'Operational Periods', value: '90' },
      { label: 'Mission Assignments Tracked', value: '200+' },
      { label: 'ESFs Supported', value: '6' },
    ],
    disaster: 'Hurricane / Category 3',
    jurisdiction: 'State of Florida',
    published: '2025-02-10',
    slug: 'hurricane-milton-ia-imt-deployment',
  },
  {
    _id: 'wky-tornado',
    label: 'Western KY Tornado Long-Term Recovery',
    situation:
      'The December 2021 Western Kentucky tornado outbreak caused catastrophic damage across eight counties, destroying more than 1,100 homes and displacing thousands of residents. LvSG was engaged to support long-term recovery group coordination, CDBG-DR technical assistance, and housing needs assessment for the affected region over an 18-month recovery arc.',
    outcome:
      'LvSG supported the Western Kentucky Long-Term Recovery Group in mobilizing over $40M in CDBG-DR funds, establishing a coordinated case management system, and delivering housing reconstruction support to more than 800 qualified households before program closeout.',
    metrics: [
      { label: 'CDBG-DR Funds Coordinated', value: '$40M+' },
      { label: 'Households Assisted', value: '800+' },
      { label: 'Recovery Months Supported', value: '18' },
      { label: 'Counties Covered', value: '8' },
    ],
    disaster: 'Tornado Outbreak',
    jurisdiction: 'Western Kentucky',
    published: '2023-06-01',
    slug: 'western-ky-tornado-long-term-recovery',
  },
];

export default async function CaseStudiesPage() {
  const sanityCaseStudies = await sanityFetch<SanityCaseStudy[]>(caseStudiesQuery);
  const hasSanityData = sanityCaseStudies && sanityCaseStudies.length > 0;

  return (
    <main>
      {/* Hero */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Mission Record
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Case Studies
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Documented mission outcomes from LvSG disaster response operations — presented in
            AAR/SMEAC format to support transparency, accountability, and knowledge transfer.
          </p>
        </div>
      </section>

      {/* Format Key */}
      <section className="border-b border-operational-steel bg-dark-charcoal px-4 py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {['Situation', 'Mission', 'Execution', 'Admin / Logistics', 'Command'].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <span className="text-operational-steel">·</span>}
              <span className="font-mono text-xs uppercase tracking-widest text-medium-gray">
                {item}
              </span>
            </div>
          ))}
          <span className="font-mono text-xs text-signal-gold/60 md:ml-4">
            — SMEAC Field Brief Format
          </span>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-5xl space-y-10">
          {hasSanityData
            ? sanityCaseStudies.map((study) => (
                <article
                  key={study._id}
                  className="border border-operational-steel bg-steel-blue/10"
                >
                  <div className="border-b border-operational-steel bg-steel-blue/20 px-6 py-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-signal-gold">
                          {study.disaster}
                        </p>
                        <h2 className="mt-1 font-display text-xl font-bold text-clean-white">
                          {study.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-medium-gray">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono text-xs">
                          {new Date(study.publishedAt).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-medium-gray">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="text-sm">{study.jurisdiction}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-medium-gray">{study.summary}</p>
                    <div className="mt-6">
                      <Link
                        href={`/operations/case-studies/${study.slug?.current}`}
                        className="inline-flex items-center gap-2 border border-signal-gold px-5 py-2 font-mono text-xs uppercase tracking-wider text-signal-gold transition-colors hover:bg-signal-gold hover:text-command-navy"
                      >
                        Read Full Study
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            : fallbackStudies.map((study) => (
                <article
                  key={study._id}
                  className="border border-operational-steel bg-steel-blue/10"
                >
                  {/* Card Header */}
                  <div className="border-b border-operational-steel bg-steel-blue/20 px-6 py-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-signal-gold">
                          {study.disaster}
                        </p>
                        <h2 className="mt-1 font-display text-xl font-bold text-clean-white">
                          {study.label}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-medium-gray">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono text-xs">
                          {new Date(study.published).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-medium-gray">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="text-sm">{study.jurisdiction}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Situation */}
                    <div className="mb-5">
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-signal-gold">
                        Situation
                      </p>
                      <p className="text-sm leading-relaxed text-medium-gray">{study.situation}</p>
                    </div>

                    {/* Outcome */}
                    <div className="mb-6">
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-signal-gold">
                        Outcome
                      </p>
                      <p className="text-sm leading-relaxed text-medium-gray">{study.outcome}</p>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {study.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="border border-operational-steel bg-command-navy/60 p-3 text-center"
                        >
                          <p className="font-display text-xl font-bold text-signal-gold">
                            {m.value}
                          </p>
                          <p className="mt-1 font-mono text-xs leading-tight text-medium-gray">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/operations/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 border border-signal-gold px-5 py-2 font-mono text-xs uppercase tracking-wider text-signal-gold transition-colors hover:bg-signal-gold hover:text-command-navy"
                    >
                      Read Full Study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-dark-charcoal px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <FileText className="mx-auto mb-4 h-8 w-8 text-signal-gold" />
          <h2 className="font-display text-xl font-bold text-clean-white">
            Request a Capability Briefing
          </h2>
          <p className="mt-3 text-sm text-medium-gray">
            Our operations team can deliver a tailored capability briefing based on your
            jurisdiction type, hazard profile, and program requirements.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-semibold text-command-navy transition-colors hover:bg-warm-gold-light"
          >
            Request a Briefing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
