import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Building2,
  Globe,
  Hash,
  ShoppingCart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contract Vehicles',
  description:
    'LvSG active contract vehicles: Florida DMS State Term Contract, SAM.gov registration, CAGE Code, and NAICS codes for government procurement.',
};

const naicsCodes = [
  {
    code: '541611',
    description: 'Administrative Management and General Management Consulting Services',
  },
  {
    code: '541612',
    description: 'Human Resources Consulting Services',
  },
  {
    code: '541618',
    description: 'Other Management Consulting Services',
  },
  {
    code: '561210',
    description: 'Facilities Support Services',
  },
  {
    code: '561320',
    description: 'Temporary Help Services',
  },
  {
    code: '923120',
    description: 'Administration of Public Health Programs',
  },
];

const howToOrderSteps = [
  {
    step: '01',
    title: 'Identify Your Contract Pathway',
    description:
      'Florida state and local agencies may use the DMS State Term Contract. Federal agencies and other state agencies may use SAM.gov direct award or competitive procurement.',
  },
  {
    step: '02',
    title: 'Request a Scope of Work Review',
    description:
      'Contact LvSG to describe your mission requirements. We will confirm contract vehicle applicability, scope alignment, and provide a preliminary cost estimate.',
  },
  {
    step: '03',
    title: 'Execute Task Order or Contract',
    description:
      'For State Term Contract orders, issue a Purchase Order referencing the contract number. For federal work, we will coordinate through your contracting officer.',
  },
  {
    step: '04',
    title: 'Mission Activation',
    description:
      'Once the order is executed, LvSG initiates the five-phase deployment methodology with personnel identified, logistics planned, and a mobilization timeline confirmed.',
  },
];

