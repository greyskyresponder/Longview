import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Users, Database, Plane, Shield, ChevronRight } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { programsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'LvSG operational programs: Grey Sky Responder Society, Grey Sky Drone Program, National Disaster Database, and Grey Sky Travel.',
};

interface Program {
  _id: string;
  name: string;
  slug?: { current: string };
  description?: string;
  teamStructure?: string;
  status: 'active' | 'developing' | 'planned';
}

const fallbackPrograms: Program[] = [
  {
    _id: 'gsrs',
    name: 'Grey Sky Responder Society',
    description:
      'A credentialed network of emergency management professionals available for rapid deployment to declared disasters. Members are ICS-qualified, background-checked, and vetted through a structured intake process.',
    teamStructure:
      'Tiered membership: Associate, Active, and Senior Responder levels with deployment priority aligned to credentialing.',
    status: 'active',
  },
  {
    _id: 'drone',
    name: 'Grey Sky Drone Program',
    description:
      'Small unmanned aircraft systems (sUAS) integration for disaster reconnaissance, damage assessment, and situational awareness. FAA Part 107-certified operators embedded with incident management teams.',
    teamStructure:
      'Certified pilots with Type 1–3 incident integration, ATAK integration, and real-time feed capability.',
    status: 'developing',
  },
  {
    _id: 'ndd',
    name: 'National Disaster Database',
    description:
      'A structured repository of deployment records, personnel certifications, and mission outcomes designed to support after-action analysis, grant documentation, and pre-disaster planning for partner agencies.',
    teamStructure:
      'Managed data architecture, partner agency onboarding, and read-only portal access for authorized jurisdictions.',
    status: 'developing',
  },
  {
    _id: 'gst',
    name: 'Grey Sky Travel',
    description:
      'Managed travel logistics purpose-built for emergency responders. Rapid booking, GSA per diem compliance, mission tracking, and simplified reimbursement for deployed personnel and partner agencies.',
    teamStructure:
      'Dedicated travel coordinator, agency-negotiated rates, 24/7 support line for in-field personnel.',
    status: 'active',
  },
];

const programFeatures: Record<string, string[]> = {
  gsrs: [
    'ICS 100–800 certification requirements',
    'Background screening and credentialing',
    'Deployment call-up system with 72-hour activation',
    'Professional development pathways',
    'Access to GSRS deployment stipends',
    'Peer network across 12+ states',
  ],
  drone: [
    'FAA Part 107 certified operators',
    'sUAS integration with IMT structure',
    'ATAK and CoT feed capability',
    'Damage assessment photo/video documentation',
    'Night and thermal operations capability',
    'Rapid deployment alongside ground teams',
  ],
  ndd: [
    'Structured deployment record schema',
    'Personnel credential and certification tracking',
    'Mission outcome documentation',
    'After-action report support',
    'Grant documentation assistance',
    'Partner agency read-only portal access',
  ],
  gst: [
    'GSA and per diem compliant bookings',
    'Rapid booking for deployments under 24-hour notice',
    'Mission cost tracking by incident',
    'Simplified reimbursement documentation',
    'Dedicated coordinator for active missions',
    'Group travel management for large deployments',
  ],
};

const programIcons: Record<string, React.ElementType> = {
  gsrs: Users,
  drone: Plane,
  ndd: Database,
  gst: Shield,
};

const programCtas: Record<string, { label: string; href: string }> = {
  gsrs: { label: 'APPLY TO GSRS', href: '/contact/consultation' },
  drone: { label: 'LEARN MORE', href: '/contact/consultation' },
  ndd: { label: 'PARTNER WITH US', href: '/contact/consultation' },
  gst: { label: 'REQUEST ACCESS', href: '/contact/consultation' },
};

export default async function ProgramsPage() {
  const sanityData = await sanityFetch<Program[]>(programsQuery);
  const programs = sanityData && sanityData.length > 0 ? sanityData : fallbackPrograms;

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
            LvSG Programs
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Operational programs that extend our capability, build the workforce, and support the
            agencies and communities we serve.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Program Cards */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {programs.map((program, idx) => {
              const key = program._id;
              const features = programFeatures[key] || [];
              const cta = programCtas[key] || {
                label: 'LEARN MORE',
                href: '/contact/consultation',
              };
              const Icon = programIcons[key] || Shield;
              const isActive = program.status === 'active';

              return (
                <div
                  key={program._id}
                  className="flex flex-col overflow-hidden rounded-md border border-light-gray bg-clean-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Card Header */}
                  <div className="border-b border-light-gray bg-command-navy px-6 py-5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-signal-gold/30 bg-steel-blue/40">
                          <Icon className="h-5 w-5 text-signal-gold" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/70">
                            Program {String(idx + 1).padStart(2, '0')}
                          </p>
                          <h2 className="font-display text-lg font-bold text-clean-white">
                            {program.name}
                          </h2>
                        </div>
                      </div>
                      <span
                        className={`mt-1 inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest ${
                          isActive ? 'text-green-400' : 'text-signal-gold'
                        }`}
                      >
                        {isActive ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                        {program.status === 'active'
                          ? 'Active'
                          : program.status === 'developing'
                            ? 'Developing'
                            : 'Planned'}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    {program.description && (
                      <p className="text-sm leading-relaxed text-dark-charcoal">
                        {program.description}
                      </p>
                    )}

                    {features.length > 0 && (
                      <div className="mt-6">
                        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                          Key Features
                        </p>
                        <ul className="space-y-2">
                          {features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-sm text-dark-charcoal"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-gold" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.teamStructure && (
                      <div className="mt-5 rounded border border-light-gray bg-light-gray p-4">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-medium-gray">
                          Structure
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-dark-charcoal">
                          {program.teamStructure}
                        </p>
                      </div>
                    )}

                    <div className="mt-6">
                      <Link
                        href={cta.href}
                        className="inline-flex items-center gap-2 bg-signal-gold px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-command-navy transition-colors hover:bg-warm-gold-light"
                      >
                        {cta.label} <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Want to be part of what we&apos;re building?
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            Whether you&apos;re a credentialed responder, a government partner, or an agency
            exploring capability development — we want to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              REQUEST CONSULTATION
            </Link>
            <Link
              href="/community/grey-sky-responder-society"
              className="border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              JOIN GSRS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
