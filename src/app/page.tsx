import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  statusBarQuery,
  featuredDeploymentsQuery,
  servicesQuery,
  programsQuery,
  intelQuery,
} from '@/sanity/lib/queries';
import {
  Shield,
  Radio,
  Home as HomeIcon,
  Users,
  Heart,
  Plane,
  Target,
  ClipboardList,
  Lock,
  FileText,
} from 'lucide-react';

/* ── Icon map for service lines ── */
const serviceIconMap: Record<string, React.ElementType> = {
  'Incident Management Teams': Shield,
  'EOC Management': Radio,
  'Disaster Housing Operations': HomeIcon,
  'Specialty Response Teams': Users,
  'Human Services': Heart,
  'Grey Sky Travel': Plane,
  'Strategic Resilience Planning': Target,
  'Exercise Design & Evaluation': ClipboardList,
  'National Security & Expeditionary Ops': Lock,
};

/* ── Sanity types ── */
interface StatusBarData {
  activeMissions?: number;
  statesServed?: number;
  respondersCredentialed?: string;
  yearsOfOperations?: string;
  watchStatus?: string;
}

interface DeploymentData {
  _id: string;
  name: string;
  disasterType?: string;
  jurisdiction: string;
  state?: string;
  role: string;
  teamSize: number;
  outcome?: string;
  startDate?: string;
  endDate?: string;
  status: string;
  coordinates?: { lat: number; lng: number };
}

interface ServiceData {
  _id: string;
  title: string;
  description: string;
  slug?: { current: string };
  icon?: string;
  esfAlignment?: string;
}

interface ProgramData {
  _id: string;
  name: string;
  slug?: { current: string };
  description: string;
  teamStructure?: string;
  status: string;
}

interface IntelData {
  _id: string;
  title: string;
  slug?: { current: string };
  category?: string;
  author?: string;
  excerpt: string;
  publishedAt: string;
}

/* ── Hardcoded fallbacks ── */
const fallbackStatusBar: StatusBarData = {
  activeMissions: 3,
  statesServed: 12,
  respondersCredentialed: '150+',
  yearsOfOperations: '20+',
  watchStatus: 'QUIET',
};

const fallbackDeployments: DeploymentData[] = [
  {
    _id: 'helene',
    name: 'Hurricane Helene',
    jurisdiction: 'State of Florida',
    role: 'Disaster Housing Operations — IMT Lead',
    teamSize: 45,
    status: 'active',
    startDate: '2024-01-01',
  },
  {
    _id: 'milton',
    name: 'Hurricane Milton',
    jurisdiction: 'State of Florida',
    role: 'Individual Assistance IMT',
    teamSize: 32,
    status: 'active',
    startDate: '2024-01-01',
  },
  {
    _id: 'ky-tornadoes',
    name: 'Western KY Tornadoes',
    jurisdiction: 'Commonwealth of Kentucky',
    role: 'Long-Term Recovery & EOC Staffing',
    teamSize: 18,
    status: 'complete',
    startDate: '2021-01-01',
    endDate: '2023-12-31',
  },
];

const fallbackServices: ServiceData[] = [
  {
    _id: '1',
    title: 'Incident Management Teams',
    description:
      'Trained, credentialed IMTs deployable within 24-72 hours to any jurisdiction in the nation.',
  },
  {
    _id: '2',
    title: 'EOC Management',
    description:
      'Full EOC staffing, activation support, and operational management for state and local governments.',
  },
  {
    _id: '3',
    title: 'Disaster Housing Operations',
    description:
      'End-to-end housing mission management from needs assessment through unit placement and closeout.',
  },
  {
    _id: '4',
    title: 'Specialty Response Teams',
    description:
      'Scalable, mission-ready SRT units for state and local deployment. Includes Florida SRT CAP operations.',
  },
  {
    _id: '5',
    title: 'Human Services',
    description:
      'Disaster case management, individual assistance programs, and community recovery support for impacted populations.',
  },
  {
    _id: '6',
    title: 'Grey Sky Travel',
    description:
      'Managed travel and logistics for deployed responders — housing, transport, and per diem coordination at operational tempo.',
  },
  {
    _id: '7',
    title: 'Strategic Resilience Planning',
    description:
      'Long-range capability development, COOP planning, and community resilience strategy.',
  },
  {
    _id: '8',
    title: 'Exercise Design & Evaluation',
    description:
      'HSEEP-compliant exercises that test real capability, not just check compliance boxes.',
  },
  {
    _id: '9',
    title: 'National Security & Expeditionary Ops',
    description:
      'Specialized capability development for defense and intelligence community requirements.',
  },
];

