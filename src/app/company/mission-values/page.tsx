import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mission & Values | Longview Solutions Group',
  description:
    'Faith, valor, and operational excellence \u2014 the seven values that guide every LvSG deployment.',
};

/* Color groups per heraldic tradition:
   Red (Alert Red tint): Valor, Bravery
   White (Clean White tint): Purity, Innocence
   Blue (Steel Blue — current): Vigilance, Perseverance, Justice */
type ValueColor = 'red' | 'white' | 'blue';

const values: {
  name: string;
  definition: string;
  application: string;
  color: ValueColor;
}[] = [
  {
    name: 'Valor',
    color: 'red',
    definition:
      'Strength of mind or spirit that enables a person to encounter danger with firmness.',
    application:
      'We deploy into chaos. Our teams enter disaster zones, manage crisis operations, and sustain missions in environments where most organizations send observers. Valor is not recklessness\u2014it is the trained readiness to act decisively when action matters most.',
  },
  {
    name: 'Bravery',
    color: 'red',
    definition:
      'The quality or state of having or showing mental or moral strength to face danger, fear, or difficulty.',
    application:
      'Bravery at LvSG means telling a client the truth, even when it\u2019s not what they want to hear. It means making hard operational calls under pressure. It means standing up for the right course of action when easier paths exist.',
  },
  {
    name: 'Purity',
    color: 'white',
    definition:
      'Freedom from moral fault or guilt; the quality of being without mixture or adulteration.',
    application:
      'Our operations are clean. Our contracts are transparent. Our motives are singular: serve the mission, protect the community, deliver the outcome. We do not cut corners, hide costs, or dilute our commitment to achieve a margin.',
  },
  {
    name: 'Innocence',
    color: 'white',
    definition: 'Freedom from guilt or sin through being unacquainted with evil.',
    application:
      'We approach every engagement with fresh eyes and no hidden agenda. We serve at the pleasure of the jurisdiction. When the mission is complete, we leave the community stronger than we found it\u2014and take nothing that wasn\u2019t earned.',
  },
  {
    name: 'Vigilance',
    color: 'blue',
    definition: 'The quality or state of being wakeful and alert; alertness to danger.',
    application:
      'Emergency management is not a 9-to-5 profession. Our Watch Office monitors. Our teams prepare. Our systems are always operational. Vigilance means being ready before the call comes, not scrambling after.',
  },
  {
    name: 'Perseverance',
    color: 'blue',
    definition:
      'Continued effort to do or achieve something despite difficulties, failure, or opposition.',
    application:
      'Disasters don\u2019t end when the news cycle moves on. LvSG teams sustain operations through the long tail of recovery\u2014months and years after landfall. We stay until the mission is complete, not until the contract expires.',
  },
  {
    name: 'Justice',
    color: 'blue',
    definition:
      'The maintenance or administration of what is just; the quality of being fair and reasonable.',
    application:
      'Every community deserves expert crisis leadership, regardless of size, wealth, or political visibility. We treat every jurisdiction with the same operational rigor and every survivor with the same dignity.',
  },
];

const colorStyles: Record<
  ValueColor,
  { card: string; badge: string; title: string; def: string; body: string }
> = {
  red: {
    card: 'border-alert-red/30 bg-alert-red/10',
    badge: 'border-alert-red/40 text-alert-red',
    title: 'text-clean-white',
    def: 'text-light-gray/70',
    body: 'text-light-gray',
  },
  white: {
    card: 'border-light-gray/30 bg-clean-white/10',
    badge: 'border-clean-white/40 text-clean-white',
    title: 'text-clean-white',
    def: 'text-light-gray/70',
    body: 'text-light-gray',
  },
  blue: {
    card: 'border-steel-blue bg-steel-blue/40',
    badge: 'border-signal-gold/40 text-signal-gold',
    title: 'text-clean-white',
    def: 'text-medium-gray',
    body: 'text-light-gray',
  },
};

