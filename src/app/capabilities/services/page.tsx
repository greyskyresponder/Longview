import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Radio,
  Home as HomeIcon,
  Users,
  Heart,
  Plane,
  Target,
  ClipboardList,
  Lock,
  ChevronRight,
} from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { servicesQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Services Overview | Longview Solutions Group',
  description:
    'Full-spectrum emergency management services from incident management teams to strategic resilience planning — deployable within 24–72 hours.',
};

interface ServiceData {
  _id: string;
  title: string;
  description: string;
  slug?: { current: string };
  icon?: string;
  esfAlignment?: string;
}

const iconMap: Record<string, React.ElementType> = {
  'Incident Management Teams': Shield,
  'EOC Management': Radio,
  'Disaster Housing Operations': HomeIcon,
  'Specialty Response Teams': Users,
  'Human Services': Heart,
  'Grey Sky Travel': Plane,
  'Strategic Resilience Planning': Target,
  'Exercise Design & Evaluation': ClipboardList,
  'National Security & Expeditionary Ops': Lock,
};

const lifecycleMap: Record<string, string> = {
  'Strategic Resilience Planning': 'Preparedness',
  'Exercise Design & Evaluation': 'Preparedness',
  'Incident Management Teams': 'Response',
  'EOC Management': 'Response',
  'Specialty Response Teams': 'Response',
  'Disaster Housing Operations': 'Recovery',
  'Human Services': 'Recovery',
  'Grey Sky Travel': 'Logistics',
  'National Security & Expeditionary Ops': 'Special Ops',
};

const fallbackServices: ServiceData[] = [
  {
    _id: '1',
    title: 'Incident Management Teams',
    description:
      'Trained, credentialed IMTs deployable within 24-72 hours to any jurisdiction in the nation.',
    esfAlignment: 'ESF-5, ESF-7',
  },
  {
    _id: '2',
    title: 'EOC Management',
    description:
      'Full EOC staffing, activation support, and operational management for state and local governments.',
    esfAlignment: 'ESF-5',
  },
  {
    _id: '3',
    title: 'Disaster Housing Operations',
    description:
      'End-to-end housing mission management from needs assessment through unit placement and closeout.',
    esfAlignment: 'ESF-6, ESF-14',
  },
  {
    _id: '4',
    title: 'Specialty Response Teams',
    description:
      'Scalable, mission-ready SRT units for state and local deployment. Includes Florida SRT CAP operations.',
    esfAlignment: 'ESF-5, ESF-9',
  },
  {
    _id: '5',
    title: 'Human Services',
    description:
      'Disaster case management, individual assistance programs, and community recovery support.',
    esfAlignment: 'ESF-6',
  },
  {
    _id: '6',
    title: 'Grey Sky Travel',
    description:
      'Managed travel and logistics for deployed responders — housing, transport, and per diem coordination.',
    esfAlignment: 'ESF-7',
  },
  {
    _id: '7',
    title: 'Strategic Resilience Planning',
    description:
      'Long-range capability development, COOP planning, and community resilience strategy.',
    esfAlignment: 'ESF-5, ESF-14',
  },
  {
    _id: '8',
    title: 'Exercise Design & Evaluation',
    description:
      'HSEEP-compliant exercises that test real capability, not just check compliance boxes.',
    esfAlignment: 'HSEEP',
  },
  {
    _id: '9',
    title: 'National Security & Expeditionary Ops',
    description:
      'Specialized capability development for defense and intelligence community requirements.',
  },
];

export default async function ServicesPage() {
  const sanityData = await sanityFetch<ServiceData[]>(servicesQuery);
  const services = sanityData && sanityData.length > 0 ? sanityData : fallbackServices;

  const phases = ['Preparedness', 'Response', 'Recovery', 'Logistics', 'Special Ops'];

  return (
    <>
      {/* Header */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Capabilities
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Services Overview
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Full-spectrum emergency management services organized by disaster lifecycle — from
            preparedness planning through long-term recovery.
          </p>
        </div>
      </section>

      {/* Deployment readiness bar */}
      <section className="border-b border-light-gray bg-clean-white px-4 py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 font-mono text-xs tracking-wide text-operational-steel">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            IMTs: 24–72 hour deployment
          </span>
          <span className="text-light-gray">|</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            EOC Staff: 48 hour deployment
          </span>
          <span className="text-light-gray">|</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal-gold" />
            National reach: 50 states
          </span>
        </div>
      </section>

      {/* Services by lifecycle phase */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {phases.map((phase) => {
            const phaseServices = services.filter((s) => lifecycleMap[s.title] === phase);
            if (phaseServices.length === 0) return null;
            return (
              <div key={phase} className="mb-12 last:mb-0">
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
                    {phase}
                  </span>
                  <div className="h-px flex-1 bg-light-gray" />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {phaseServices.map((svc) => {
                    const Icon = iconMap[svc.title] || Shield;
                    return (
                      <div
                        key={svc._id}
                        className="group rounded-md border border-light-gray bg-clean-white p-6 transition-shadow hover:shadow-md"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <Icon className="h-7 w-7 text-signal-gold transition-colors group-hover:text-command-navy" />
                          {svc.esfAlignment && (
                            <span className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                              {svc.esfAlignment}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-lg font-bold text-command-navy">
                          {svc.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">
                          {svc.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SRT CAP Callout */}
      <section className="border-t border-light-gray bg-light-gray px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <Shield className="mx-auto mb-4 h-8 w-8 text-signal-gold" />
          <h2 className="font-display text-xl font-bold text-command-navy">
            Florida SRT Capability Assessment Program
          </h2>
          <p className="mt-3 text-sm text-dark-charcoal">
            LvSG manages the Florida SRT CAP — assessing specialty response team readiness across 13
            disciplines statewide.
          </p>
          <Link
            href="/capabilities/srt/florida-srt-cap"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-gold hover:text-command-navy"
          >
            View SRT CAP Program <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Need Deployment Support?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-light-gray">
            Whether you need an IMT within 72 hours or a long-range resilience plan, our team is
            ready to brief you on capability and capacity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              REQUEST CONSULTATION
            </Link>
            <Link
              href="tel:+18046835780"
              className="font-mono text-sm tracking-wide text-signal-gold hover:text-warm-gold-light"
            >
              (804) 683-5780
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
