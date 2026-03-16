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
            Strategic Capability. Operational Deployment. National Reach.
          </p>
          <p className="mt-6 text-lg text-medium-gray">
            We don&apos;t write reports about disasters. We deploy to them.
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

      {/* Operational Status Bar */}
      <section className="bg-steel-blue px-4 py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 text-center lg:justify-between">
          <StatusMetric value="3" label="Active Missions" />
          <StatusMetric value="12" label="States Served" />
          <StatusMetric value="150+" label="Responders Credentialed" />
          <StatusMetric value="20+" label="Years of Operations" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-signal-gold mb-2 text-xs font-bold uppercase tracking-widest">
            Our Mission
          </h2>
          <p className="font-display text-dark-charcoal text-xl leading-relaxed italic lg:text-2xl">
            Longview Solutions Group builds, deploys, and sustains disaster response capability for
            the governments and communities that need it most. Grounded in faith, driven by valor,
            and guided by the conviction that every community deserves expert crisis
            leadership&mdash;not after the report is written, but while the storm is still overhead.
          </p>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="bg-light-gray px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-command-navy text-center text-3xl font-bold">
            CAPABILITIES
          </h2>
          <p className="text-medium-gray mt-2 text-center text-lg">
            From strategic planning to boots on the ground.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CapabilityCard
              title="Incident Management Teams"
              description="Trained, credentialed IMTs deployable within 24-72 hours to any jurisdiction in the nation."
            />
            <CapabilityCard
              title="EOC Management"
              description="Full EOC staffing, activation support, and operational management for state and local governments."
            />
            <CapabilityCard
              title="Disaster Housing Operations"
              description="End-to-end housing mission management from needs assessment through unit placement and closeout."
            />
            <CapabilityCard
              title="Strategic Resilience Planning"
              description="Long-range capability development, COOP planning, and community resilience strategy."
            />
            <CapabilityCard
              title="Exercise Design & Evaluation"
              description="HSEEP-compliant exercises that test real capability, not just check compliance boxes."
            />
            <CapabilityCard
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
          <p className="text-medium-gray mt-2 text-center text-lg">
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
          <p className="text-medium-gray mt-4 text-lg leading-relaxed">
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
      <span className="font-mono text-2xl font-bold text-signal-gold">{value}</span>
      <p className="mt-1 text-xs uppercase tracking-widest text-medium-gray">{label}</p>
    </div>
  );
}

function CapabilityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-md border border-light-gray bg-clean-white p-6 transition-shadow hover:shadow-md">
      <h3 className="font-display text-command-navy text-lg font-bold">{title}</h3>
      <p className="text-dark-charcoal mt-2 text-sm leading-relaxed">{description}</p>
      <span className="text-signal-gold mt-4 inline-block text-sm font-medium">Learn More →</span>
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