const fallbackIntel: IntelData[] = [
  {
    _id: 'intel-1',
    title: 'After Action: Hurricane Helene Housing Operations',
    category: 'After Action',
    author: 'Roy E. Dunn, CEMO',
    excerpt:
      'Lessons learned from deploying 45 personnel across multiple Florida counties for disaster housing mission operations.',
    publishedAt: '2025-01-15',
  },
  {
    _id: 'intel-2',
    title: 'The State of Disaster Housing in America',
    category: 'Policy Analysis',
    author: 'Longview Solutions Group',
    excerpt:
      'An operational assessment of the growing gap between housing need and capacity in post-disaster environments.',
    publishedAt: '2024-11-20',
  },
  {
    _id: 'intel-3',
    title: 'Building a Deployable Workforce: The Grey Sky Model',
    category: 'Operational Brief',
    author: 'Roy E. Dunn, CEMO',
    excerpt:
      'How credentialed responder networks are changing the speed and quality of emergency management staffing.',
    publishedAt: '2024-09-10',
  },
];

const fallbackPrograms: ProgramData[] = [
  {
    _id: '1',
    name: 'Grey Sky Responder Society',
    status: 'active',
    description:
      'A credentialed network of field-proven emergency management professionals ready for rapid deployment nationwide.',
  },
  {
    _id: '2',
    name: 'Grey Sky Drone Program',
    status: 'developing',
    description:
      'sUAS capability for damage assessment, situational awareness, and infrastructure inspection during disaster operations.',
  },
  {
    _id: '3',
    name: 'National Disaster Database',
    status: 'developing',
    description:
      'Centralized operational intelligence platform for disaster data, deployment history, and lessons learned.',
  },
];

