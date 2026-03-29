import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Globe,
  ChevronRight,
  ClipboardList,
  BadgeCheck,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Grey Sky Responder Society',
  description:
    'A credentialed network of emergency management professionals available for rapid deployment. Join the Grey Sky Responder Society and deploy when your community needs you most.',
};

const qualifications = [
  'ICS-100 through ICS-300 (minimum); ICS-400 preferred for leadership roles',
  'At least one verifiable disaster deployment or emergency management field assignment',
  'Background check clearance (required for all members)',
  'Valid government or private sector emergency management credentials',
  'Active physical fitness and ability to work in field conditions',
  'Availability for 14–30 day deployment rotations',
];

const benefits = [
  {
    icon: Zap,
    title: 'Priority Deployment Opportunities',
    description:
      'GSRS members are the first call when LvSG receives a deployment mission. You will be notified of opportunities matched to your qualifications and availability.',
  },
  {
    icon: TrendingUp,
    title: 'Professional Development',
    description:
      'Access to training resources, exercise participation, and pathways to advance from Associate to Active to Senior Responder status.',
  },
  {
    icon: Globe,
    title: 'National Network',
    description:
      'Connect with credentialed emergency management professionals across 12+ states who share your commitment to serving communities in crisis.',
  },
  {
    icon: Award,
    title: 'Deployment Stipends',
    description:
      'Active GSRS members deployed on LvSG missions receive competitive daily stipends, covered travel, and per diem through Grey Sky Travel.',
  },
  {
    icon: BadgeCheck,
    title: 'Credentialing Support',
    description:
      'LvSG staff will help you identify credentialing gaps and connect you with courses and exercises to advance your qualifications.',
  },
  {
    icon: Users,
    title: 'Mission Continuity',
    description:
      'Be part of sustained operations that make a real difference — not one-day volunteer events, but weeks-long missions that rebuild communities.',
  },
];

const membershipTiers = [
  {
    tier: 'Associate',
    description:
      'New to GSRS. Application submitted, background check complete, initial credentialing review underway. Not yet deployment-eligible.',
    requirements: ['Application approved', 'Background check cleared', 'ICS-100 confirmed'],
    badge: 'bg-light-gray text-dark-charcoal border-medium-gray/30',
  },
  {
    tier: 'Active',
    description:
      'Credentialed and deployment-eligible. Receives deployment call-ups matched to qualifications. Full GSRS member benefits.',
    requirements: [
      'ICS-100 through 300 minimum',
      'One verified deployment',
      'Background check cleared',
      'Availability confirmed',
    ],
    badge: 'bg-signal-gold/10 text-signal-gold border-signal-gold/40',
  },
  {
    tier: 'Senior Responder',
    description:
      'Experienced responders in leadership roles. Eligible for IMT lead and section chief positions. Priority placement on all missions.',
    requirements: [
      'ICS-400 or equivalent',
      '3+ verified deployments',
      'Leadership role experience',
      'LvSG endorsement',
    ],
    badge: 'bg-command-navy text-clean-white border-command-navy',
  },
];

const joinSteps = [
  {
    step: '01',
    title: 'Submit Your Application',
    description:
      'Complete the consultation form and indicate you are applying for GSRS membership. Include your deployment history, certifications, and availability.',
    icon: ClipboardList,
  },
  {
    step: '02',
    title: 'Credentialing Review',
    description:
      'LvSG staff will review your application, verify credentials, conduct a background check, and confirm your ICS training records.',
    icon: BadgeCheck,
  },
  {
    step: '03',
    title: 'Onboarding & Activation',
    description:
      'Approved members are onboarded into the GSRS roster, issued member credentials, and become eligible for deployment call-ups.',
    icon: Zap,
  },
];

export default function GsrsPage() {
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
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-signal-gold/40 bg-steel-blue/40">
            <Shield className="h-7 w-7 text-signal-gold" />
          </div>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Community
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Grey Sky Responder Society
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            A credentialed network of emergency management professionals who deploy when communities
            need them most. Not volunteers — vetted, qualified, mission-ready responders.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              APPLY NOW <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* What is GSRS */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
                About the Society
              </p>
              <h2 className="font-display text-2xl font-bold text-command-navy">
                What Is the Grey Sky Responder Society?
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark-charcoal">
                <p>
                  The Grey Sky Responder Society is LvSG&apos;s credentialed deployment network — a
                  roster of experienced emergency management professionals who are background
                  checked, ICS-trained, and ready to deploy within 72 hours of a mission activation.
                </p>
                <p>
                  GSRS was launched in 2023 to address a consistent gap in disaster response: the
                  shortage of pre-vetted, qualified personnel who can be trusted to walk into an
                  EOC, a housing operations center, or a mass care shelter and immediately perform
                  at a professional level.
                </p>
                <p>
                  Unlike staffing agencies or temp-to-hire models, GSRS members are known
                  quantities. Their credentials are verified. Their deployments are documented.
                  Their performance is tracked. When we make a deployment call-up, we know exactly
                  who is coming and what they can do.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { value: '150+', label: 'Credentialed Members' },
                { value: '12', label: 'States Represented' },
                { value: '72 hrs', label: 'Activation Timeline' },
                { value: '2023', label: 'Formally Launched' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded border border-light-gray p-4"
                >
                  <span className="font-mono text-sm text-dark-charcoal">{stat.label}</span>
                  <span className="font-mono text-xl font-bold text-signal-gold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Eligibility
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">Who Qualifies</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-charcoal">
              GSRS is not open to the general public. We are a credentialed network for experienced
              practitioners who have already done the work.
            </p>
          </div>
          <div className="rounded-md border border-light-gray bg-clean-white p-8">
            <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-signal-gold">
              Minimum Requirements
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-dark-charcoal">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-signal-gold" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Membership
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">Membership Tiers</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {membershipTiers.map((tier) => (
              <div
                key={tier.tier}
                className="flex flex-col overflow-hidden rounded-md border border-light-gray shadow-sm"
              >
                <div className="border-b border-light-gray bg-command-navy px-5 py-4">
                  <span
                    className={`inline-block rounded border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${tier.badge}`}
                  >
                    {tier.tier}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-dark-charcoal">{tier.description}</p>
                  <div className="mt-4">
                    <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                      Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {tier.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs text-dark-charcoal">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-gold" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-steel-blue px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Member Benefits
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white">
              Why Join the Society
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-md border border-signal-gold/20 bg-command-navy/60 p-6"
                >
                  <Icon className="mb-3 h-6 w-6 text-signal-gold" />
                  <h3 className="font-display text-sm font-bold text-clean-white">{b.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-light-gray">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Application Process
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">How to Join</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-charcoal">
              The application process is straightforward. We move quickly for qualified candidates.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {joinSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="flex flex-col items-center rounded-md border border-light-gray bg-clean-white p-6 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-signal-gold bg-command-navy">
                    <Icon className="h-6 w-6 text-signal-gold" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                    Step {step.step}
                  </span>
                  <h3 className="font-display mt-1 text-base font-bold text-command-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-dark-charcoal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Ready to Deploy When the Call Comes?
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            If you have the experience, the credentials, and the commitment — we want you in the
            Grey Sky Responder Society.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              APPLY NOW <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/community/recruiting"
              className="border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              CAREERS
            </Link>
          </div>
          <div className="mx-auto mt-8 h-0.5 w-16 bg-signal-gold" />
        </div>
      </section>
    </>
  );
}
