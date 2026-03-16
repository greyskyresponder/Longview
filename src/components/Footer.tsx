import Link from 'next/link';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company/about' },
      { label: 'Leadership', href: '/company/leadership' },
      { label: 'Mission & Values', href: '/company/mission-values' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Services', href: '/capabilities/services' },
      { label: 'Programs', href: '/capabilities/programs' },
      { label: 'Methodology', href: '/capabilities/methodology' },
    ],
  },
  {
    title: 'Government',
    links: [
      { label: 'Contract Vehicles', href: '/government/contract-vehicles' },
      { label: 'Past Performance', href: '/government/past-performance' },
      { label: 'Capability Statements', href: '/government/capability-statements' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Request Consultation', href: '/contact/consultation' },
      { label: 'Teaming Opportunities', href: '/contact/teaming' },
      { label: 'Media & Speaking', href: '/contact/media' },
      { label: 'Grey Sky Responder Portal', href: '/community/grey-sky-responder-society' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-command-navy text-clean-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="font-display text-lg font-bold tracking-tight">
              LONGVIEW SOLUTIONS GROUP
            </span>
            <p className="text-medium-gray mt-3 text-sm leading-relaxed">
              Strategic Capability.
              <br />
              Operational Deployment.
              <br />
              National Reach.
            </p>
            <div className="mt-4 flex flex-col gap-1 font-mono text-xs text-medium-gray">
              <span>SAM.gov Registered</span>
              <span>Florida DMS State Term Contract</span>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-signal-gold mb-3 text-xs font-bold uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-medium-gray hover:text-warm-gold-light text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel-blue">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row">
          <p className="text-medium-gray text-xs">
            &copy; {new Date().getFullYear()} Longview Solutions Group LLC. All rights reserved.
          </p>
          <p className="font-display text-warm-gold-light text-xs italic tracking-wide">
            &ldquo;Vigilance. Perseverance. Justice.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
