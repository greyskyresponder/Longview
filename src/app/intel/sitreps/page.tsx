import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Situation Reports | Longview Solutions Group',
  description:
    'Current situational awareness and operational updates from active LvSG missions and disaster response operations.',
};

const sitreps = [
  {
    id: '1',
    title: 'SITREP #12: Hurricane Helene Housing Operations — Florida',
    classification: 'Operational Update',
    date: '2025-03-15',
    status: 'active',
    summary:
      'Housing mission operations continue across multiple Florida counties. Unit placement rates ahead of projections. Coordinating with FEMA Region IV on closeout timeline for initial wave.',
  },
  {
    id: '2',
    title: 'SITREP #8: Hurricane Milton IA Operations — Florida',
    classification: 'Operational Update',
    date: '2025-03-10',
    status: 'active',
    summary:
      'Individual Assistance mission support ongoing. IMT transition planning underway for Phase III operations. Applicant processing metrics tracking above regional averages.',
  },
  {
    id: '3',
    title: 'SITREP Final: Western KY Tornado Recovery — Kentucky',
    classification: 'After-Action',
    date: '2024-01-15',
    status: 'complete',
    summary:
      'Long-term recovery operations concluded. Final community rebuild metrics documented. Lessons learned brief submitted to Commonwealth of Kentucky emergency management.',
  },
];

export default function SitrepsPage() {
  return (
    <>
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Intel
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Situation Reports
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Operational updates from active missions and completed deployments. SITREPs provide
            current situational awareness for stakeholders and decision-makers.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          {sitreps.map((sr) => {
            const isActive = sr.status === 'active';
            return (
              <div
                key={sr.id}
                className={`rounded-md border p-6 ${
                  isActive
                    ? 'border-signal-gold/30 bg-clean-white'
                    : 'border-light-gray bg-light-gray/50'
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  {isActive ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-green-600">
                      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                      Active
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-medium-gray">
                      Complete
                    </span>
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-signal-gold">
                    {sr.classification}
                  </span>
                  <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-medium-gray">
                    <Clock className="h-3 w-3" />
                    {new Date(sr.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-command-navy">{sr.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">{sr.summary}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-light-gray bg-light-gray px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <AlertTriangle className="mx-auto mb-3 h-6 w-6 text-signal-gold" />
          <p className="text-sm text-dark-charcoal">
            Detailed SITREPs are distributed to authorized stakeholders and mission partners.
            Contact our operations team for access to full operational reporting.
          </p>
          <Link
            href="/contact/consultation"
            className="mt-4 inline-block text-sm font-semibold text-signal-gold hover:text-command-navy"
          >
            Request Access
          </Link>
        </div>
      </section>
    </>
  );
}
