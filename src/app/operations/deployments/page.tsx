import type { Metadata } from 'next';
import { DeploymentsList } from './DeploymentsList';

export const metadata: Metadata = {
  title: 'Deployments',
  description:
    'Current and past deployment operations across the United States — tracked, measured, and mission-complete.',
};

export default function DeploymentsPage() {
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
            Operations
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Deployments
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            Current and past deployment operations across the United States — tracked, measured, and
            mission-complete.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-signal-gold" />
      </section>

      {/* Interactive list + stats (client component for filter state) */}
      <DeploymentsList />
    </>
  );
}
