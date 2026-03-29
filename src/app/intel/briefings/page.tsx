import type { Metadata } from 'next';
import { ArrowRight, Calendar, Tag, Radio } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Operational Briefings | LvSG Intel',
  description:
    'LvSG publishes periodic operational briefings on disaster response doctrine, housing programs, workforce development, and emerging field practices.',
};

const categories = [
  'All',
  'Housing Operations',
  'IMT & Incident Command',
  'Workforce',
  'Policy & Doctrine',
  'Field Notes',
];

const briefings = [
  {
    id: 'briefing-01',
    title: "Housing Task Force Operations After Helene and Milton: What Worked, What Didn't",
    category: 'Housing Operations',
    date: '2025-03-01',
    excerpt:
      "Florida's back-to-back hurricane season in 2024 stress-tested housing task force structures in ways that will reshape state emergency management doctrine for years. This briefing documents the operational friction points, coordination gaps, and emerging best practices from 90+ days of sustained mass housing response.",
    readTime: '8 min read',
    tags: ['Florida', 'FEMA IA', 'Housing', 'After Action'],
  },
  {
    id: 'briefing-02',
    title:
      'The Credentialing Gap: Why Certification Does Not Equal Competency in Emergency Management',
    category: 'Workforce',
    date: '2025-01-18',
    excerpt:
      'The emergency management profession has accumulated a certification infrastructure that too often functions as a checkbox exercise. This briefing examines the structural disconnect between credentialing systems and operational performance — and what it means for surge workforce readiness.',
    readTime: '6 min read',
    tags: ['Workforce', 'Credentialing', 'Grey Sky Responders'],
  },
  {
    id: 'briefing-03',
    title: "CDBG-DR Program Closeout: Lessons from Western Kentucky's Long-Term Recovery",
    category: 'Policy & Doctrine',
    date: '2024-10-05',
    excerpt:
      'Eighteen months of CDBG-DR program support in Western Kentucky generated a body of operational lessons that have direct applicability to post-Helene recovery programs now beginning in Florida, North Carolina, and Georgia. This briefing synthesizes those lessons into actionable guidance for recovery managers.',
    readTime: '10 min read',
    tags: ['CDBG-DR', 'Kentucky', 'Long-Term Recovery', 'HUD'],
  },
];

export default function BriefingsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            LvSG Intel
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Operational Briefings
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            LvSG publishes periodic operational briefings on disaster response doctrine, housing
            programs, workforce development, and field practices. Written by practitioners, for
            practitioners.
          </p>
        </div>
      </section>

      {/* About Briefings */}
      <section className="border-b border-operational-steel bg-dark-charcoal px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Radio className="h-6 w-6 text-signal-gold" />
            <p className="font-mono text-xs uppercase tracking-widest text-signal-gold">
              Publication Standard
            </p>
          </div>
          <p className="text-sm text-medium-gray">
            Briefings are grounded in direct operational experience, not academic abstraction. Each
            briefing documents what was observed in the field, what doctrine says, and where the gap
            lies — formatted for rapid consumption by emergency managers with limited time.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only — static) */}
      <section className="bg-command-navy px-4 pt-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  i === 0
                    ? 'border-signal-gold bg-signal-gold text-command-navy'
                    : 'border-operational-steel text-medium-gray hover:border-signal-gold/50 hover:text-clean-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Briefing Cards */}
      <section className="bg-command-navy px-4 py-10">
        <div className="mx-auto max-w-5xl space-y-6">
          {briefings.map((briefing) => (
            <article
              key={briefing.id}
              className="border border-operational-steel bg-steel-blue/10 p-6 transition-colors hover:border-signal-gold/40"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="border border-signal-gold/40 bg-steel-blue/30 px-3 py-1 font-mono text-xs text-signal-gold">
                    {briefing.category}
                  </span>
                  <span className="font-mono text-xs text-medium-gray">{briefing.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-medium-gray">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="font-mono text-xs">
                    {new Date(briefing.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              <h2 className="mb-3 font-display text-lg font-bold leading-snug text-clean-white md:text-xl">
                {briefing.title}
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-medium-gray">{briefing.excerpt}</p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-3.5 w-3.5 text-medium-gray" />
                  {briefing.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-medium-gray/70">
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/intel/briefings/${briefing.id}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-signal-gold transition-colors hover:text-warm-gold-light"
                >
                  Read Briefing
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe / More */}
      <section className="bg-dark-charcoal px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Stay Current
          </p>
          <h2 className="font-display text-xl font-bold text-clean-white">
            Briefings Delivered to Your Inbox
          </h2>
          <p className="mt-3 text-sm text-medium-gray">
            New briefings are published when there is something worth saying — typically following
            major activations, policy changes, or field observations that warrant documentation. No
            noise. Operational signal only.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-semibold text-command-navy transition-colors hover:bg-warm-gold-light"
          >
            Request Briefing Updates
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
