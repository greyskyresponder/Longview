import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership | Longview Solutions Group',
  description:
    'Meet the leaders who bring decades of emergency management and disaster response experience to every mission.',
};

const certifications = [
  'Certified Emergency Manager (CEM)',
  'NIMS / ICS All-Hazards',
  'HSEEP Exercise Design',
  'EMAP Standards',
  'NRF / NDRF / CPG 101',
  'Florida SRT Program',
];

const deploymentHighlights = [
  { disaster: 'Hurricane Katrina', year: '2005', role: 'Response Operations' },
  { disaster: 'Deepwater Horizon', year: '2010', role: 'Multi-Agency Coordination' },
  { disaster: 'Hurricane Harvey', year: '2017', role: 'Housing Operations' },
  { disaster: 'Hurricane Irma', year: '2017', role: 'IMT Deployment' },
  { disaster: 'Hurricane Maria', year: '2017', role: 'Federal Coordination' },
  { disaster: 'Hurricane Michael', year: '2018', role: 'IMT Lead / Housing Ops' },
  { disaster: 'COVID-19 Pandemic', year: '2020', role: 'Emergency Operations' },
  { disaster: 'Western KY Tornadoes', year: '2021', role: 'Long-Term Recovery' },
  { disaster: 'Hurricane Helene', year: '2024', role: 'Housing Ops — IMT Lead' },
  { disaster: 'Hurricane Milton', year: '2024', role: 'IA IMT' },
];

export default function LeadershipPage() {
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
            Leadership
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-gray">
            Led from the front. Every mission, every deployment.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Roy's Profile — Featured Leader */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Photo / Identity Column */}
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-signal-gold/30 bg-steel-blue lg:mx-0">
                <span className="font-display text-5xl font-bold text-clean-white">RED</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-command-navy">Roy E. Dunn</h2>
              <p className="mt-1 font-mono text-sm font-semibold uppercase tracking-wider text-signal-gold">
                Chief Executive &amp; Mission Officer
              </p>
              <p className="mt-1 font-mono text-xs tracking-wide text-medium-gray">CEMO</p>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-command-navy lg:justify-start">
                  <Award className="h-4 w-4 text-signal-gold" />
                  Certifications
                </h3>
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="rounded border border-signal-gold/20 bg-signal-gold/5 px-3 py-1 font-mono text-[10px] tracking-wide text-operational-steel"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-2">
              <div className="space-y-5 text-base leading-relaxed text-dark-charcoal">
                <p>
                  Roy E. Dunn has spent more than two decades building disaster response capability
                  for governments and communities across the United States. His career began where
                  emergency management gets real&mdash;in the field, during active disasters,
                  managing operations that had no playbook.
                </p>
                <p>
                  From Hurricane Katrina in 2005 through Hurricanes Helene and Milton in 2024, Roy
                  has led incident management teams, directed emergency operations centers, and
                  managed large-scale housing operations for state and local governments. His
                  experience spans the full spectrum of emergency management: response, recovery,
                  mitigation, and preparedness.
                </p>
                <p>
                  Roy founded Longview Solutions Group on a simple conviction: the emergency
                  management industry needed operators, not just consultants. He built LvSG to be
                  the kind of organization he wished existed when he was on the government side of
                  the table&mdash;a partner that shows up within 72 hours, deploys credentialed
                  teams, and sustains the mission until the job is done.
                </p>
                <p>
                  Under his leadership, LvSG has deployed to more than 50 disaster operations across
                  12 states, credentialed over 150 responders through the Grey Sky Responder
                  Society, and built a reputation as the team that governments call when they need
                  operational capability, not PowerPoint presentations.
                </p>
                <p>
                  Roy&apos;s approach to emergency management is rooted in faith, driven by valor,
                  and guided by a commitment to the communities LvSG serves. He believes that every
                  jurisdiction deserves expert crisis leadership&mdash;and he has spent his career
                  making that belief operational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment History */}
      <section className="bg-light-gray px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">
            DEPLOYMENT HISTORY
          </h2>
          <p className="mt-2 text-center text-base text-dark-charcoal">
            Key operational deployments spanning two decades.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {deploymentHighlights.map((d) => (
              <div
                key={`${d.disaster}-${d.year}`}
                className="flex items-center gap-4 rounded-md border border-light-gray bg-clean-white p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-command-navy">
                  <span className="font-mono text-xs font-bold text-signal-gold">{d.year}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-command-navy">{d.disaster}</h3>
                  <p className="font-mono text-[10px] tracking-wide text-medium-gray">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Interested in speaking engagements or mission briefings?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              SCHEDULE A BRIEFING <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/media"
              className="rounded border border-clean-white/30 px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:border-clean-white/60"
            >
              MEDIA INQUIRIES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
