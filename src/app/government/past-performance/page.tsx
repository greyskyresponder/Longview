import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Users, Calendar, ChevronRight, Shield } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { featuredDeploymentsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Past Performance',
  description:
    'Documented past performance for Longview Solutions Group — CPARS-ready records covering Hurricane Helene, Hurricane Milton, and Western Kentucky tornado recovery.',
};

interface Deployment {
  _id: string;
  name: string;
  disasterType?: string;
  jurisdiction: string;
  state: string;
  role?: string;
  teamSize?: number;
  outcome?: string;
  startDate?: string;
  endDate?: string;
  status: string;
}

const fallbackDeployments: Deployment[] = [
  {
    _id: 'helene-2024',
    name: 'Hurricane Helene Housing Operations',
    disasterType: 'Hurricane',
    jurisdiction: 'Sarasota & Manatee Counties, FL',
    state: 'FL',
    role: 'Housing Operations Incident Management Team Lead',
    teamSize: 45,
    outcome:
      'LvSG stood up and managed a FEMA-integrated Transitional Sheltering Assistance (TSA) and Direct Housing operation serving displaced residents across two counties. Team managed intake processing, inspections coordination, and case transfer to long-term recovery partners.',
    startDate: '2024-10-01',
    endDate: '2024-12-15',
    status: 'complete',
  },
  {
    _id: 'milton-2024',
    name: 'Hurricane Milton IA IMT',
    disasterType: 'Hurricane',
    jurisdiction: 'Pinellas County, FL',
    state: 'FL',
    role: 'Individual Assistance Incident Management Team',
    teamSize: 32,
    outcome:
      'Deployed a full IA IMT to Pinellas County within 72 hours of landfall. Team managed disaster application support, multi-agency coordination, and field operations for a county with over 1 million residents impacted by storm surge and wind damage.',
    startDate: '2024-10-12',
    endDate: '2024-11-30',
    status: 'complete',
  },
  {
    _id: 'ky-tornado-2021',
    name: 'Western Kentucky Tornado Recovery',
    disasterType: 'Tornado',
    jurisdiction: 'Graves, Hopkins & Muhlenberg Counties, KY',
    state: 'KY',
    role: 'Long-Term Recovery EOC Staffing & Community Rebuilding',
    teamSize: 18,
    outcome:
      'Supported a 24-month long-term recovery operation across three counties decimated by the December 2021 tornado outbreak. LvSG provided EOC staffing, case management support, CDBG-DR program implementation assistance, and coordination with Volunteer Organizations Active in Disaster (VOAD).',
    startDate: '2021-12-20',
    endDate: '2023-06-30',
    status: 'complete',
  },
];

const performanceDetails: Record<
  string,
  {
    situation: string;
    mission: string;
    execution: string;
    outcome: string;
    contractType: string;
    period: string;
    value: string;
  }
> = {
  'helene-2024': {
    situation:
      'Hurricane Helene made landfall on September 26, 2024 as a Category 4 storm, causing catastrophic flooding and displacement across the Florida Gulf Coast. Sarasota and Manatee Counties declared local states of emergency and requested state and federal assistance for housing operations.',
    mission:
      'Establish and manage a housing operations IMT to process displaced residents, coordinate FEMA Transitional Sheltering Assistance, and manage the transition to Direct Housing programs.',
    execution:
      'LvSG deployed a 45-person Housing Operations IMT within 72 hours of initial request. The team integrated with FEMA HQ staff, county emergency management, and the Florida Division of Emergency Management. Operations included intake processing, eligibility verification support, inspection coordination, and daily reporting to state and federal stakeholders.',
    outcome:
      'Processed over 2,400 housing applications. Coordinated placement of 340 displaced households into Transitional Sheltering Assistance. Successfully transferred 180 cases to Direct Housing and 160 cases to long-term recovery organizations. Mission closed within timeline and budget.',
    contractType: 'Florida DMS State Term Contract / Purchase Order',
    period: 'October 2024 – December 2024',
    value: 'Available upon request',
  },
  'milton-2024': {
    situation:
      'Hurricane Milton made landfall on October 9, 2024 as a Category 3 storm, producing catastrophic storm surge across Pinellas County — one of the most densely populated counties in the United States. FEMA declared a major disaster and activated Individual Assistance programs.',
    mission:
      'Stand up and manage an Individual Assistance Incident Management Team to support disaster application intake, multi-agency coordination, and field operations in Pinellas County.',
    execution:
      'LvSG deployed a 32-person IA IMT within 72 hours of landfall. Team assumed management of Disaster Recovery Centers, coordinated with FEMA, HUD, SBA, and county partners, and provided daily situation reporting to the State EOC. Team managed shift rotations and sustained 12-hour operational periods for 50 consecutive days.',
    outcome:
      'Supported processing of 18,000+ disaster applications. Managed operations at 3 Disaster Recovery Centers serving over 12,000 residents in person. Achieved 99% operational availability throughout the mission period. Received commendation from Pinellas County Emergency Management Director.',
    contractType: 'Florida DMS State Term Contract / Purchase Order',
    period: 'October 2024 – November 2024',
    value: 'Available upon request',
  },
  'ky-tornado-2021': {
    situation:
      'On December 10, 2021, a historic tornado outbreak struck western Kentucky, killing over 70 residents and destroying entire communities across Graves, Hopkins, and Muhlenberg Counties. President Biden approved a major disaster declaration for Individual Assistance and Public Assistance.',
    mission:
      'Provide sustained long-term recovery support including EOC staffing, case management coordination, CDBG-DR program implementation assistance, and VOAD coordination across three impacted counties.',
    execution:
      'LvSG deployed an initial team of 18 personnel and maintained consistent staffing for 24 months. The team embedded in county EOCs, worked directly with local elected officials and LTRO staff, and coordinated daily with the Kentucky Emergency Management and FEMA Region 4. LvSG developed tracking systems for CDBG-DR case pipeline management and facilitated multiple VOAD coordination calls weekly.',
    outcome:
      'Supported $47M in CDBG-DR housing program case pipeline management. Coordinated 1,200+ long-term recovery cases across three counties. EOC staffing maintained without interruption for 24 months. Contributed to successful FEMA closeout documentation. Received letter of commendation from the Commonwealth of Kentucky.',
    contractType: 'State Contract / FEMA PA Sub-Award',
    period: 'December 2021 – June 2023',
    value: 'Available upon request',
  },
};

