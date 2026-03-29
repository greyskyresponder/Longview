import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'White Papers | Longview Solutions Group',
  description:
    'Policy analysis, lessons learned, and industry research from Longview subject matter experts.',
};

const papers = [
  {
    id: '1',
    title: 'The Disaster Housing Gap: Capacity vs. Need in 2025',
    author: 'Longview Solutions Group',
    date: '2024-11-20',
    category: 'Policy Analysis',
    readTime: '12 min',
    abstract:
      'An operational assessment of the growing gap between disaster housing need and available capacity. Examines FEMA DHAP trends, manufactured housing unit availability, and the emerging role of private-sector housing mission managers.',
  },
  {
    id: '2',
    title: 'Building a Deployable Workforce: The Grey Sky Model',
    author: 'Roy E. Dunn, CEMO',
    date: '2024-09-10',
    category: 'Workforce Development',
    readTime: '8 min',
    abstract:
      'How credentialed responder networks are changing the speed and quality of emergency management staffing. Compares traditional hiring models with rapid-deployment credentialing approaches.',
  },
  {
    id: '3',
    title: 'SRT Capability Assessment: A Framework for Standardized Readiness',
    author: 'Longview Solutions Group',
    date: '2024-06-15',
    category: 'Standards & Assessment',
    readTime: '15 min',
    abstract:
      'The development methodology behind the Florida SRT Capability Assessment Program. Covers assessment design principles, scoring frameworks, and lessons from the first statewide deployment.',
  },
];

export default function WhitePapersPage() {
  return (
    <>
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Intel
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            White Papers
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Policy analysis, lessons learned, and operational research from Longview subject matter
            experts. Written by practitioners, not consultants.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="group rounded-md border border-light-gray bg-clean-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <FileText className="h-5 w-5 text-signal-gold" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                  {paper.category}
                </span>
                <span className="ml-auto flex items-center gap-3 font-mono text-[10px] text-medium-gray">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {paper.readTime}
                  </span>
                  <span>
                    {new Date(paper.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </span>
              </div>
              <h3 className="font-display text-xl font-bold leading-snug text-command-navy">
                {paper.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-medium-gray">{paper.author}</p>
              <p className="mt-3 text-sm leading-relaxed text-dark-charcoal">{paper.abstract}</p>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal-gold group-hover:text-command-navy">
                  <Download className="h-4 w-4" />
                  Download PDF
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-command-navy px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-xl font-bold text-clean-white">
            Have a Research Topic?
          </h2>
          <p className="mt-3 text-sm text-light-gray">
            LvSG publishes operational research based on field experience. If you have a topic that
            would benefit the emergency management community, we want to hear from you.
          </p>
          <Link
            href="/contact/consultation"
            className="mt-6 inline-block rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
          >
            SUGGEST A TOPIC
          </Link>
        </div>
      </section>
    </>
  );
}
