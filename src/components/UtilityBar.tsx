'use client';

import Link from 'next/link';

export function UtilityBar() {
  return (
    <div className="bg-command-navy text-clean-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
        <div className="flex items-center gap-4">
          <Link
            href="/government/capability-statements"
            className="hover:text-warm-gold-light transition-colors"
          >
            Capability Statement
          </Link>
          <span className="text-operational-steel">|</span>
          <Link
            href="/government/contract-vehicles"
            className="hover:text-warm-gold-light transition-colors"
          >
            Contract Vehicles
          </Link>
          <span className="text-operational-steel">|</span>
          <Link
            href="/community/grey-sky-responder-society"
            className="hover:text-warm-gold-light transition-colors"
          >
            Grey Sky Responder Portal
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-signal-gold font-mono font-medium">
            Emergency Deployment: (XXX) XXX-XXXX
          </span>
          <span className="text-operational-steel">|</span>
          <button
            type="button"
            className="hover:text-warm-gold-light transition-colors"
            aria-label="Search the site"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
