'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Users, Calendar, Map, ChevronRight } from 'lucide-react';

const fallbackDeployments = [
  {
    _id: 'helene-2024',
    name: 'Hurricane Helene Housing Operations',
    disasterType: 'Hurricane',
    jurisdiction: 'Sarasota & Manatee Counties',
    state: 'FL',
    role: 'Housing Operations IMT Lead',
    teamSize: 45,
    startDate: '2024-10-01',
    endDate: '2024-12-15',
    status: 'complete',
  },
  {
    _id: 'milton-2024',
    name: 'Hurricane Milton IA IMT',
    disasterType: 'Hurricane',
    jurisdiction: 'Pinellas County',
    state: 'FL',
    role: 'Individual Assistance IMT',
    teamSize: 32,
    startDate: '2024-10-12',
    endDate: '2024-11-30',
    status: 'complete',
  },
  {
    _id: 'ky-tornado-2021',
    name: 'Western KY Tornado Recovery',
    disasterType: 'Tornado',
    jurisdiction: 'Graves, Hopkins & Muhlenberg Counties',
    state: 'KY',
    role: 'EOC Staffing & CDBG-DR Support',
    teamSize: 18,
    startDate: '2021-12-20',
    endDate: '2023-06-30',
    status: 'complete',
  },
  {
    _id: 'michael-2018',
    name: 'Hurricane Michael IMT',
    disasterType: 'Hurricane',
    jurisdiction: 'Bay County',
    state: 'FL',
    role: 'Incident Management Team',
    teamSize: 28,
    startDate: '2018-10-15',
    endDate: '2019-04-30',
    status: 'complete',
  },
  {
    _id: 'irma-2017',
    name: 'Hurricane Irma Housing Operations',
    disasterType: 'Hurricane',
    jurisdiction: 'Statewide, FL',
    state: 'FL',
    role: 'Housing Operations Program Support',
    teamSize: 35,
    startDate: '2017-09-15',
    endDate: '2018-03-31',
    status: 'complete',
  },
  {
    _id: 'harvey-2017',
    name: 'Hurricane Harvey Mass Care',
    disasterType: 'Hurricane',
    jurisdiction: 'Harris County',
    state: 'TX',
    role: 'Mass Care IMT Support',
    teamSize: 22,
    startDate: '2017-09-01',
    endDate: '2017-12-31',
    status: 'complete',
  },
  {
    _id: 'covid-2020',
    name: 'COVID-19 Pandemic Response',
    disasterType: 'Pandemic',
    jurisdiction: 'Multi-State',
    state: 'Multi',
    role: 'Emergency Management Support',
    teamSize: 40,
    startDate: '2020-03-15',
    endDate: '2021-06-30',
    status: 'complete',
  },
  {
    _id: 'deepwater-2010',
    name: 'Deepwater Horizon Oil Spill',
    disasterType: 'HAZMAT',
    jurisdiction: 'Gulf Coast — Multi-State',
    state: 'Multi',
    role: 'Response Operations Coordination',
    teamSize: 20,
    startDate: '2010-05-01',
    endDate: '2010-12-31',
    status: 'complete',
  },
];

type FilterType = 'all' | 'active' | 'complete';

const statusColors: Record<string, string> = {
  active: 'text-green-400 border-green-400/30',
  standby: 'text-signal-gold border-signal-gold/30',
  complete: 'text-medium-gray border-medium-gray/30',
};

const disasterTypeColors: Record<string, string> = {
  Hurricane: 'bg-blue-900/30 text-blue-300',
  Tornado: 'bg-orange-900/30 text-orange-300',
  Flood: 'bg-cyan-900/30 text-cyan-300',
  HAZMAT: 'bg-yellow-900/30 text-yellow-300',
  Pandemic: 'bg-purple-900/30 text-purple-300',
  Wildfire: 'bg-red-900/30 text-red-300',
  Other: 'bg-light-gray/30 text-medium-gray',
  Multi: 'bg-light-gray/30 text-medium-gray',
};

