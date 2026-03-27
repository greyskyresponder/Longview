import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Download,
  Upload,
  FileText,
  Clock,
  AlertTriangle,
  Radio,
  Search,
  Crosshair,
  Plane,
  Anchor,
  Dog,
  Flame,
  Users,
  Building2,
} from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { srtDisciplinesQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Florida SRT Capability Assessment Program',
  description:
    'Specialty Response Team self-assessment tools for Florida emergency response disciplines. Sponsored by FDEM.',
  keywords: [
    'SRT',
    'Specialty Response Team',
    'Florida',
    'FDEM',
    'capability assessment',
    'emergency response',
    'self-assessment',
  ],
};

interface SrtDiscipline {
  _id: string;
  name: string;
  abbreviation?: string;
  description?: string;
  assessmentPdf?: string;
  uploadUrl?: string;
  status: string;
}

const fallbackDisciplines: SrtDiscipline[] = [
  {
    _id: 'srt-animal-sar',
    name: 'Animal Search and Rescue Team',
    abbreviation: 'Animal SAR',
    assessmentPdf: '/documents/srt/animal-sar-assessment.pdf',
    status: 'active',
  },
  {
    _id: 'srt-bomb',
    name: 'Bomb Response Team',
    abbreviation: 'Bomb',
    assessmentPdf: '/documents/srt/bomb-response-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-eoc',
    name: 'Emergency Operations Center Support Team',
    abbreviation: 'EOC',
    assessmentPdf: '/documents/srt/eoc-support-assessment.pdf',
    status: 'active',
  },
  {
    _id: 'srt-hazmat',
    name: 'Hazardous Materials Response Team',
    abbreviation: 'HazMat',
    assessmentPdf: '/documents/srt/hazmat-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-imt',
    name: 'Incident Management Team',
    abbreviation: 'IMT',
    assessmentPdf: '/documents/srt/imt-assessment.pdf',
    status: 'active',
  },
  {
    _id: 'srt-land-sar',
    name: 'Land Search and Rescue',
    abbreviation: 'Land SAR',
    assessmentPdf: '/documents/srt/land-sar-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-helo',
    name: 'Helicopter / Rotary Wing SAR Team',
    abbreviation: 'Helo SAR',
    assessmentPdf: '/documents/srt/helo-sar-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-dive',
    name: 'Public Safety Dive Team',
    abbreviation: 'Dive',
    status: 'coming-soon',
  },
  {
    _id: 'srt-suas',
    name: 'Small Unmanned Aircraft Team',
    abbreviation: 'sUAS',
    assessmentPdf: '/documents/srt/suas-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-swat',
    name: 'Special Weapons & Tactics Team',
    abbreviation: 'SWAT',
    assessmentPdf: '/documents/srt/swat-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-swiftwater',
    name: 'Swiftwater / Flood Search & Rescue Team',
    abbreviation: 'Swiftwater',
    assessmentPdf: '/documents/srt/swiftwater-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-usar',
    name: 'Urban Search & Rescue Task Force',
    abbreviation: 'USAR',
    assessmentPdf: '/documents/srt/usar-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
  {
    _id: 'srt-waterborne',
    name: 'Waterborne Response Team',
    abbreviation: 'Waterborne',
    assessmentPdf: '/documents/srt/waterborne-assessment.pdf',
    uploadUrl: 'https://longviewsolutionsgroup.com/Florida-SRT-CAP/',
    status: 'active',
  },
];

const disciplineIcons: Record<string, React.ElementType> = {
  'Animal SAR': Dog,
  Bomb: AlertTriangle,
  EOC: Building2,
  HazMat: Flame,
  IMT: Users,
  'Land SAR': Search,
  'Helo SAR': Plane,
  Dive: Anchor,
  sUAS: Radio,
  SWAT: Crosshair,
  Swiftwater: Anchor,
  USAR: Search,
  Waterborne: Anchor,
};

export default async function FloridaSrtCapPage() {
  const sanityData = await sanityFetch<SrtDiscipline[]>(srtDisciplinesQuery);
  const disciplines = sanityData && sanityData.length > 0 ? sanityData : fallbackDisciplines;

  const activeCount = disciplines.filter((d) => d.status === 'active').length;
  const comingSoonCount = disciplines.filter((d) => d.status === 'coming-soon').length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-command-navy px-4 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(197,147,58,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(197,147,58,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-signal-gold/30 bg-steel-blue/50">
            <Shield className="h-8 w-8 text-signal-gold" />
          </div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-signal-gold">
            Florida Division of Emergency Management
          </p>
          <h1 className="font-display mt-4 text-3xl font-bold text-clean-white md:text-5xl">
            Specialty Response Team
            <br />
            <span className="text-signal-gold">Capability Assessment Program</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-gray">
            Standardized self-assessment tools for Florida&apos;s specialty response teams. Download
            your discipline&apos;s assessment, complete the evaluation, and submit for capability
            review.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-sm">
            <span className="flex items-center gap-2 text-light-gray">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
              {activeCount} Disciplines Active
            </span>
            {comingSoonCount > 0 && (
              <span className="flex items-center gap-2 text-medium-gray">
                <Clock className="h-3.5 w-3.5" />
                {comingSoonCount} Coming Soon
              </span>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Leadership Intent */}
      <section className="border-b border-light-gray bg-clean-white px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-4 text-center text-xl font-bold text-command-navy">
            Leadership Intent
          </h2>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-dark-charcoal">
            The SRT Capability Assessment Program is sponsored by the Florida Division of Emergency
            Management to establish standardized readiness benchmarks across all specialty response
            disciplines in the state.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/documents/srt/fdem-sponsorship-letter.pdf"
              className="inline-flex items-center gap-2 rounded border border-command-navy/20 px-5 py-2.5 text-sm font-semibold text-command-navy transition-colors hover:bg-command-navy/5"
            >
              <FileText className="h-4 w-4 text-signal-gold" />
              FDEM Sponsorship Letter
            </a>
            <a
              href="/documents/srt/letter-of-support.pdf"
              className="inline-flex items-center gap-2 rounded border border-command-navy/20 px-5 py-2.5 text-sm font-semibold text-command-navy transition-colors hover:bg-command-navy/5"
            >
              <FileText className="h-4 w-4 text-signal-gold" />
              Letter of Support
            </a>
          </div>
        </div>
      </section>

      {/* Discipline Cards */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display mb-2 text-center text-2xl font-bold text-command-navy">
            SRT DISCIPLINE SELF-ASSESSMENTS
          </h2>
          <p className="mb-12 text-center text-sm text-dark-charcoal">
            Download the assessment tool for your discipline. Complete and submit for capability
            review.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d) => {
              const Icon = disciplineIcons[d.abbreviation || ''] || Shield;
              const isComingSoon = d.status === 'coming-soon';

              return (
                <div
                  key={d._id}
                  className={`rounded-md border bg-clean-white p-5 transition-shadow ${
                    isComingSoon
                      ? 'border-light-gray opacity-60'
                      : 'border-light-gray hover:shadow-md'
                  }`}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <Icon
                      className={`h-6 w-6 ${isComingSoon ? 'text-medium-gray' : 'text-signal-gold'}`}
                    />
                    {isComingSoon && (
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-medium-gray">
                        Coming Soon
                      </span>
                    )}
                    {!isComingSoon && d.abbreviation && (
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
                        {d.abbreviation}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-command-navy">
                    {d.name}
                  </h3>
                  {d.description && (
                    <p className="mt-2 text-xs leading-relaxed text-dark-charcoal">
                      {d.description}
                    </p>
                  )}
                  {!isComingSoon && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {d.assessmentPdf && (
                        <a
                          href={d.assessmentPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded bg-command-navy px-3 py-1.5 text-xs font-semibold text-clean-white transition-colors hover:bg-steel-blue"
                        >
                          <Download className="h-3 w-3" />
                          Download PDF
                        </a>
                      )}
                      {d.uploadUrl && (
                        <a
                          href={d.uploadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded border border-signal-gold/40 px-3 py-1.5 text-xs font-semibold text-signal-gold transition-colors hover:border-signal-gold hover:bg-signal-gold/5"
                        >
                          <Upload className="h-3 w-3" />
                          Submit Assessment
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-clean-white">
            Questions About the SRT CAP?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-light-gray">
            For questions about the assessment process, submission requirements, or program
            participation, contact our team directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              CONTACT US
            </Link>
            <a
              href="tel:+18046835780"
              className="font-mono text-sm tracking-wide text-signal-gold transition-colors hover:text-warm-gold-light"
            >
              (804) 683-5780
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
