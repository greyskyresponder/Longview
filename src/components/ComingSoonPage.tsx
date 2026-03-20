import Link from 'next/link';

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <section className="min-h-[60vh] bg-command-navy relative overflow-hidden flex items-center justify-center">
      {/* Shield watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 200 240" className="w-[400px] h-[480px]" fill="currentColor">
          <path
            d="M100 0L200 40V140C200 200 100 240 100 240S0 200 0 140V40L100 0Z"
            className="text-signal-gold"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-20">
        {/* Gold accent line */}
        <div className="w-16 h-0.5 bg-signal-gold mx-auto mb-8" />

        <p className="font-mono text-xs tracking-[0.3em] text-signal-gold uppercase mb-4">
          Section Under Development
        </p>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-clean-white mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-medium-gray text-lg leading-relaxed mb-8">{description}</p>
        )}

        <p className="text-medium-gray text-sm mb-10">
          This operational section is currently being built and will be available soon. For
          immediate assistance, contact our team directly.
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

        {/* Gold accent line */}
        <div className="w-16 h-0.5 bg-signal-gold mx-auto mt-12" />
      </div>
    </section>
  );
}