export default function MissionValuesPage() {
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
            Mission &amp; Values
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-gray">
            Grounded in faith. Driven by valor. Guided by the conviction that every community
            deserves expert crisis leadership.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Mission Statement — with lighthouse watermark */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg
            viewBox="0 0 200 400"
            className="h-[500px] w-auto"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="80" y="60" width="40" height="280" rx="2" />
            <rect x="70" y="340" width="60" height="20" rx="2" />
            <rect x="60" y="360" width="80" height="30" rx="3" />
            <polygon points="100,0 60,60 140,60" />
            <circle cx="100" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="100" y1="10" x2="100" y2="0" stroke="currentColor" strokeWidth="3" />
            <line x1="120" y1="20" x2="130" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="80" y1="20" x2="70" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="125" y1="35" x2="135" y2="35" stroke="currentColor" strokeWidth="2" />
            <line x1="75" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-signal-gold">
            Our Mission
          </h2>
          <p className="font-display text-xl italic leading-relaxed text-dark-charcoal lg:text-2xl">
            Longview Solutions Group builds, deploys, and sustains disaster response capability for
            the governments and communities that need it most.
          </p>
          <div className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-dark-charcoal">
            <p>
              We are more than an emergency management provider&mdash;we are your dedicated support
              team in building resilience. Standing by your side, not after the report is written,
              but while the storm is still overhead.
            </p>
          </div>
        </div>
      </section>

      {/* The Lighthouse */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-command-navy">The Lighthouse</h2>
          <p className="mt-4 text-base leading-relaxed text-dark-charcoal">
            The Longview lighthouse is not just a logo&mdash;it is a symbol of what we do. A
            lighthouse stands watch. It warns of danger. It guides those in distress toward safety.
            It does not move. It does not waver. It endures the same storms it helps others survive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-dark-charcoal">
            That is who we are. When the seas get rough and the mission gets hard, Longview is the
            light that stays on.
          </p>
        </div>
      </section>

      {/* Christian Mission Foundation */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-command-navy">
            Faith-Driven Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-charcoal">
            Longview Solutions Group is built on a foundation of Christian faith. We believe that
            serving others in their darkest hours is not just a profession&mdash;it is a calling.
            Our commitment to communities in crisis reflects our belief that every person deserves
            compassion, dignity, and expert leadership when disaster strikes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-dark-charcoal">
            This foundation does not narrow our service&mdash;it deepens it. We serve every
            community, every jurisdiction, and every individual with equal commitment and
            operational excellence.
          </p>
        </div>
      </section>

      {/* Seven Values */}
      <section className="bg-command-navy px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-center text-3xl font-bold text-clean-white">
            THE SEVEN VALUES
          </h2>
          <p className="mt-2 text-center text-base text-medium-gray">
            Inspired by the heraldic traditions of service. Applied to every operation.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const cs = colorStyles[v.color];
              return (
                <div
                  key={v.name}
                  className={`rounded-md border p-6 ${cs.card} ${
                    i === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold ${cs.badge}`}
                    >
                      {i + 1}
                    </span>
                    <h3 className={`font-display text-xl font-bold ${cs.title}`}>{v.name}</h3>
                  </div>
                  <p className={`mb-3 font-mono text-xs italic leading-relaxed ${cs.def}`}>
                    &ldquo;{v.definition}&rdquo;
                  </p>
                  <p className={`text-sm leading-relaxed ${cs.body}`}>{v.application}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-light-gray px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-command-navy">Share our mission?</h2>
          <p className="mt-3 text-base text-dark-charcoal">
            If these values resonate with you, we want to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/community/recruiting"
              className="inline-flex items-center gap-2 rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              EXPLORE CAREERS <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/community/grey-sky-responder-society"
              className="rounded border border-command-navy/30 px-8 py-3 text-sm font-bold tracking-wide text-command-navy transition-colors hover:border-command-navy hover:bg-command-navy/5"
            >
              JOIN GREY SKY RESPONDER SOCIETY
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
