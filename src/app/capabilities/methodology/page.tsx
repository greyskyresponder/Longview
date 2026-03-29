import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  ClipboardList,
  MapPin,
  Zap,
  Activity,
  ArrowLeft,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Methodology & Standards',
  description:
    'LvSG operational methodology aligned to NIMS/ICS, EMAP, HSEEP, NRF/NDRF, and CPG 101. Five-phase deployment process for credentialed, scalable disaster response.',
};

const frameworks = [
  {
    abbr: 'NIMS/ICS',
    full: 'National Incident Management System / Incident Command System',
    description:
      'All LvSG personnel are trained to NIMS ICS-100 through ICS-800. Our incident management structure mirrors the ICS organizational chart to integrate seamlessly with any local, state, or federal response.',
    body: 'FEMA / DHS',
  },
  {
    abbr: 'EMAP',
    full: 'Emergency Management Accreditation Program',
    description:
      'Our program development and documentation practices follow EMAP standards, supporting partner agencies seeking or maintaining accreditation by delivering services consistent with national benchmarks.',
    body: 'EMAP Foundation',
  },
  {
    abbr: 'HSEEP',
    full: 'Homeland Security Exercise and Evaluation Program',
    description:
      'Exercises designed, facilitated, and after-action reviewed by LvSG use the HSEEP framework — ensuring capability gaps are identified, documented, and addressed in improvement plans.',
    body: 'FEMA / DHS',
  },
  {
    abbr: 'NRF / NDRF',
    full: 'National Response Framework / National Disaster Recovery Framework',
    description:
      'LvSG operations are scoped and executed against ESF and RSF structures defined in the NRF and NDRF. Housing, public assistance, and community planning work aligns to RSF 3 and RSF 6.',
    body: 'FEMA',
  },
  {
    abbr: 'CPG 101',
    full: 'Comprehensive Preparedness Guide 101',
    description:
      'Planning products developed with or for partner agencies follow the CPG 101 six-step planning process, producing plans that are actionable, agency-reviewed, and exercise-validated.',
    body: 'FEMA / DHS',
  },
];

const phases = [
  {
    number: '01',
    name: 'Assessment',
    icon: ClipboardList,
    duration: '0–72 Hours',
    description:
      'Rapid situational awareness. Jurisdiction needs assessment, preliminary mission scoping, resource identification, and personnel identification from the Grey Sky Responder Society.',
    tasks: [
      'Incident brief from jurisdiction POC',
      'Mission scope and role clarification',
      'Personnel pull from GSRS roster',
      'Logistics pre-deployment checklist',
      'MOA / task order execution',
    ],
  },
  {
    number: '02',
    name: 'Planning',
    icon: MapPin,
    duration: '24–96 Hours',
    description:
      'Operational planning in coordination with jurisdiction. Incident Action Plan development, resource logistics, personnel travel coordination through Grey Sky Travel, and pre-deployment briefing.',
    tasks: [
      'Incident Action Plan (IAP) draft',
      'Personnel deployment orders issued',
      'Travel logistics via Grey Sky Travel',
      'Equipment and supply manifest',
      'Pre-deployment personnel briefing',
    ],
  },
  {
    number: '03',
    name: 'Deployment',
    icon: Zap,
    duration: 'Operational Day 1',
    description:
      'Personnel arrive and assume assigned roles within the incident structure. Check-in, credentialing, facility orientation, and shift briefing with outgoing personnel.',
    tasks: [
      'Personnel credentialing and check-in',
      'ICS position briefing and assignment',
      'Facility and systems orientation',
      'Communications protocol establishment',
      'Initial situation report (SITREP) submission',
    ],
  },
  {
    number: '04',
    name: 'Operations',
    icon: Activity,
    duration: 'Mission Duration',
    description:
      'Sustained mission execution with daily Incident Action Plans, shift operational periods, weekly performance reviews, and reporting to jurisdiction leadership and LvSG Program Management.',
    tasks: [
      'Daily IAP and briefing cycle',
      'Shift rotation and personnel welfare',
      'Situation reporting cadence',
      'Jurisdiction integration and coordination',
      'Performance monitoring and QA',
    ],
  },
  {
    number: '05',
    name: 'Demobilization',
    icon: ArrowLeft,
    duration: 'Mission Close',
    description:
      'Structured close-out including knowledge transfer, personnel demobilization, after-action review, and final reporting to jurisdiction. Documentation retained in the National Disaster Database.',
    tasks: [
      'Transition briefing to jurisdiction staff',
      'Demobilization orders and travel',
      'After-action review (AAR) facilitation',
      'Final mission report to jurisdiction',
      'Record submission to National Disaster Database',
    ],
  },
];

