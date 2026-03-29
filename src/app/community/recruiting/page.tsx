import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  CheckCircle,
  Users,
  Award,
  ChevronRight,
  Zap,
  BadgeCheck,
  Target,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers & Recruiting',
  description:
    'Join LvSG and the Grey Sky Responder Society. We are looking for ICS-qualified emergency management professionals ready to deploy when communities need it most.',
};

const whatWeLookFor = [
  {
    title: 'ICS Experience',
    description:
      'ICS-100 minimum; ICS-300 or 400 preferred. We need people who know the system and can operate within it under pressure — not just people who have taken the online course.',
  },
  {
    title: 'Field Deployment History',
    description:
      'At least one verifiable field deployment or major incident assignment. EOC experience counts. If you have been in a JFO, a state EOC, or managing housing operations during a declared disaster, we want to talk.',
  },
  {
    title: 'Emergency Management Credentials',
    description:
      'Professional certifications such as CEM, CFM, CHPP, or state-level emergency management credentials signal the kind of commitment we look for. Not required, but valued.',
  },
  {
    title: 'Physical and Mental Readiness',
    description:
      'Deployments are demanding. You will work 12-hour shifts in austere environments, manage complex logistics, and maintain professionalism under sustained stress. We need people who have done it before and can do it again.',
  },
];

const focusAreas = [
  {
    icon: Users,
    title: 'IMT Leads',
    description:
      'Experienced Incident Management Team leaders for Type 1–3 incidents. Finance, Logistics, Operations, and Planning Section chiefs. Command staff with major incident experience.',
    urgency: 'High Need',
  },
  {
    icon: Target,
    title: 'EOC Managers',
    description:
      'Emergency Operations Center directors and section leads capable of managing multi-agency coordination in county, state, or JFO settings. Long-term and short-term assignments.',
    urgency: 'High Need',
  },
  {
    icon: Globe,
    title: 'Housing Specialists',
    description:
      'Direct Housing, TSA, and STEP program specialists. Case managers, inspectors, and program managers with FEMA housing program experience. Individual Assistance technical specialists.',
    urgency: 'Ongoing',
  },
  {
    icon: Shield,
    title: 'SRT Members',
    description:
      'Specialty Response Team members including IMT support, EOC staffing, sUAS operators, and field coordination personnel. Credentialed for Florida SRT assessments.',
    urgency: 'Ongoing',
  },
];

const joinBenefits = [
  'Competitive deployment stipends for all active missions',
  'Covered travel and per diem through Grey Sky Travel',
  'Access to the national GSRS professional network',
  'Verified deployment records for your professional portfolio',
  'Priority call-up for high-profile disaster missions',
  'Professional development and credentialing pathway support',
  'LvSG letters of reference for qualified members',
  'Participation in HSEEP exercises and training events',
];

export default function RecruitingPage() {
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
            Community
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-5xl">
            We Deploy. <span className="text-signal-gold">You Lead.</span>
          </h1>
          <p className="mt-6 text-base text-medium-gray md:text-lg">
            LvSG is not a staffing agency. We are a mission-driven organization that deploys
            credentialed emergency management professionals to communities in crisis. If that
            describes you — we are looking for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/community/grey-sky-responder-society"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              JOIN GSRS <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/consultation"
              className="border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Who We Are Looking For */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Criteria
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">What We Look For</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-dark-charcoal">
              We are not recruiting people who want to get into emergency management. We are
              recruiting people who are already in it — and have the deployments to prove it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whatWeLookFor.map((item, i) => (
              <div
                key={item.title}
                className="rounded-md border border-light-gray bg-light-gray/40 p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-signal-gold bg-command-navy">
                  <span className="font-mono text-xs font-bold text-signal-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-command-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Open Roles
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              Current Focus Areas
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-charcoal">
              These are the roles we most frequently need. If you qualify for any of these, we want
              to hear from you now — not when the next storm makes landfall.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="flex gap-5 overflow-hidden rounded-md border border-light-gray bg-clean-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-signal-gold/40 bg-command-navy">
                    <Icon className="h-5 w-5 text-signal-gold" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-bold text-command-navy">
                        {area.title}
                      </h3>
                      <span
                        className={`font-mono text-[9px] font-semibold uppercase tracking-widest rounded px-2 py-0.5 ${
                          area.urgency === 'High Need'
                            ? 'bg-signal-gold/10 text-signal-gold border border-signal-gold/30'
                            : 'bg-light-gray text-medium-gray border border-medium-gray/30'
                        }`}
                      >
                        {area.urgency}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits of Joining */}
      <section className="bg-steel-blue px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              What You Get
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white">
              Benefits of Joining LvSG &amp; GSRS
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {joinBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded border border-signal-gold/20 bg-command-navy/50 px-5 py-4"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-signal-gold" />
                <span className="text-sm text-light-gray">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Culture Section */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
                Our Culture
              </p>
              <h2 className="font-display text-2xl font-bold text-command-navy">
                This Is Not a Resume Builder. It Is a Mission.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark-charcoal">
                <p>
                  LvSG was built in the field. Our leadership has been in hurricane EOCs, managed
                  housing missions for tens of thousands of displaced residents, and spent months
                  away from family to serve communities that had nothing left.
                </p>
                <p>
                  We recruit people who feel the same pull. People who hear about a major disaster
                  and immediately start thinking about what role they could play — not whether they
                  should watch the news coverage.
                </p>
                <p>
                  If that is you, the Grey Sky Responder Society is your home. We will put you to
                  work, treat you with respect, and build your record of service into something that
                  represents a career worth having.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  label: '72-Hour Activation',
                  sub: 'From call to deployment in under 72 hours',
                },
                {
                  icon: BadgeCheck,
                  label: 'Credentialed Network',
                  sub: 'Every member is verified before deployment',
                },
                {
                  icon: Award,
                  label: 'Documented Record',
                  sub: 'Your missions are recorded and verifiable',
                },
                {
                  icon: Globe,
                  label: 'National Reach',
                  sub: 'Deployed across 12+ states since 2005',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded border border-light-gray p-4"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-signal-gold" />
                    <div>
                      <p className="font-display text-sm font-bold text-command-navy">
                        {item.label}
                      </p>
                      <p className="text-xs text-medium-gray">{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Ready to Join the Society?
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            Applications are reviewed on a rolling basis. The best time to apply is before the next
            deployment — which could come at any time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/community/grey-sky-responder-society"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              JOIN GREY SKY RESPONDER SOCIETY <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto mt-8 h-0.5 w-16 bg-signal-gold" />
        </div>
      </section>
    </>
  );
}
