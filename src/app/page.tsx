import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-command-navy px-4 py-24 text-center lg:py-36">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-clean-white lg:text-6xl">
            LONGVIEW SOLUTIONS GROUP
          </h1>
          <p className="font-display mt-4 text-xl font-semibold text-signal-gold lg:text-2xl">
            Crisis Leadership. Deployed.
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-light-gray lg:text-xl">
            We don&apos;t write reports about disasters. We staff the EOC, deploy the teams, and
            manage the mission&mdash;start to finish.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="bg-signal-gold hover:bg-signal-gold/90 rounded px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors"
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
        <div className="bg-signal-gold absolute bottom-0 left-0 right-0 h-1" />
      </section>

      {/* Operational Status Bar — telemetry styling with monospace */}
      <section className="bg-steel-blue px-4 py-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-light-gray">
              Operational Status
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-center lg:justify-between">
            <StatusMetric value="3" label="Active Missions" />
            <StatusMetric value="12" label="States Served" />
            <StatusMetric value="150+" label="Responders Credentialed" />
            <StatusMetric value="20+" label="Years of Operations" />
          </div>
        </div>
      </section>

      {/* Contract Vehicles Bar — pulled up per Pettus feedback for procurement audience */}
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

      {/* Mission Statement */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-signal-gold mb-2 text-xs font-bold uppercase tracking-widest">
            Our Mission
          </h2>
          <p className="font-display text-dark-charcoal text-xl leading-relaxed italic lg:text-2xl">
            We are more than an emergency management provider&mdash;we are your dedicated support
            team in building resilience. Longview Solutions Group builds, deploys, and sustains
            disaster response capability for the governments and communities that need it most.
            Grounded in faith, driven by valor, and guided by the conviction that every community
            deserves expert crisis leadership&mdash;standing by your side, not after the report is
            written, but while the storm is still overhead.
          </p>
        </div>
      </section>

      {/* Service Lines (renamed from Capabilities per Pettus feedback) */}
      <section className="bg-light-gray px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-command-navy text-center text-3xl font-bold">
            SERVICE LINES
          </h2>
          <p className="text-dark-charcoal mt-2 text-center text-base">
            From strategic planning to boots on the ground.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Incident Management Teams"
              description="Trained, credentialed IMTs deployable within 24-72 hours to any jurisdiction in the nation."
            />
            <ServiceCard
              title="EOC Management"
              description="Full EOC staffing, activation support, and operational management for state and local governments."
            />
            <ServiceCard
              title="Disaster Housing Operations"
              description="End-to-end housing mission management from needs assessment through unit placement and closeout."
            />
            <ServiceCard
              title="Specialty Response Teams"
              description="Scalable, mission-ready SRT units for state and local deployment. Includes Florida SRT CAP operations."
            />
            <ServiceCard
              title="Human Services"
              description="Disaster case management, individual assistance programs, and community recovery support for impacted populations."
            />
            <ServiceCard
              title="Grey Sky Travel"
              description="Managed travel and logistics for deployed responders — housing, transport, and per diem coordination at operational tempo."
            />
            <ServiceCard
              title="Strategic Resilience Planning"
              description="Long-range capability development, COOP planning, and community resilience strategy."
            />
            <ServiceCard
              title="Exercise Design & Evaluation"
              description="HSEEP-compliant exercises that test real capability, not just check compliance boxes."
            />
            <ServiceCard
              title="National Security & Expeditionary Ops"
              description="Specialized capability development for defense and intelligence community requirements."
            />
          </div>
        </div>
      </section>

      {/* Government Ready */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-command-navy text-center text-3xl font-bold">
            GOVERNMENT READY
          </h2>
          <p className="text-dark-charcoal mt-2 text-center text-base">
            Contract-ready. Compliance-verified. Deployment-proven.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <GovColumn
              title="Contract Vehicles"
              text="Florida DMS State Term Contract. SAM.gov registered. Active and available."
            />
            <GovColumn
              title="Framework Alignment"
              text="NIMS / ICS / EMAP / HSEEP / NRF / NDRF / CPG 101. Built into every engagement."
            />
            <GovColumn
              title="Past Performance"
              text="Multiple government clients. Documented outcomes. CPARS-ready references."
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/government/capability-statements"
              className="bg-signal-gold hover:bg-signal-gold/90 inline-block rounded px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors"
            >
              DOWNLOAD CAPABILITY STATEMENT
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
              className="bg-signal-gold hover:bg-signal-gold/90 rounded px-8 py-3 text-sm font-bold tracking-wide text-clean-white transition-colors"
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

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-md border border-light-gray bg-clean-white p-6 transition-shadow hover:shadow-md">
      <h3 className="font-display text-command-navy text-lg font-bold">{title}</h3>
      <p className="text-dark-charcoal mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function GovColumn({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t-2 border-signal-gold pt-6 text-center">
      <h3 className="font-display text-command-navy text-lg font-bold">{title}</h3>
      <p className="text-dark-charcoal mt-2 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