/* ── Page Component ── */
export default async function Home() {
  // Fetch from Sanity with graceful fallback
  const [statusBar, deployments, services, programs, intelArticles] = await Promise.all([
    sanityFetch<StatusBarData>(statusBarQuery),
    sanityFetch<DeploymentData[]>(featuredDeploymentsQuery),
    sanityFetch<ServiceData[]>(servicesQuery),
    sanityFetch<ProgramData[]>(programsQuery),
    sanityFetch<IntelData[]>(intelQuery),
  ]);

  const status = statusBar ?? fallbackStatusBar;
  const deploys = deployments && deployments.length > 0 ? deployments : fallbackDeployments;
  const svcList = services && services.length > 0 ? services : fallbackServices;
  const progList = programs && programs.length > 0 ? programs : fallbackPrograms;
  const articles = intelArticles && intelArticles.length > 0 ? intelArticles : fallbackIntel;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-command-navy px-4 py-24 text-center lg:py-36">
        {/* Topographic grid overlay for EOC feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(197,147,58,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(197,147,58,0.3) 1px, transparent 1px),
              radial-gradient(ellipse at 30% 50%, rgba(27,43,69,0.8) 0%, transparent 70%),
              radial-gradient(ellipse at 70% 50%, rgba(27,43,69,0.6) 0%, transparent 70%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 100% 100%, 100% 100%',
          }}
        />
        {/* Gradient depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-command-navy/50 via-transparent to-command-navy/80" />
        <div className="relative mx-auto max-w-4xl">
          {/* Logo watermark — lighthouse visible, text faded via gradient mask */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Image
              src="/lvsg-logo-white.png"
              alt=""
              width={480}
              height={480}
              priority
              className="h-auto opacity-[0.06]"
              style={{
                marginTop: '-2rem',
                maskImage: 'linear-gradient(to bottom, black 45%, transparent 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 45%, transparent 70%)',
              }}
            />
          </div>
          <h1 className="font-display relative text-4xl font-bold leading-tight tracking-tight text-clean-white lg:text-6xl">
            LONGVIEW SOLUTIONS GROUP
          </h1>
          <p className="font-display relative mt-4 text-xl font-semibold text-signal-gold lg:text-2xl">
            When the Call Comes, We Deploy.
          </p>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-gray lg:text-xl">
            We don&apos;t write reports about disasters. We staff the EOC, deploy the teams, and
            manage the mission&mdash;start to finish.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              REQUEST CONSULTATION
            </Link>
            <Link
              href="/operations/deployments"
              className="rounded border border-clean-white/30 px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:border-clean-white/60"
            >
              VIEW DEPLOYMENTS
            </Link>
          </div>
        </div>
        {/* Gold divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Operational Status Bar — telemetry styling with monospace */}
      <section className="bg-steel-blue px-4 py-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-light-gray">
              Operational Status
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-medium-gray">
              &mdash; Watch Office: {status.watchStatus || 'QUIET'}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-center lg:justify-between">
            <StatusMetric value={String(status.activeMissions ?? 3)} label="Active Missions" />
            <StatusMetric value={String(status.statesServed ?? 12)} label="States Served" />
            <StatusMetric
              value={status.respondersCredentialed ?? '150+'}
              label="Responders Credentialed"
            />
            <StatusMetric value={status.yearsOfOperations ?? '20+'} label="Years of Operations" />
          </div>
        </div>
      </section>

      {/* Operations Snapshot — per ATLAS review: immediate credibility */}
      <section className="border-b border-steel-blue/20 bg-command-navy/95 px-4 py-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs tracking-wide">
            <span className="font-semibold uppercase text-signal-gold">Current Ops:</span>
            {deploys
              .filter((d) => d.status === 'active')
              .map((d) => (
                <span key={d._id} className="text-light-gray">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  {d.name} ({d.state || d.jurisdiction})
                </span>
              ))}
            {deploys
              .filter((d) => d.status !== 'active')
              .slice(0, 1)
              .map((d) => (
                <span key={d._id} className="text-light-gray">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  {d.name}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* Contract Vehicles Bar */}
      <section className="border-b border-light-gray bg-clean-white px-4 py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-center font-mono text-xs tracking-wide text-operational-steel">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal-gold" />
            SAM.gov Registered
          </span>
          <span className="text-light-gray">|</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal-gold" />
            FL DMS State Term Contract
          </span>
          <span className="text-light-gray">|</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal-gold" />
            NIMS / ICS / HSEEP Compliant
          </span>
        </div>
      </section>

      {/* Mission Statement — with lighthouse watermark */}
      <section className="relative overflow-hidden px-4 py-20">
        {/* Lighthouse watermark SVG */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg
            viewBox="0 0 200 400"
            className="h-[500px] w-auto"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="80" y="60" width="40" height="280" rx="2" />
            <rect x="70" y="340" width="60" height="20" rx="2" />
            <rect x="60" y="360" width="80" height="30" rx="3" />
            <polygon points="100,0 60,60 140,60" />
            <circle cx="100" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="100" y1="10" x2="100" y2="0" stroke="currentColor" strokeWidth="3" />
            <line x1="120" y1="20" x2="130" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="80" y1="20" x2="70" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="125" y1="35" x2="135" y2="35" stroke="currentColor" strokeWidth="2" />
            <line x1="75" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-signal-gold">
            Our Mission
          </h2>
          <p className="font-display text-xl italic leading-relaxed text-dark-charcoal lg:text-2xl">
            We are more than an emergency management provider&mdash;we are your dedicated support
            team in building resilience. Longview Solutions Group builds, deploys, and sustains
            disaster response capability for the governments and communities that need it most.
            Grounded in faith, driven by valor, and guided by the conviction that every community
            deserves expert crisis leadership&mdash;standing by your side, not after the report is
            written, but while the storm is still overhead.
          </p>
        </div>
      </section>

      {/* Service Lines */}
      <section className="bg-light-gray px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">
            SERVICE LINES
          </h2>
          <p className="mt-2 text-center text-base text-dark-charcoal">
            From strategic planning to boots on the ground.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {svcList.map((svc) => (
              <ServiceCard
                key={svc._id}
                title={svc.title}
                description={svc.description}
                icon={serviceIconMap[svc.title]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Deployments */}
      <section className="bg-command-navy px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-clean-white">
            RECENT DEPLOYMENTS
          </h2>
          <p className="mt-2 text-center text-base text-medium-gray">
            Operational credibility. Documented outcomes.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {deploys.map((d) => (
              <DeploymentCard
                key={d._id}
                disaster={d.name}
                jurisdiction={d.jurisdiction}
                role={d.role}
                teamSize={d.teamSize}
                status={d.status as 'active' | 'complete'}
                year={formatYear(d.startDate, d.endDate)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/operations/deployments"
              className="rounded border border-signal-gold/40 px-8 py-3 text-sm font-bold tracking-wide text-signal-gold transition-colors hover:border-signal-gold hover:bg-signal-gold/10"
            >
              VIEW ALL DEPLOYMENTS
            </Link>
          </div>
        </div>
      </section>

      {/* Government Ready */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">
            GOVERNMENT READY
          </h2>
          <p className="mt-2 text-center text-base text-dark-charcoal">
            Contract-ready. Compliance-verified. Deployment-proven.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <GovColumn
              title="Contract Vehicles"
              icon={<Shield className="mx-auto mb-3 h-8 w-8 text-signal-gold" />}
              items={[
                'Florida DMS State Term Contract',
                'SAM.gov Registered',
                'CAGE Code Active',
                'Multiple State & Local Contracts',
              ]}
            />
            <GovColumn
              title="Framework Alignment"
              icon={<ClipboardList className="mx-auto mb-3 h-8 w-8 text-signal-gold" />}
              items={[
                'NIMS / ICS Compliant',
                'EMAP Standards',
                'HSEEP Exercise Design',
                'NRF / NDRF / CPG 101',
              ]}
            />
            <GovColumn
              title="Past Performance"
              icon={<Target className="mx-auto mb-3 h-8 w-8 text-signal-gold" />}
              items={[
                'Multi-state disaster operations',
                'FEMA-coordinated housing missions',
                'CPARS-ready references',
                'Documented deployment outcomes',
              ]}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/government/capability-statements"
              className="inline-block rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              DOWNLOAD CAPABILITY STATEMENT
            </Link>
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="bg-light-gray px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">
            CURRENT INITIATIVES
          </h2>
          <p className="mt-2 text-center text-base text-dark-charcoal">
            Building tomorrow&apos;s capability today.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {progList.map((prog) => (
              <InitiativeCard
                key={prog._id}
                name={prog.name}
                status={prog.status}
                description={prog.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intel / Thought Leadership */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-command-navy">INTEL</h2>
          <p className="mt-2 text-center text-base text-dark-charcoal">
            Operational insights from the field.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <IntelCard key={article._id} article={article} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/intel"
              className="rounded border border-command-navy/30 px-8 py-3 text-sm font-bold tracking-wide text-command-navy transition-colors hover:border-command-navy hover:bg-command-navy/5"
            >
              VIEW ALL INTEL
            </Link>
          </div>
        </div>
      </section>

      {/* Join the Mission */}
      <section className="bg-command-navy px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-clean-white">JOIN THE MISSION</h2>
          <p className="mt-4 text-lg leading-relaxed text-light-gray">
            LvSG is building the next generation of deployable disaster capability. If you&apos;ve
            served in the field&mdash;if you&apos;ve managed the impossible&mdash;we want to talk to
            you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/community/recruiting"
              className="rounded bg-signal-gold px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:bg-signal-gold/90"
            >
              EXPLORE CAREERS
            </Link>
            <Link
              href="/community/grey-sky-responder-society"
              className="rounded border border-clean-white/30 px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors hover:border-clean-white/60"
            >
              JOIN GREY SKY RESPONDER SOCIETY
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Utility ── */

function formatYear(start?: string, end?: string): string {
  if (!start) return '';
  const startYear = new Date(start).getFullYear();
  if (!end) return String(startYear);
  const endYear = new Date(end).getFullYear();
  return startYear === endYear ? String(startYear) : `${startYear}–${endYear}`;
}

/* ── Helper Components ── */

function StatusMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="font-mono text-3xl font-bold tabular-nums text-signal-gold">{value}</span>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-light-gray">
        {label}
      </p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="group rounded-md border border-light-gray bg-clean-white p-6 transition-shadow hover:shadow-md">
      {Icon && (
        <Icon className="mb-3 h-8 w-8 text-signal-gold transition-colors group-hover:text-command-navy" />
      )}
      <h3 className="font-display text-lg font-bold text-command-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">{description}</p>
    </div>
  );
}

function DeploymentCard({
  disaster,
  jurisdiction,
  role,
  teamSize,
  status,
  year,
}: {
  disaster: string;
  jurisdiction: string;
  role: string;
  teamSize: number;
  status: 'active' | 'complete';
  year: string;
}) {
  return (
    <div className="rounded-md border border-steel-blue bg-steel-blue/50 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
          {year}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest ${
            status === 'active' ? 'text-green-400' : 'text-medium-gray'
          }`}
        >
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              status === 'active' ? 'bg-green-400' : 'bg-medium-gray'
            }`}
          />
          {status}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-clean-white">{disaster}</h3>
      <p className="mt-1 font-mono text-xs tracking-wide text-medium-gray">{jurisdiction}</p>
      <p className="mt-3 text-sm leading-relaxed text-light-gray">{role}</p>
      <p className="mt-3 font-mono text-xs text-signal-gold">{teamSize} personnel deployed</p>
    </div>
  );
}

function GovColumn({
  title,
  icon,
  items,
}: {
  title: string;
  icon?: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="border-t-2 border-signal-gold pt-6 text-center">
      {icon}
      <h3 className="font-display text-lg font-bold text-command-navy">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-center gap-2 text-sm text-dark-charcoal"
          >
            <span className="inline-block h-1 w-1 rounded-full bg-signal-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntelCard({ article }: { article: IntelData }) {
  const date = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';
  return (
    <div className="group rounded-md border border-light-gray bg-clean-white p-6 transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <FileText className="h-5 w-5 text-signal-gold" />
        {article.category && (
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-signal-gold">
            {article.category}
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-bold leading-snug text-command-navy">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">{article.excerpt}</p>
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-wide text-medium-gray">
        <span>{article.author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function InitiativeCard({
  name,
  status,
  description,
}: {
  name: string;
  status: string;
  description: string;
}) {
  const isActive = status === 'active' || status === 'Active';
  return (
    <div className="rounded-md border border-light-gray bg-clean-white p-6">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`font-mono text-[10px] font-semibold uppercase tracking-widest ${
            isActive ? 'text-green-600' : 'text-signal-gold'
          }`}
        >
          {status}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-command-navy">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-dark-charcoal">{description}</p>
    </div>
  );
}
