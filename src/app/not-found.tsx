import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] bg-command-navy relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-20">
        <p className="font-mono text-6xl font-bold text-signal-gold mb-4">404</p>

        <h1 className="font-display text-2xl md:text-3xl font-bold text-clean-white mb-6">
          Page Not Found
        </h1>

        <p className="text-medium-gray text-base mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Use the navigation
          above or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-block bg-signal-gold text-command-navy font-semibold text-sm tracking-wider px-8 py-3 hover:bg-warm-gold-light transition-colors"
          >
            RETURN TO COMMAND POST
          </Link>
          <a
            href="tel:+18046835780"
            className="inline-block border border-medium-gray text-clean-white font-mono text-sm tracking-wider px-8 py-3 hover:border-signal-gold hover:text-signal-gold transition-colors"
          >
            (804) 683-5780
          </a>
        </div>
      </div>
    </section>
  );
}
