'use client';

import { useState, type FormEvent } from 'react';

const serviceOptions = [
  'Incident Management Teams',
  'EOC Management & Staffing',
  'Disaster Housing Operations',
  'Specialty Response Teams',
  'Human Services Programs',
  'Grey Sky Travel',
  'Strategic Resilience Planning',
  'Exercise Design & Evaluation',
  'National Security Support',
  'Other',
];

const urgencyOptions = [
  { value: 'routine', label: 'Routine', desc: 'Standard response timeline' },
  {
    value: 'urgent',
    label: 'Urgent',
    desc: 'Active event — need support within 72 hours',
  },
  {
    value: 'immediate',
    label: 'Immediate',
    desc: 'Ongoing disaster — need deployment now',
  },
];

export function ConsultationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-steel-blue/30 border border-signal-gold/30 p-8 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-signal-gold uppercase mb-3">
          Message Received
        </p>
        <p className="text-clean-white text-lg mb-2">
          Your consultation request has been submitted.
        </p>
        <p className="text-medium-gray text-sm">
          Our team will respond within 24 hours. For immediate deployment needs, call{' '}
          <a href="tel:+18046835780" className="text-signal-gold hover:text-warm-gold-light">
            (804) 683-5780
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Urgency selector */}
      <fieldset>
        <legend className="font-mono text-xs tracking-[0.2em] text-signal-gold uppercase mb-3">
          Request Urgency
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {urgencyOptions.map((opt) => (
            <label
              key={opt.value}
              className="relative flex items-start gap-3 bg-steel-blue/30 border border-operational-steel p-4 cursor-pointer hover:border-signal-gold/50 transition-colors has-[:checked]:border-signal-gold has-[:checked]:bg-steel-blue/50"
            >
              <input
                type="radio"
                name="urgency"
                value={opt.value}
                defaultChecked={opt.value === 'routine'}
                className="mt-0.5 accent-[#c5933a]"
              />
              <div>
                <span className="text-clean-white text-sm font-semibold block">{opt.label}</span>
                <span className="text-medium-gray text-xs">{opt.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-xs tracking-[0.2em] text-medium-gray uppercase mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-steel-blue/20 border border-operational-steel text-clean-white px-4 py-3 text-sm focus:border-signal-gold focus:outline-none transition-colors placeholder:text-medium-gray/50"
            placeholder="Your name"
          />
        </div>

        {/* Organization */}
        <div>
          <label
            htmlFor="organization"
            className="block font-mono text-xs tracking-[0.2em] text-medium-gray uppercase mb-2"
          >
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            className="w-full bg-steel-blue/20 border border-operational-steel text-clean-white px-4 py-3 text-sm focus:border-signal-gold focus:outline-none transition-colors placeholder:text-medium-gray/50"
            placeholder="Agency or organization"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs tracking-[0.2em] text-medium-gray uppercase mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-steel-blue/20 border border-operational-steel text-clean-white px-4 py-3 text-sm focus:border-signal-gold focus:outline-none transition-colors placeholder:text-medium-gray/50"
            placeholder="you@agency.gov"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block font-mono text-xs tracking-[0.2em] text-medium-gray uppercase mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-steel-blue/20 border border-operational-steel text-clean-white px-4 py-3 text-sm focus:border-signal-gold focus:outline-none transition-colors placeholder:text-medium-gray/50"
            placeholder="(XXX) XXX-XXXX"
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label
          htmlFor="service"
          className="block font-mono text-xs tracking-[0.2em] text-medium-gray uppercase mb-2"
        >
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full bg-steel-blue/20 border border-operational-steel text-clean-white px-4 py-3 text-sm focus:border-signal-gold focus:outline-none transition-colors"
        >
          <option value="">Select a service line</option>
          {serviceOptions.map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs tracking-[0.2em] text-medium-gray uppercase mb-2"
        >
          Mission Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-steel-blue/20 border border-operational-steel text-clean-white px-4 py-3 text-sm focus:border-signal-gold focus:outline-none transition-colors placeholder:text-medium-gray/50 resize-vertical"
          placeholder="Describe your situation, timeline, and support needs..."
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-signal-gold text-command-navy font-semibold text-sm tracking-wider px-10 py-3 hover:bg-warm-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
        </button>

        {status === 'error' && (
          <p className="text-alert-red text-sm">
            Submission failed. Please call{' '}
            <a href="tel:+18046835780" className="underline">
              (804) 683-5780
            </a>{' '}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