export default function ContractVehiclesPage() {
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
            Contract Vehicles
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Streamlined procurement pathways for government agencies at all levels. LvSG maintains
            active registrations and contract vehicles to make engaging our services fast,
            compliant, and straightforward.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Quick Reference Bar */}
      <section className="border-b border-light-gray bg-steel-blue px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/80">
                UEI
              </p>
              <p className="mt-1 font-mono text-sm font-bold text-clean-white">LVSG123456789</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/80">
                CAGE Code
              </p>
              <p className="mt-1 font-mono text-sm font-bold text-clean-white">9LVG0</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/80">
                Business Size
              </p>
              <p className="mt-1 font-mono text-sm font-bold text-clean-white">Small Business</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal-gold/80">
                SAM.gov Status
              </p>
              <p className="mt-1 flex items-center justify-center gap-1.5 font-mono text-sm font-bold text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Active
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Contract Vehicles */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Active Vehicles
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">
              Procurement Pathways
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* FL DMS State Term Contract */}
            <div className="flex flex-col overflow-hidden rounded-md border border-light-gray shadow-sm">
              <div className="border-b border-signal-gold/20 bg-command-navy px-6 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-signal-gold/30 bg-steel-blue/40">
                  <Building2 className="h-5 w-5 text-signal-gold" />
                </div>
                <h3 className="font-display mt-3 text-base font-bold text-clean-white">
                  Florida DMS State Term Contract
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Active
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-dark-charcoal">
                  LvSG is an approved vendor on the Florida Department of Management Services State
                  Term Contract for emergency management and consulting services. Florida state
                  agencies, counties, and municipalities may use this vehicle for compliant
                  procurement without full competitive bid.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    'No additional RFP required for eligible agencies',
                    'Florida state and local government eligible',
                    'Pre-negotiated pricing structure',
                    'Streamlined Purchase Order process',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-dark-charcoal">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact/consultation"
                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-signal-gold transition-colors hover:text-warm-gold-light"
                  >
                    REQUEST CONTRACT DETAILS <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SAM.gov */}
            <div className="flex flex-col overflow-hidden rounded-md border border-light-gray shadow-sm">
              <div className="border-b border-signal-gold/20 bg-command-navy px-6 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-signal-gold/30 bg-steel-blue/40">
                  <Globe className="h-5 w-5 text-signal-gold" />
                </div>
                <h3 className="font-display mt-3 text-base font-bold text-clean-white">
                  SAM.gov Registration
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Active &amp; Current
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-dark-charcoal">
                  Longview Solutions Group maintains an active, fully current registration in the
                  System for Award Management (SAM.gov) — the federal government&apos;s primary
                  contractor database. Federal agencies and FEMA-funded grantees can verify and
                  engage LvSG directly.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Eligible for federal contract awards',
                    'FEMA grant sub-award eligible',
                    'Annual registration maintained',
                    'Representations & certifications current',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-dark-charcoal">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="https://sam.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-signal-gold transition-colors hover:text-warm-gold-light"
                  >
                    VERIFY ON SAM.GOV <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* CAGE Code */}
            <div className="flex flex-col overflow-hidden rounded-md border border-light-gray shadow-sm">
              <div className="border-b border-signal-gold/20 bg-command-navy px-6 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-signal-gold/30 bg-steel-blue/40">
                  <Hash className="h-5 w-5 text-signal-gold" />
                </div>
                <h3 className="font-display mt-3 text-base font-bold text-clean-white">
                  CAGE Code
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Assigned
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-dark-charcoal">
                  LvSG holds a Commercial and Government Entity (CAGE) Code assigned by the Defense
                  Logistics Agency. The CAGE Code is required for federal contracting, DFARS
                  compliance, and DoD-related procurement activities.
                </p>
                <div className="mt-5 rounded border border-signal-gold/20 bg-light-gray p-4 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                    CAGE Code
                  </p>
                  <p className="font-mono mt-1 text-2xl font-bold tracking-widest text-command-navy">
                    9LVG0
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {[
                    'Required for DoD contracting',
                    'Enables federal database verification',
                    'Supports DFARS compliance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-dark-charcoal">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Procurement Classification
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">NAICS Codes</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-dark-charcoal">
              LvSG is registered under the following North American Industry Classification System
              codes, covering the full range of emergency management, consulting, and staffing
              services we provide.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-light-gray bg-clean-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-light-gray bg-command-navy">
                  <th className="px-6 py-4 text-left font-mono text-[10px] uppercase tracking-widest text-signal-gold">
                    Code
                  </th>
                  <th className="px-6 py-4 text-left font-mono text-[10px] uppercase tracking-widest text-signal-gold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {naicsCodes.map((naics, i) => (
                  <tr
                    key={naics.code}
                    className={`border-b border-light-gray last:border-0 ${
                      i % 2 === 0 ? 'bg-clean-white' : 'bg-light-gray/40'
                    }`}
                  >
                    <td className="px-6 py-4 font-mono text-sm font-bold text-signal-gold">
                      {naics.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-dark-charcoal">{naics.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="bg-clean-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
              Procurement Process
            </p>
            <h2 className="font-display text-2xl font-bold text-command-navy">How to Order</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-dark-charcoal">
              Engaging LvSG through an existing contract vehicle is a four-step process. Our team
              will guide you through every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {howToOrderSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 rounded-md border border-light-gray bg-light-gray/40 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-signal-gold bg-command-navy">
                  <span className="font-mono text-xs font-bold text-signal-gold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-command-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-signal-gold/40 bg-steel-blue/30">
            <ShoppingCart className="h-6 w-6 text-signal-gold" />
          </div>
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Ready to Initiate a Procurement?
          </h2>
          <p className="mt-4 text-base text-medium-gray">
            Contact our team to discuss your mission requirements, confirm contract vehicle
            eligibility, and get a preliminary scope of work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              START THE CONVERSATION <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/government/capability-statements"
              className="inline-flex items-center gap-2 border border-clean-white/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-clean-white transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              <FileText className="h-4 w-4" /> CAPABILITY STATEMENT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
