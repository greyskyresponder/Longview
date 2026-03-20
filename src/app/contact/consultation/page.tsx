import type { Metadata } from 'next';
import { ConsultationForm } from '@/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Request Consultation',
  description:
    'Contact Longview Solutions Group for emergency management consultation, IMT deployment, EOC staffing, and disaster response support.',
};

export default function ConsultationPage() {
  return (
    <section className="bg-command-navy min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-signal-gold mx-auto mb-8" />
          <p className="font-mono text-xs tracking-[0.3em] text-signal-gold uppercase mb-4">
            Contact
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-clean-white mb-4">
            Request Consultation
          </h1>
          <p className="text-medium-gray text-base max-w-xl mx-auto">
            Whether you need immediate deployment support or long-term emergency management
            planning, our team is ready to help. For active disaster support, call our 24/7 line
            directly.
          </p>
        </div>

        {/* Emergency callout */}
        <div className="bg-alert-red/10 border border-alert-red/30 p-4 mb-10 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-alert-red animate-pulse shrink-0" />
          <div>
            <p className="text-clean-white text-sm font-semibold">Active Disaster?</p>
            <p className="text-medium-gray text-xs">
              Call our 24/7 Deployment Line:{' '}
              <a
                href="tel:+18046835780"
                className="text-signal-gold font-mono hover:text-warm-gold-light"
              >
                (804) 683-5780
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <ConsultationForm />

        {/* Bottom accent */}
        <div className="w-16 h-0.5 bg-signal-gold mx-auto mt-16" />
      </div>
    </section>
  );
}
