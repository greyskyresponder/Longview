'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle, Shield, Users, Cpu, Home } from 'lucide-react';
import Link from 'next/link';

const capabilityAreas = [
  'Disaster Housing Operations',
  'IMT Augmentation & Staffing',
  'SRT Program Development',
  'Drone / UAS Operations',
  'EOC Management & Staffing',
  'Human Services Programs',
  'Exercise Design & Evaluation',
  'Long-Term Recovery Support',
  'Other',
];

const whyTeam = [
  {
    icon: Shield,
    title: 'Proven Federal Track Record',
    desc: 'LvSG personnel have deployed on FEMA Mission Assignments, state ESF activations, and presidentially declared disaster operations across more than a dozen states.',
  },
  {
    icon: Users,
    title: 'Credentialed Responder Network',
    desc: 'The Grey Sky Responder Registry maintains a bench of vetted, trained, and deployable emergency management professionals ready for rapid activation.',
  },
  {
    icon: Cpu,
    title: 'Specialized Capabilities',
    desc: 'From FAA Part 107 drone operations to FEMA-aligned SRT programs, LvSG brings niche technical capabilities that augment prime contractor capacity.',
  },
  {
    icon: Home,
    title: 'Housing & Recovery Depth',
    desc: 'Deep expertise in disaster housing task forces, CDBG-DR technical assistance, and long-term recovery group facilitation — capabilities in high demand after major disasters.',
  },
];

const focusAreas = [
  {
    title: 'Disaster Housing Operations',
    detail:
      'Hotel/motel reimbursement, transitional housing placement, housing needs assessment, and housing task force management under FEMA IA programs.',
  },
  {
    title: 'IMT Augmentation',
    detail:
      'Experienced ICS personnel available to fill Operations, Planning, Logistics, and Finance sections during Type II and Type III IMT activations.',
  },
  {
    title: 'SRT Program Development',
    detail:
      'Full-lifecycle specialty response team assessment, curriculum development, training delivery, and credentialing program management.',
  },
  {
    title: 'Drone / UAS Operations',
    detail:
      'FAA Part 107 certified operators for damage assessment, situational awareness, search and rescue support, and public safety missions.',
  },
];

export default function TeamingPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_TEAMING_ENDPOINT ||
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
        'https://formspree.io/f/placeholder';
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Partner With Us
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Teaming Opportunities
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            LvSG actively pursues strategic teaming arrangements with firms pursuing federal and
            state emergency management contracts. We bring credentialed personnel, specialized
            capabilities, and proven operational depth.
          </p>
        </div>
      </section>

      {/* Why Team With LvSG */}
      <section className="bg-dark-charcoal px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Value Proposition
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Why Team With LvSG?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyTeam.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border border-operational-steel bg-command-navy/60 p-6"
              >
                <item.icon className="mt-0.5 h-6 w-6 flex-shrink-0 text-signal-gold" />
                <div>
                  <h3 className="mb-2 font-semibold text-clean-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-medium-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Current Opportunities
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Teaming Focus Areas
            </h2>
            <p className="mt-3 text-medium-gray">
              These are the capability areas where LvSG is actively seeking teaming partners or open
              to sub-contractor / prime arrangements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="border border-operational-steel bg-steel-blue/20 p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-signal-gold" />
                  <h3 className="font-semibold text-clean-white">{area.title}</h3>
                </div>
                <p className="pl-6 text-sm leading-relaxed text-medium-gray">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaming Inquiry Form */}
      <section className="bg-dark-charcoal px-4 py-14">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Get In Touch
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Teaming Inquiry
            </h2>
            <p className="mt-3 text-medium-gray">
              Complete the form below and our business development team will respond within two
              business days.
            </p>
          </div>

          {status === 'success' ? (
            <div className="border border-signal-gold/30 bg-steel-blue/30 p-8 text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
                Inquiry Received
              </p>
              <p className="mb-2 text-lg text-clean-white">
                Thank you for reaching out about a teaming opportunity.
              </p>
              <p className="text-sm text-medium-gray">
                Our team will follow up within two business days. For urgent inquiries, call{' '}
                <a href="tel:+18046835780" className="text-signal-gold hover:text-warm-gold-light">
                  (804) 683-5780
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white placeholder:text-medium-gray/50 focus:border-signal-gold focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                  >
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white placeholder:text-medium-gray/50 focus:border-signal-gold focus:outline-none"
                    placeholder="Firm or agency"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white placeholder:text-medium-gray/50 focus:border-signal-gold focus:outline-none"
                    placeholder="you@firm.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="capability"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                  >
                    Capability Area *
                  </label>
                  <select
                    id="capability"
                    name="capability"
                    required
                    className="w-full border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white focus:border-signal-gold focus:outline-none"
                  >
                    <option value="">Select an area</option>
                    {capabilityAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-vertical border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white placeholder:text-medium-gray/50 focus:border-signal-gold focus:outline-none"
                  placeholder="Describe the opportunity, contract vehicle, timeline, or how you envision working together..."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-signal-gold px-10 py-3 text-sm font-semibold tracking-wider text-command-navy transition-colors hover:bg-warm-gold-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-alert-red">
                    Submission failed. Call{' '}
                    <a href="tel:+18046835780" className="underline">
                      (804) 683-5780
                    </a>{' '}
                    directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="border-t border-operational-steel bg-command-navy px-4 py-10 text-center">
        <p className="text-medium-gray">
          Looking for general services?{' '}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-signal-gold hover:text-warm-gold-light"
          >
            Contact LvSG <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </section>
    </main>
  );
}