function formatDate(dateStr?: string): string {
  if (!dateStr) return 'Ongoing';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function DeploymentsList() {
  const [filter, setFilter] = useState<FilterType>('all');
  const deployments = fallbackDeployments;

  const filtered = filter === 'all' ? deployments : deployments.filter((d) => d.status === filter);

  const counts = {
    all: deployments.length,
    active: deployments.filter((d) => d.status === 'active').length,
    complete: deployments.filter((d) => d.status === 'complete').length,
  };

  return (
    <>
      {/* Stats Row */}
      <section className="border-b border-light-gray bg-steel-blue px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: String(counts.all), label: 'Total Deployments' },
              { value: String(counts.active || 0), label: 'Active Now' },
              { value: '12', label: 'States Served' },
              { value: '150+', label: 'Total Responders' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-mono text-2xl font-bold text-clean-white">{s.value}</span>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-signal-gold/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs + Cards */}
      <section className="bg-light-gray px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Controls Row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex gap-2">
              {(['all', 'active', 'complete'] as FilterType[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                    filter === f
                      ? 'bg-signal-gold text-command-navy'
                      : 'border border-medium-gray/40 text-medium-gray hover:border-signal-gold hover:text-signal-gold'
                  }`}
                >
                  {f} ({counts[f]})
                </button>
              ))}
            </div>

            {/* Map CTA */}
            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded border border-medium-gray/30 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-medium-gray opacity-60"
              title="Interactive map coming soon"
            >
              <Map className="h-3.5 w-3.5" />
              VIEW ON MAP
              <span className="rounded bg-medium-gray/20 px-1.5 py-0.5 text-[9px] uppercase tracking-widest">
                Soon
              </span>
            </button>
          </div>

          {/* Deployment Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dep) => (
              <div
                key={dep._id}
                className="flex flex-col overflow-hidden rounded-md border border-light-gray bg-clean-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Card Top Bar */}
                <div className="flex items-center justify-between border-b border-light-gray bg-command-navy/95 px-4 py-3">
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest ${
                      disasterTypeColors[dep.disasterType || 'Other'] ||
                      'bg-light-gray/30 text-medium-gray'
                    }`}
                  >
                    {dep.disasterType}
                  </span>
                  <span
                    className={`flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest ${
                      statusColors[dep.status] || 'border-medium-gray/30 text-medium-gray'
                    }`}
                  >
                    {dep.status === 'active' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    )}
                    {dep.status}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-command-navy">
                    {dep.name}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    <p className="flex items-center gap-2 font-mono text-xs text-dark-charcoal">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-signal-gold" />
                      {dep.jurisdiction}, {dep.state}
                    </p>
                    {dep.role && (
                      <p className="flex items-start gap-2 font-mono text-xs text-dark-charcoal">
                        <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-gold" />
                        {dep.role}
                      </p>
                    )}
                    <p className="flex items-center gap-2 font-mono text-xs text-dark-charcoal">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-signal-gold" />
                      {formatDate(dep.startDate)} – {formatDate(dep.endDate)}
                    </p>
                  </div>

                  {dep.teamSize && (
                    <div className="mt-4 rounded border border-light-gray bg-light-gray/50 px-3 py-2 text-center">
                      <span className="font-mono text-xl font-bold text-command-navy">
                        {dep.teamSize}
                      </span>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                        Personnel Deployed
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-mono text-sm text-medium-gray">
                No deployments match the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Map Coming Soon Banner */}
      <section className="border-y border-signal-gold/20 bg-command-navy px-4 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <Map className="mx-auto mb-4 h-8 w-8 text-signal-gold/60" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            Coming Soon
          </p>
          <h3 className="font-display mt-2 text-lg font-bold text-clean-white">
            Interactive Deployment Map
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-medium-gray">
            An interactive Mapbox-powered deployment map is in development. It will allow users to
            explore deployments by geography, disaster type, and date range.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-gray px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-command-navy">
            Need Deployment Support?
          </h2>
          <p className="mt-4 text-base text-dark-charcoal">
            Whether you&apos;re facing an active incident or pre-positioning resources for the
            coming season — LvSG is ready to deploy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-signal-gold px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:bg-warm-gold-light"
            >
              REQUEST DEPLOYMENT SUPPORT <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/government/past-performance"
              className="border border-command-navy/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wide text-command-navy transition-colors hover:border-command-navy"
            >
              PAST PERFORMANCE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