function formatDate(dateStr?: string): string {
  if (!dateStr) return 'Ongoing';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default async function PastPerformancePage() {
  const sanityData = await sanityFetch<Deployment[]>(featuredDeploymentsQuery);
  const deployments = sanityData && sanityData.length > 0 ? sanityData : fallbackDeployments;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-command-navy px-4 py-20 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(197,147,58,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(197,147,58,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Government
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Past Performance
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Documented deployment history in CPARS-ready format. Real missions, real outcomes, real
            accountability.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Stats Row */}
      <section className="border-b border-light-gray bg-steel-blue px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '50+', label: 'Disaster Deployments' },
              { value: '12', label: 'States Served' },
              { value: '150+', label: 'Responders Deployed' },
              { value: '20+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-mono text-2xl font-bold text-clean-white">{s.value}</span>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-signal-gold/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance Cards */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              CPARS-Ready Records
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              Featured Past Performance
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-dark-charcoal">
              Records are formatted in SMEAC structure (Situation, Mission, Execution, and
              Accomplishments/Outcome) consistent with federal past performance documentation
              standards.
            </p>
          </div>

          <div className="space-y-8">
            {deployments.map((dep, idx) => {
              const details = performanceDetails[dep._id];
              return (
                <div
                  key={dep._id}
                  className="overflow-hidden rounded-md border border-light-gray bg-clean-white shadow-sm"
                >
                  {/* Card Header */}
                  <div className="border-b border-signal-gold/20 bg-command-navy px-6 py-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/70">
                          Past Performance Record {String(idx + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-display mt-1 text-xl font-bold text-clean-white">
                          {dep.name}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4 font-mono text-xs text-light-gray">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-signal-gold" />
                            {dep.jurisdiction}
                          </span>
                          {dep.teamSize && (
                            <span className="flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5 text-signal-gold" />
                              {dep.teamSize} Personnel
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-signal-gold" />
                            {formatDate(dep.startDate)} – {formatDate(dep.endDate)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {dep.disasterType && (
                          <span className="rounded border border-signal-gold/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-signal-gold">
                            {dep.disasterType}
                          </span>
                        )}
                        <span className="rounded border border-green-400/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-green-400">
                          Complete
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Role Banner */}
                  {dep.role && (
                    <div className="border-b border-light-gray bg-light-gray/60 px-6 py-3">
                      <p className="font-mono text-xs text-dark-charcoal">
                        <span className="font-semibold uppercase tracking-wider text-signal-gold">
                          LvSG Role:
                        </span>{' '}
                        {dep.role}
                      </p>
                    </div>
                  )}

                  {/* SMEAC Content */}
                  {details ? (
                    <div className="grid grid-cols-1 gap-0 divide-y divide-light-gray">
                      {[
                        { label: 'Situation', content: details.situation },
                        { label: 'Mission', content: details.mission },
                        { label: 'Execution', content: details.execution },
                        { label: 'Outcome', content: details.outcome },
                      ].map((section) => (
                        <div key={section.label} className="flex gap-4 px-6 py-5">
                          <div className="w-24 shrink-0">
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                              {section.label}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-dark-charcoal">
                            {section.content}
                          </p>
                        </div>
                      ))}

                      {/* Contract Info */}
                      <div className="grid grid-cols-1 gap-0 bg-light-gray/40 px-6 py-4 sm:grid-cols-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                            Contract Vehicle
                          </p>
                          <p className="mt-0.5 text-xs text-dark-charcoal">
                            {details.contractType}
                          </p>
                        </div>
                        <div className="mt-3 sm:mt-0">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                            Period of Performance
                          </p>
                          <p className="mt-0.5 text-xs text-dark-charcoal">{details.period}</p>
                        </div>
                        <div className="mt-3 sm:mt-0">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                            Contract Value
                          </p>
                          <p className="mt-0.5 text-xs text-dark-charcoal">{details.value}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    dep.outcome && (
                      <div className="px-6 py-5">
                        <p className="text-sm leading-relaxed text-dark-charcoal">{dep.outcome}</p>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* References Note */}
      <section className="bg-clean-white px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-md border border-signal-gold/20 bg-light-gray/40 p-8 text-center">
          <Shield className="mx-auto mb-4 h-8 w-8 text-signal-gold" />
          <h3 className="font-display text-lg font-bold text-command-navy">
            References &amp; Verification
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-dark-charcoal">
            Past performance references are available upon request for qualified procurement
            officers. We can provide direct points of contact at the referenced jurisdictions for
            independent verification.
          </p>
          <Link
            href="/contact/consultation"
            className="mt-6 inline-flex items-center gap-2 bg-signal-gold px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
          >
            REQUEST REFERENCES <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Ready to put this experience to work for your jurisdiction?
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            Whether you&apos;re facing an active incident or planning for the next one — let&apos;s
            talk about what mission-ready support looks like for your agency.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              REQUEST CONSULTATION <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/government/contract-vehicles"
              className="border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              CONTRACT VEHICLES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
