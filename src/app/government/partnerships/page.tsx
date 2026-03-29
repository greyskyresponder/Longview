import type { Metadata } from 'next';
import { Globe, FileCheck, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Partnerships | LvSG',
  description:
    'LvSG partners with federal, state, and local government agencies to deliver mission-critical emergency management support across the nation.',
};

const federalPartners = [
  {
    agency: 'FEMA',
    fullName: 'Federal Emergency Management Agency',
    context:
      'LvSG personnel have deployed under FEMA Mission Assignments supporting Individual Assistance, Public Assistance, and Hazard Mitigation programs across multiple presidentially declared disasters.',
  },
  {
    agency: 'HUD',
    fullName: 'U.S. Department of Housing and Urban Development',
    context:
      'Coordination of CDBG-DR disaster housing recovery programs, long-term recovery planning, and housing needs assessments following major disaster declarations.',
  },
  {
    agency: 'DoD',
    fullName: 'Department of Defense',
    context:
      'Support to Defense Support of Civil Authorities (DSCA) operations, installation emergency management planning, and continuity of operations consulting for defense-adjacent facilities.',
  },
];

const stateEngagements = [
  {
    state: 'Florida',
    agencies: 'FL DEM / SERT',
    detail:
      'Hurricane Helene and Milton response — IMT augmentation, housing operations, ESF-6 coordination, and SRT program support statewide.',
  },
  {
    state: 'Kentucky',
    agencies: 'KY KYEM',
    detail:
      'Western Kentucky tornado long-term recovery operations, CDBG-DR technical assistance, and resilience planning for affected communities.',
  },
  {
    state: 'North Carolina',
    agencies: 'NC NCEM',
    detail:
      'Helene response coordination and recovery operations including unmet needs assessment and voluntary agency liaison functions.',
  },
  {
    state: 'Georgia',
    agencies: 'GEMA/HS',
    detail:
      'ESF coordination support, EOC staffing augmentation, and mutual aid facilitation during multi-county disaster events.',
  },
  {
    state: 'Virginia',
    agencies: 'VDEM',
    detail:
      'Exercise design, evaluation support, and preparedness planning engagements for state and regional partners.',
  },
  {
    state: 'Louisiana',
    agencies: 'GOHSEP',
    detail:
      'Post-hurricane recovery technical assistance, housing task force support, and interagency coordination facilitation.',
  },
];

const frameworkBadges = [
  'NIMS Compliant',
  'ICS-Aligned Operations',
  'ESF Framework',
  'NDRF Recovery Support',
  'FEMA CPG 101',
  'NRF Core Capabilities',
  'IAP Development',
  'Unified Command Compatible',
];

const servedStates = [
  'Alabama',
  'Florida',
  'Georgia',
  'Kentucky',
  'Louisiana',
  'Mississippi',
  'North Carolina',
  'South Carolina',
  'Tennessee',
  'Texas',
  'Virginia',
  'West Virginia',
];

export default function PartnershipsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Government Engagement
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Government Partnerships
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            LvSG operates alongside federal, state, and local government agencies to deliver
            mission-ready emergency management support — from activation through long-term recovery.
          </p>
        </div>
      </section>

      {/* Jurisdictions Served Map Callout */}
      <section className="bg-dark-charcoal px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Operational Footprint
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Jurisdictions We&apos;ve Served
            </h2>
            <p className="mt-3 text-medium-gray">
              LvSG has deployed personnel and provided operational support across the following
              states.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {servedStates.map((state) => (
              <span
                key={state}
                className="border border-operational-steel bg-steel-blue/20 px-4 py-2 font-mono text-xs tracking-wider text-clean-white"
              >
                {state}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-signal-gold">12+</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-medium-gray">
                States Served
              </p>
            </div>
            <div className="h-10 w-px bg-operational-steel" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-signal-gold">40+</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-medium-gray">
                Jurisdictions
              </p>
            </div>
            <div className="h-10 w-px bg-operational-steel" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-signal-gold">8</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-medium-gray">
                Federal Agencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Engagement */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Federal Engagement
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Federal Agency Relationships
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {federalPartners.map((partner) => (
              <div
                key={partner.agency}
                className="border border-operational-steel bg-steel-blue/20 p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <Globe className="h-5 w-5 text-signal-gold flex-shrink-0" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-signal-gold">
                      {partner.agency}
                    </p>
                    <p className="text-xs text-medium-gray">{partner.fullName}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-medium-gray">{partner.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Engagement */}
      <section className="bg-dark-charcoal px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              State Partnerships
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              State Emergency Management Engagement
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {stateEngagements.map((eng) => (
              <div
                key={eng.state}
                className="flex gap-4 border border-operational-steel bg-command-navy/60 p-5"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-signal-gold" />
                <div>
                  <div className="mb-1 flex items-baseline gap-3">
                    <p className="font-semibold text-clean-white">{eng.state}</p>
                    <p className="font-mono text-xs text-signal-gold">{eng.agencies}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-medium-gray">{eng.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Alignment */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Doctrine & Standards
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Framework Alignment
            </h2>
            <p className="mt-3 text-medium-gray">
              All LvSG operations conform to nationally recognized emergency management doctrine.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {frameworkBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 border border-signal-gold/40 bg-steel-blue/20 px-4 py-2"
              >
                <FileCheck className="h-3.5 w-3.5 text-signal-gold" />
                <span className="font-mono text-xs tracking-wider text-clean-white">{badge}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-signal-gold px-4 py-14 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-command-navy">
            Work With Us
          </p>
          <h2 className="font-display text-2xl font-bold text-command-navy md:text-3xl">
            Explore Teaming Opportunities
          </h2>
          <p className="mt-4 text-sm text-command-navy/80">
            LvSG actively pursues teaming arrangements with firms and agencies aligned on
            mission-critical disaster response. If your organization is pursuing federal or state
            disaster contracts, let&apos;s talk.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/teaming"
              className="flex items-center gap-2 bg-command-navy px-8 py-3 font-semibold text-clean-white transition-opacity hover:opacity-90"
            >
              Start a Teaming Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="border border-command-navy px-8 py-3 font-semibold text-command-navy transition-colors hover:bg-command-navy/10"
            >
              General Inquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
