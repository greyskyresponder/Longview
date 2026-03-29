import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, Users, Building2, Globe, ChevronRight, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capability Statements',
  description:
    'Downloadable capability statements for LvSG — tailored for federal, state, and local government procurement audiences.',
};

const audienceCards = [
  {
    audience: 'Federal',
    icon: Globe,
    description:
      'Formatted for federal contracting officers, FEMA program managers, and DoD procurement staff. Includes UEI, CAGE Code, NAICS codes, and federal past performance references.',
    documents: [
      {
        title: 'Federal General Capability Statement',
        status: 'available',
        href: '/documents/capability-statements/lvsg-federal-capability-statement.pdf',
      },
      {
        title: 'FEMA Individual Assistance Capability Statement',
        status: 'request',
        href: null,
      },
    ],
  },
  {
    audience: 'State',
    icon: Building2,
    description:
      'Designed for state emergency management directors, procurement officers, and agency heads evaluating LvSG for state term contract use or direct procurement.',
    documents: [
      {
        title: 'State General Capability Statement',
        status: 'available',
        href: '/documents/capability-statements/lvsg-state-capability-statement.pdf',
      },
      {
        title: 'Florida DMS Contract Reference Sheet',
        status: 'available',
        href: '/documents/capability-statements/lvsg-florida-dms-reference.pdf',
      },
    ],
  },
  {
    audience: 'Local',
    icon: Users,
    description:
      'Designed for county emergency managers, city officials, and local government procurement teams evaluating LvSG for immediate deployment support or pre-positioned contracts.',
    documents: [
      {
        title: 'Local Government Capability Statement',
        status: 'available',
        href: '/documents/capability-statements/lvsg-local-capability-statement.pdf',
      },
      {
        title: 'Housing Operations One-Pager',
        status: 'available',
        href: '/documents/capability-statements/lvsg-housing-operations-one-pager.pdf',
      },
    ],
  },
];

const coreCapabilities = [
  'Incident Management Team (IMT) Staffing',
  'Individual Assistance Program Management',
  'Emergency Operations Center (EOC) Management',
  'Disaster Housing Operations',
  'CDBG-DR Program Support',
  'Long-Term Community Recovery',
  'Exercise Design and Facilitation (HSEEP)',
  'Emergency Planning (CPG 101)',
  'Mass Care Operations',
  'Specialty Response Team Support',
  'Situational Awareness & Reporting',
  'Managed Responder Travel (Grey Sky Travel)',
];

export default function CapabilityStatementsPage() {
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
            Government
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Capability Statements
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Procurement-ready documentation of LvSG&apos;s core competencies, contract vehicles, and
            past performance. Formatted for federal, state, and local audiences.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* What Is a Capability Statement */}
      <section className="border-b border-light-gray bg-clean-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
                About This Document
              </p>
              <h2 className="font-display text-xl font-bold text-command-navy">
                What Is a Capability Statement?
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-dark-charcoal">
                <p>
                  A capability statement is a concise, procurement-formatted document that
                  summarizes a contractor&apos;s core competencies, differentiators, past
                  performance, and procurement identifiers (UEI, CAGE Code, NAICS codes).
                </p>
                <p>
                  Government contracting officers and program managers use capability statements to
                  quickly evaluate whether a vendor is qualified for a given requirement. Submitting
                  one proactively — at a conference, in response to a Sources Sought, or during a
                  capabilities briefing — is standard practice in government procurement.
                </p>
                <p>
                  LvSG maintains capability statements tailored to different audiences. If the
                  standard documents do not fit your specific requirement, we will prepare a
                  mission-specific version on request.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md border border-signal-gold/20 bg-light-gray/40 p-8 text-center">
              <Shield className="mb-4 h-10 w-10 text-signal-gold" />
              <p className="font-mono text-sm font-semibold text-command-navy">
                Need a Custom Capability Statement?
              </p>
              <p className="mt-2 text-xs text-dark-charcoal">
                We can prepare a mission-specific capability statement tailored to your
                solicitation, disaster type, or program area. Typical turnaround: 48 hours.
              </p>
              <Link
                href="/contact/consultation"
                className="mt-5 inline-flex items-center gap-2 bg-signal-gold px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
              >
                REQUEST CUSTOM STATEMENT <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* General Capability Statement */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              General Documents
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              General Capability Statement
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-charcoal">
              A general capability statement suitable for most initial procurement contacts.
              Contains core competencies, differentiators, procurement identifiers, and summary past
              performance.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-light-gray bg-clean-white shadow-sm">
            <div className="border-b border-signal-gold/20 bg-command-navy px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-signal-gold/30 bg-steel-blue/40">
                  <FileText className="h-5 w-5 text-signal-gold" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/70">
                    Document
                  </p>
                  <h3 className="font-display text-lg font-bold text-clean-white">
                    LvSG General Capability Statement
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                    Format
                  </p>
                  <p className="mt-1 text-sm text-dark-charcoal">PDF, 2 pages</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                    Last Updated
                  </p>
                  <p className="mt-1 text-sm text-dark-charcoal">Q1 2026</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                    Audience
                  </p>
                  <p className="mt-1 text-sm text-dark-charcoal">All government levels</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/documents/capability-statements/lvsg-general-capability-statement.pdf"
                  className="inline-flex items-center gap-2 bg-signal-gold px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
                >
                  <Download className="h-3.5 w-3.5" />
                  DOWNLOAD PDF
                </a>
                <Link
                  href="/contact/consultation"
                  className="inline-flex items-center gap-2 border border-signal-gold/40 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-signal-gold transition-colors hover:border-signal-gold hover:bg-signal-gold/5"
                >
                  REQUEST CUSTOM VERSION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Audience */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Tailored Documents
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              Statements by Audience
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-charcoal">
              Each audience has different procurement language, formatting expectations, and
              evaluation criteria. We maintain separate statements for each.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.audience}
                  className="flex flex-col overflow-hidden rounded-md border border-light-gray shadow-sm"
                >
                  <div className="border-b border-signal-gold/20 bg-command-navy px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-signal-gold" />
                      <h3 className="font-display text-base font-bold text-clean-white">
                        {card.audience}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-relaxed text-dark-charcoal">{card.description}</p>
                    <div className="mt-5 space-y-3">
                      {card.documents.map((doc) => (
                        <div
                          key={doc.title}
                          className="flex items-center justify-between rounded border border-light-gray bg-light-gray/40 px-4 py-3"
                        >
                          <span className="text-xs text-dark-charcoal">{doc.title}</span>
                          {doc.status === 'available' && doc.href ? (
                            <a
                              href={doc.href}
                              className="ml-3 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider text-signal-gold transition-colors hover:text-warm-gold-light"
                            >
                              <Download className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            <Link
                              href="/contact/consultation"
                              className="ml-3 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider text-medium-gray transition-colors hover:text-signal-gold"
                            >
                              Request
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities Summary */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              At a Glance
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">Core Capabilities</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-charcoal">
              The following capabilities are documented in all LvSG capability statements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-3 rounded border border-light-gray bg-clean-white px-4 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-gold" />
                <span className="text-sm text-dark-charcoal">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Need a Mission-Specific Capability Statement?
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            If you have a Sources Sought, an IDIQ opportunity, or a specific disaster mission in
            mind — contact us and we will prepare a tailored capability statement within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              REQUEST CONSULTATION <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/government/contract-vehicles"
              className="border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              CONTRACT VEHICLES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
