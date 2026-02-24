'use client';

import { useState } from 'react';
import { lora } from '@/app/fonts';
import { redBtn } from '@/app/ui/custom-classes';
import { User, Mail, Phone, ChevronDown, Send, CheckCircle2 } from 'lucide-react';

const INQUIRY_TYPES = [
  'General Enquiry',
  'Product Information',
  'Bulk / Wholesale Order',
  'Custom Packaging',
  'Delivery & Shipping',
  'Other'
];

const inputBase =
  'w-full rounded-md border border-neutral-800 bg-neutral-950/70 py-3 font-content text-sm text-neutral-200 placeholder-neutral-600 transition-colors focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700/40';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire up your submission logic here (e.g. server action, API route)
    setSubmitted(true);
  };

  return (
    <div className="mt-12 overflow-hidden rounded-xl border border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* ── Left — context panel ── */}
        <div className="col-span-5 flex flex-col justify-between bg-gradient-to-br from-blue-950/50 via-neutral-900 to-red-950/30 p-8 md:p-10">
          <div>
            <p className="mb-3 font-content text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Get In Touch
            </p>
            <h3
              className={`${lora.className} mb-4 text-2xl font-semibold leading-snug text-neutral-100 md:text-3xl`}
            >
              Ready to Get Started?
            </h3>
            <p className="font-content text-sm leading-relaxed text-neutral-400">
              Have a question about our products, pricing, or bulk orders? Fill
              out the form and our team will get back to you shortly.
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-10 space-y-4">
            {[
              { label: 'Fast Response', sub: 'We reply within 24 hours' },
              { label: 'Expert Support', sub: 'Our team is ready to help' },
              {
                label: 'Custom Orders',
                sub: 'Tailored packaging solutions available'
              }
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                <div>
                  <p className="font-content text-sm font-medium text-neutral-300">
                    {item.label}
                  </p>
                  <p className="font-content text-xs text-neutral-500">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — form ── */}
        <div className="col-span-7 bg-neutral-900/60 p-8 md:p-10">
          {submitted ? (
            /* Success state */
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-700/30 bg-red-700/10">
                <CheckCircle2 className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h4
                  className={`${lora.className} mb-2 text-xl font-semibold text-neutral-200`}
                >
                  Message Sent!
                </h4>
                <p className="font-content text-sm text-neutral-400">
                  Thanks for reaching out. We&apos;ll be in touch within 24
                  hours.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="font-content text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 — Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="cf-name"
                    className="block font-content text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                    <input
                      id="cf-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className={`${inputBase} pl-10 pr-4`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="cf-email"
                    className="block font-content text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                    <input
                      id="cf-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={`${inputBase} pl-10 pr-4`}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 — Phone + Inquiry type */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="cf-phone"
                    className="block font-content text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                  >
                    Phone{' '}
                    <span className="normal-case tracking-normal text-neutral-600">
                      (optional)
                    </span>
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                    <input
                      id="cf-phone"
                      type="tel"
                      placeholder="+267 7X XXX XXX"
                      className={`${inputBase} pl-10 pr-4`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="cf-subject"
                    className="block font-content text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                  >
                    Inquiry Type <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                    <select
                      id="cf-subject"
                      required
                      defaultValue=""
                      className={`${inputBase} appearance-none pl-4 pr-10`}
                    >
                      <option value="" disabled className="bg-neutral-900 text-neutral-500">
                        Select a topic…
                      </option>
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-neutral-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="cf-message"
                  className="block font-content text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="cf-message"
                  required
                  rows={4}
                  placeholder="Tell us about your requirements, product inquiries, or any questions…"
                  className={`${inputBase} resize-none px-4`}
                />
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="font-content text-xs text-neutral-600">
                  * Required fields
                </p>
                <button
                  type="submit"
                  className={`${redBtn} flex items-center gap-2`}
                >
                  Send Message
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Brand accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-blue-800 via-red-600 to-yellow-500" />
    </div>
  );
}
