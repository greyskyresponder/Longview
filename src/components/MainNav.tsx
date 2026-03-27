'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  {
    label: 'COMPANY',
    href: '/company',
    dropdown: [
      { label: 'About', href: '/company/about' },
      { label: 'Leadership', href: '/company/leadership' },
      { label: 'Mission & Values', href: '/company/mission-values' },
    ],
  },
  {
    label: 'SERVICE LINES',
    href: '/capabilities',
    dropdown: [
      { label: 'Services Overview', href: '/capabilities/services' },
      { label: 'Specialty Response Teams', href: '/capabilities/srt' },
      { label: 'Florida SRT CAP', href: '/capabilities/srt/florida-srt-cap' },
      { label: 'Grey Sky Travel', href: '/capabilities/grey-sky-travel' },
      { label: 'Programs', href: '/capabilities/programs' },
      { label: 'Methodology & Standards', href: '/capabilities/methodology' },
    ],
  },
  {
    label: 'OPERATIONS',
    href: '/operations',
    dropdown: [
      { label: 'Deployments', href: '/operations/deployments' },
      { label: 'Case Studies', href: '/operations/case-studies' },
    ],
  },
  {
    label: 'GOVERNMENT',
    href: '/government',
    dropdown: [
      { label: 'Contract Vehicles', href: '/government/contract-vehicles' },
      { label: 'Past Performance', href: '/government/past-performance' },
      { label: 'Capability Statements', href: '/government/capability-statements' },
      { label: 'Partnerships', href: '/government/partnerships' },
    ],
  },
  {
    label: 'INTEL',
    href: '/intel',
    dropdown: [
      { label: 'Briefings', href: '/intel/briefings' },
      { label: 'Situation Reports', href: '/intel/sitreps' },
      { label: 'White Papers', href: '/intel/white-papers' },
    ],
  },
  {
    label: 'COMMUNITY',
    href: '/community',
    dropdown: [
      { label: 'Grey Sky Responder Society', href: '/community/grey-sky-responder-society' },
      { label: 'Recruiting', href: '/community/recruiting' },
      { label: 'Deployment Stories', href: '/community/deployment-stories' },
    ],
  },
  {
    label: 'CONTACT',
    href: '/contact',
    dropdown: [
      { label: 'Request Consultation', href: '/contact/consultation' },
      { label: 'Teaming Opportunities', href: '/contact/teaming' },
      { label: 'Media & Speaking', href: '/contact/media' },
    ],
  },
];

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-light-gray bg-clean-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/lvsg-logo-navy.png"
            alt="Longview Solutions Group"
            width={266}
            height={120}
            className="h-10 w-auto sm:h-11 lg:h-14"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="group relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-dark-charcoal hover:text-signal-gold px-3 py-2 text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-b-md border border-light-gray bg-clean-white py-2 shadow-lg">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="text-dark-charcoal hover:bg-light-gray hover:text-signal-gold block px-4 py-2 text-sm transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact/consultation"
            className="bg-signal-gold hover:bg-signal-gold/90 ml-4 rounded px-5 py-2 text-sm font-bold tracking-wide text-clean-white transition-colors"
          >
            REQUEST CONSULTATION
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-command-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — accordion style to reduce scroll depth */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-light-gray bg-clean-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-light-gray last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm font-semibold tracking-wide text-dark-charcoal"
                  onClick={() =>
                    setExpandedMobile(expandedMobile === item.label ? null : item.label)
                  }
                  aria-expanded={expandedMobile === item.label}
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 text-medium-gray transition-transform ${expandedMobile === item.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedMobile === item.label && item.dropdown && (
                  <div className="ml-4 pb-2">
                    <Link
                      href={item.href}
                      className="text-dark-charcoal hover:text-signal-gold block py-1.5 text-sm font-medium transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Overview
                    </Link>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-medium-gray hover:text-signal-gold block py-1.5 text-sm transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact/consultation"
              className="bg-signal-gold mt-3 block rounded px-5 py-2.5 text-center text-sm font-bold tracking-wide text-clean-white"
              onClick={() => setMobileOpen(false)}
            >
              REQUEST CONSULTATION
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