const complianceBadges = [
  'NIMS Compliant',
  'ICS-Based Structure',
  'HSEEP-Aligned Exercises',
  'CPG 101 Planning',
  'NRF/NDRF Scoped',
  'EMAP Standards',
  'SAM.gov Registered',
  'Background-Screened Personnel',
  '72-Hour Activation Capable',
  'IAP-Driven Operations',
  'SITREP Reporting',
  'AAR Documentation',
];

export default function MethodologyPage() {
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
            Capabilities
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Methodology &amp; Standards
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Our operations are not ad hoc. Every deployment follows a structured, nationally
            recognized framework — because lives and taxpayer dollars depend on it.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Framework Alignment */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              National Framework Alignment
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              We Operate Where Government Operates
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-dark-charcoal">
              LvSG aligns every program, plan, and deployment to the federal frameworks that govern
              emergency management in the United States — so our work integrates seamlessly with any
              government partner.
            </p>
          </div>

          <div className="space-y-6">
            {frameworks.map((fw) => (
              <div
                key={fw.abbr}
                className="flex flex-col gap-4 rounded-md border border-light-gray p-6 sm:flex-row sm:items-start"
              >
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded border border-signal-gold/30 bg-command-navy">
                    <span className="font-mono text-xs font-bold text-signal-gold">{fw.abbr}</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-base font-bold text-command-navy">
                      {fw.full}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                      {fw.body}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">
                    {fw.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase Methodology */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              LvSG Deployment Methodology
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              Five-Phase Deployment Process
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-dark-charcoal">
              From initial alert to final after-action report — every LvSG deployment follows this
              structured five-phase model to ensure mission clarity, personnel safety, and
              accountable outcomes.
            </p>
          </div>

          <div className="space-y-0">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={phase.number} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-signal-gold bg-clean-white">
                      <Icon className="h-5 w-5 text-signal-gold" />
                    </div>
                    {i < phases.length - 1 && <div className="w-px flex-1 bg-signal-gold/30" />}
                  </div>
                  {/* Content */}
                  <div className="mb-0 flex-1 rounded-md border border-light-gray bg-clean-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                          Phase {phase.number}
                        </span>
                        <h3 className="font-display mt-0.5 text-lg font-bold text-command-navy">
                          {phase.name}
                        </h3>
                      </div>
                      <span className="rounded border border-signal-gold/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-signal-gold">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-dark-charcoal">
                      {phase.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {phase.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex items-start gap-2 text-xs text-dark-charcoal"
                        >
                          <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-gold" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="bg-steel-blue px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
            Compliance &amp; Standards Badges
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {complianceBadges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-signal-gold/30 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-clean-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-signal-gold/40 bg-steel-blue/30">
            <Shield className="h-6 w-6 text-signal-gold" />
          </div>
          <h2 className="font-display text-2xl font-bold text-clean-white">
            See Our Methodology in Action
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            Review past performance records or request a capability statement that details our
            operational approach for your specific mission requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/government/past-performance"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              PAST PERFORMANCE <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/government/capability-statements"
              className="border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              CAPABILITY STATEMENTS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
