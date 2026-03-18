import Image from 'next/image';
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
    title: 'Service Lines',
    links: [
      { label: 'Services Overview', href: '/capabilities/services' },
      { label: 'Specialty Response Teams', href: '/capabilities/srt' },
      { label: 'Grey Sky Travel', href: '/capabilities/grey-sky-travel' },
      { label: 'Programs', href: '/capabilities/programs' },
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
      { label: 'Grey Sky Responder Portal', href: '/community/grey-sky-responder-society' },
      { label: '(804) 683-5780', href: 'tel:+18046835780' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-command-navy text-clean-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — more prominent per reviewer feedback */}
          <div className="lg:col-span-1">
            <Image
              src="/lvsg-logo-navy.png"
              alt="Longview Solutions Group"
              width={200}
              height={90}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-light-gray">
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
                      className="text-light-gray hover:text-warm-gold-light text-sm transition-colors"
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
          <p className="text-xs text-light-gray/70">
            &copy; {new Date().getFullYear()} Longview Solutions Group LLC. All rights reserved.
          </p>
          <p className="font-display text-base italic tracking-wide text-warm-gold-light">
            &ldquo;Vigilance. Perseverance. Justice.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
