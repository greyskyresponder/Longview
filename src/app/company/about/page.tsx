import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, MapPin, Users, Calendar, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Longview Solutions Group',
  description:
    'Built in the field, not a conference room. LvSG has deployed disaster response capability across America since 2005.',
};

const milestones = [
  {
    year: '2005',
    title: 'Hurricane Katrina',
    description:
      'Founding operations begin during the largest natural disaster in U.S. history. The experience that would shape LvSG\u2019s operational DNA.',
  },
  {
    year: '2008',
    title: 'SWO CONOPS Published',
    description:
      'Severe Weather Operations Concept of Operations formalized. The blueprint for scalable, deployable disaster response teams.',
  },
  {
    year: '2010',
    title: 'Deepwater Horizon',
    description:
      'Oil spill response operations across Gulf Coast communities. Multi-agency coordination at scale.',
  },
  {
    year: '2017',
    title: 'Hurricane Season: Harvey, Irma, Maria',
    description:
      'Triple-hurricane deployment across Texas, Florida, and Puerto Rico. Simultaneous multi-state operations.',
  },
  {
    year: '2018',
    title: 'Hurricane Michael',
    description:
      'Category 5 landfall in the Florida Panhandle. Full IMT deployment and long-term housing mission management.',
  },
  {
    year: '2020',
    title: 'COVID-19 Pandemic Response',
    description:
      'Emergency management operations adapted for pandemic conditions. Mass care, sheltering, and community support at national scale.',
  },
  {
    year: '2021',
    title: 'Western Kentucky Tornadoes',
    description:
      'Multi-year recovery commitment to devastated communities. EOC staffing and long-term community rebuilding.',
  },
  {
    year: '2023',
    title: 'Grey Sky Responder Society Launched',
    description:
      'Credentialed responder network formalized to build a deployable workforce for the next generation of disaster response.',
  },
  {
    year: '2024',
    title: 'Hurricanes Helene & Milton',
    description:
      'Simultaneous housing operations and IA IMT deployments across Florida. 77 personnel in the field.',
  },
];

const stats = [
  { value: '20+', label: 'Years of Operations', icon: Calendar },
  { value: '12', label: 'States Served', icon: MapPin },
  { value: '150+', label: 'Responders Credentialed', icon: Users },
  { value: '50+', label: 'Disaster Deployments', icon: Shield },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-command-navy px-4 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(197,147,58,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,147,58,0.3) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
            Company
          </p>
          <h1 className="font-display text-4xl font-bold text-clean-white lg:text-5xl">
            About Longview Solutions Group
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-gray">
            Built in the field, not a conference room. Since 2005, we&apos;ve deployed disaster
            response capability to the governments and communities that need it most.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Founding Narrative */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-command-navy">Our Story</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-dark-charcoal">
            <p>
              Longview Solutions Group was born in the aftermath of Hurricane Katrina in 2005. While
              the nation watched the worst natural disaster in American history unfold, our founders
              were in the field&mdash;staffing emergency operations centers, coordinating response
              teams, and learning what it actually takes to manage catastrophic incidents.
            </p>
            <p>
              That experience revealed a critical gap: the emergency management industry was built
              around consulting and compliance, not operational deployment. Governments needed
              partners who could show up within 72 hours, staff a full IMT, manage housing
              operations, and sustain the mission for months&mdash;not write a report six weeks
              later.
            </p>
            <p>
              LvSG was built to fill that gap. We formalized our approach with the Severe Weather
              Operations Concept of Operations (SWO CONOPS) in 2008, creating the blueprint for
              scalable, deployable disaster response teams that could integrate seamlessly with
              state and local emergency management structures.
            </p>
            <p>
              Twenty years and dozens of deployments later, our mission hasn&apos;t changed: we
              build, deploy, and sustain disaster response capability for the governments and
              communities that need it most. From hurricane housing operations in Florida to tornado
              recovery in Kentucky, from pandemic response to national security support&mdash;when
              the call comes, we deploy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-steel-blue px-4 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-signal-gold" />
              <span className="font-mono text-3xl font-bold tabular-nums text-clean-white">
                {stat.value}
              </span>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-light-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-light-gray px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">
            OPERATIONAL TIMELINE
          </h2>
          <p className="mt-2 text-center text-base text-dark-charcoal">
            Two decades of deployment. One consistent mission.
          </p>
          <div className="mt-12 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-signal-gold bg-clean-white">
                    <span className="font-mono text-xs font-bold text-command-navy">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-signal-gold/30" />}
                </div>
                {/* Content */}
                <div className="pb-2 pt-1">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-signal-gold">
                    {m.year}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-command-navy">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark-charcoal">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">
            WHAT SETS US APART
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <DifferentiatorCard
              title="We Deploy, Not Consult"
              description="When the call comes, we don't send a proposal — we send a team. Our responders are in the field within 72 hours, running operations, not observing them."
            />
            <DifferentiatorCard
              title="Credentialed Workforce"
              description="Every responder in the Grey Sky network is ICS-qualified, background-checked, and deployment-ready. No temp agencies. No learning on the job."
            />
            <DifferentiatorCard
              title="Government-Ready"
              description="SAM.gov registered, state term contracts, NIMS/ICS/HSEEP compliant. We understand procurement because we've lived on the government side of the table."
            />
            <DifferentiatorCard
              title="Mission Sustainment"
              description="We don't leave when the cameras do. Our teams sustain operations through the long tail of recovery — housing, case management, community rebuilding."
            />
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Ready to discuss your mission requirements?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              REQUEST CONSULTATION <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/government/capability-statements"
              className="rounded border border-clean-white/30 px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:border-clean-white/60"
            >
              DOWNLOAD CAPABILITY STATEMENT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DifferentiatorCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-2 border-signal-gold pl-6">
      <h3 className="font-display text-lg font-bold text-command-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">{description}</p>
    </div>
  );
}
