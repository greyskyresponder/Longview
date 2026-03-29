'use client';

import { useState, type FormEvent } from 'react';
import { Mic, BookOpen, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const speakingTopics = [
  {
    title: 'Disaster Housing Operations',
    desc: 'The operational mechanics of mass housing programs — from hotel/motel reimbursement to manufactured housing deployments — and the policy and logistics challenges that define recovery timelines.',
  },
  {
    title: 'IMT Deployment & Incident Management',
    desc: 'How Incident Management Teams are structured, staffed, and sustained during complex disaster operations, including multi-jurisdictional and overlapping event scenarios.',
  },
  {
    title: 'Responder Credentialing & the Grey Sky Workforce',
    desc: 'Building and sustaining a credentialed disaster workforce — lessons from the SRT program model, registry design, and what emergency managers need to know about workforce readiness.',
  },
  {
    title: 'Emergency Management Workforce Development',
    desc: 'The professional trajectory of emergency management as a discipline, the gap between credentialing and competency, and strategies for building resilient agency capacity.',
  },
  {
    title: 'Long-Term Recovery & CDBG-DR',
    desc: 'Navigating the policy and operational landscape of HUD Community Development Block Grant Disaster Recovery programs from housing needs assessment through program closeout.',
  },
  {
    title: 'Lessons Learned from Major Disasters',
    desc: 'Case-based analysis of operational decisions, coordination failures, and best practices from Helene, Milton, Western Kentucky, and other major activations.',
  },
];

const audienceTypes = [
  'Emergency Management Conferences',
  'State & Local Government Agencies',
  'University / Academic Programs',
  'Corporate Resilience Teams',
  'Nonprofit & VOAD Organizations',
  'Military & DoD Installations',
];

export default function MediaPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_MEDIA_ENDPOINT ||
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
            Press & Speaking
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Media &amp; Speaking
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Press inquiries, speaking engagement requests, and media resources for journalists and
            event organizers covering emergency management, disaster recovery, and homeland
            security.
          </p>
        </div>
      </section>

      {/* Speaker Bio */}
      <section className="bg-dark-charcoal px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Bio block */}
            <div className="md:col-span-2">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
                Principal Speaker
              </p>
              <h2 className="mb-4 font-display text-2xl font-bold text-clean-white">Roy E. Dunn</h2>
              <p className="mb-4 text-sm leading-relaxed text-medium-gray">
                Roy E. Dunn is the founder and managing director of Longview Solutions Group, a
                disaster operations consulting firm supporting federal, state, and local emergency
                management programs. With more than two decades of direct experience in incident
                management, disaster housing, and emergency operations, Roy has served as a senior
                advisor, IMT section chief, and subject matter expert on some of the nation&apos;s
                most complex disaster activations.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-medium-gray">
                His operational background spans hurricanes, tornadoes, floods, and public health
                emergencies — with specific depth in FEMA Individual Assistance programs, housing
                task force operations, and specialty response team program development. Roy holds
                multiple FEMA certifications and has developed credentialing frameworks now in use
                by state emergency management agencies.
              </p>
              <p className="text-sm leading-relaxed text-medium-gray">
                He speaks with the authority of someone who has run the EOC, worked the disaster
                housing floor, and led teams through the fog of real events — making his
                presentations grounded, practical, and directly applicable.
              </p>
            </div>

            {/* Speaker credentials */}
            <div className="space-y-4">
              <div className="border border-operational-steel bg-command-navy/60 p-5">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-signal-gold">
                  Speaking Profile
                </p>
                <ul className="space-y-2">
                  {[
                    '20+ Years Operational Experience',
                    'FEMA Certified IMT Personnel',
                    'SRT Program Subject Matter Expert',
                    'CDBG-DR Technical Advisor',
                    'Disaster Housing Task Force Lead',
                    'Published Operational Frameworks',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-medium-gray">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-operational-steel bg-command-navy/60 p-5">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-signal-gold">
                  Audience Types
                </p>
                <ul className="space-y-1">
                  {audienceTypes.map((aud) => (
                    <li key={aud} className="text-xs text-medium-gray">
                      {aud}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Presentations Available
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Speaking Topics
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {speakingTopics.map((topic) => (
              <div
                key={topic.title}
                className="flex gap-4 border border-operational-steel bg-steel-blue/20 p-5"
              >
                <Mic className="mt-0.5 h-5 w-5 flex-shrink-0 text-signal-gold" />
                <div>
                  <h3 className="mb-1 font-semibold text-clean-white">{topic.title}</h3>
                  <p className="text-sm leading-relaxed text-medium-gray">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="bg-dark-charcoal px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-6 border border-operational-steel bg-command-navy/60 p-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <BookOpen className="h-8 w-8 flex-shrink-0 text-signal-gold" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-signal-gold">
                  Press Resource
                </p>
                <h3 className="mt-0.5 font-display text-lg font-bold text-clean-white">
                  LvSG Media Kit
                </h3>
                <p className="mt-1 text-sm text-medium-gray">
                  Organizational overview, speaker bio, high-resolution photography, and approved
                  brand assets for media and event use.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex flex-shrink-0 items-center gap-2 border border-signal-gold px-6 py-3 font-mono text-xs uppercase tracking-wider text-signal-gold transition-colors hover:bg-signal-gold hover:text-command-navy"
              onClick={() => alert('Media kit coming soon — contact us directly for press assets.')}
            >
              <Download className="h-4 w-4" />
              Download Kit
            </button>
          </div>
        </div>
      </section>

      {/* Media Inquiry Form */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
              Reach Out
            </p>
            <h2 className="font-display text-2xl font-bold text-clean-white md:text-3xl">
              Media &amp; Speaking Inquiry
            </h2>
            <p className="mt-3 text-medium-gray">
              For press inquiries, interview requests, or speaking engagement bookings, complete the
              form below. We respond within one business day.
            </p>
          </div>

          {status === 'success' ? (
            <div className="border border-signal-gold/30 bg-steel-blue/30 p-8 text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
                Inquiry Received
              </p>
              <p className="mb-2 text-lg text-clean-white">
                Thank you for your media or speaking inquiry.
              </p>
              <p className="text-sm text-medium-gray">
                We will respond within one business day. For urgent press deadlines, call{' '}
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
                    Organization / Publication *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white placeholder:text-medium-gray/50 focus:border-signal-gold focus:outline-none"
                    placeholder="Media outlet or event organizer"
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
                    placeholder="you@media.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white focus:border-signal-gold focus:outline-none"
                  >
                    <option value="">Select type</option>
                    <option value="press">Press / Interview</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="podcast">Podcast / Broadcast</option>
                    <option value="mediakit">Media Kit Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-medium-gray"
                >
                  Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-vertical border border-operational-steel bg-steel-blue/20 px-4 py-3 text-sm text-clean-white placeholder:text-medium-gray/50 focus:border-signal-gold focus:outline-none"
                  placeholder="Describe your request, publication, event date, or interview topic..."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-signal-gold px-10 py-3 text-sm font-semibold tracking-wider text-command-navy transition-colors hover:bg-warm-gold-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'SEND INQUIRY'}
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

      {/* Footer nav */}
      <section className="border-t border-operational-steel bg-dark-charcoal px-4 py-10 text-center">
        <p className="text-medium-gray">
          Not a media inquiry?{' '}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-signal-gold hover:text-warm-gold-light"
          >
            Visit the general contact page <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </section>
    </main>
  );
}
