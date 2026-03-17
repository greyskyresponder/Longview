'use client';

import Link from 'next/link';

export function UtilityBar() {
  return (
    <div className="bg-command-navy text-clean-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/government/capability-statements"
            className="text-light-gray hover:text-warm-gold-light transition-colors"
          >
            Capability Statement
          </Link>
          <span className="text-operational-steel">|</span>
          <Link
            href="/government/contract-vehicles"
            className="text-light-gray hover:text-warm-gold-light transition-colors"
          >
            Contract Vehicles
          </Link>
          <span className="text-operational-steel">|</span>
          <Link
            href="/community/grey-sky-responder-society"
            className="font-semibold text-warm-gold-light hover:text-signal-gold transition-colors"
          >
            ⬡ Grey Sky Responder Portal
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+1XXXXXXXXXX"
            className="text-signal-gold font-mono font-medium tracking-wide"
          >
            24/7 Deployment Line: (850) 000-0000
          </a>
          <span className="hidden text-operational-steel sm:inline">|</span>
          <button
            type="button"
            className="hidden text-light-gray hover:text-warm-gold-light transition-colors sm:inline"
            aria-label="Search the site"
          >
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
