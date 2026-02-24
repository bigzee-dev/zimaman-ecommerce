import { lora } from '@/app/fonts';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default function FindUs() {
  return (
    <div className="w-full bg-darker">
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* ── Section Header ── */}
        <div className="flex flex-col gap-4 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-content text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Visit Us In Person
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              <span
                className={`${lora.className} bg-gradient-to-r from-blue-500 via-red-600 to-yellow-500 bg-clip-text text-transparent`}
              >
                Find Us Here
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-content text-sm leading-relaxed text-neutral-400 md:text-right">
            Come check out our shop in Maun. We&apos;re in the Old Mall, near Access Bank — opposite
            CEDA and Portsway Pharmacy.
          </p>
        </div>

        {/* ── Main Card ── */}
        <div className="overflow-hidden rounded-xl border border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left — Map Image */}
            <div className="relative col-span-7">
              <div className="relative h-[300px] w-full md:h-full md:min-h-[460px]">
                <Image
                  src="/maun-map.png?height=606&width=838"
                  alt="Store location map – Old Mall, Maun"
                  fill
                  className="object-cover object-center"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />

                {/* Open badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-green-800/50 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="font-content text-xs font-medium text-green-400">
                    Open Today
                  </span>
                </div>

                {/* Bottom overlay — location label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-content text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Botswana
                  </p>
                  <p className={`${lora.className} mt-1 text-2xl font-semibold text-white`}>
                    Old Mall, Maun
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Info Panel */}
            <div className="col-span-5 flex flex-col justify-between bg-neutral-900/70 p-8 md:p-10">
              <div className="space-y-7">
                {/* Address */}
                <div>
                  <p className="mb-3 font-content text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    Address
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                    <div>
                      <p className="font-content text-sm font-medium text-neutral-200">
                        Old Mall, Maun
                      </p>
                      <p className="mt-1 font-content text-xs leading-relaxed text-neutral-500">
                        Next to Access Bank, CEDA
                        <br />
                        &amp; Portsway Pharmacy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-800" />

                {/* Contact */}
                <div>
                  <p className="mb-3 font-content text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    Contact
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+26772664512" className="group flex items-center gap-3">
                      <Phone className="h-4 w-4 flex-shrink-0 text-neutral-600 transition-colors group-hover:text-red-600" />
                      <span className="font-content text-xs text-neutral-400 transition-colors group-hover:text-neutral-200">
                        (267) 72664512 / 75534775
                      </span>
                    </a>
                    <a
                      href="mailto:enquiries@zimapackaging.co.bw"
                      className="group flex items-center gap-3"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 text-neutral-600 transition-colors group-hover:text-red-600" />
                      <span className="break-all font-content text-xs text-neutral-400 transition-colors group-hover:text-neutral-200">
                        enquiries@zimapackaging.co.bw
                      </span>
                    </a>
                  </div>
                </div>

                <div className="h-px bg-neutral-800" />

                {/* Hours */}
                <div>
                  <p className="mb-3 font-content text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    Store Hours
                  </p>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-600" />
                    <div className="flex-1 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-content text-xs text-neutral-500">Mon – Fri</span>
                        <span className="font-content text-xs tabular-nums text-neutral-300">
                          8:00 AM – 5:00 PM
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-content text-xs text-neutral-500">Saturday</span>
                        <span className="font-content text-xs tabular-nums text-neutral-300">
                          8:00 AM – 1:00 PM
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-content text-xs text-neutral-500">Sunday</span>
                        <span className="font-content text-xs font-medium text-red-700">
                          Closed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              {/* <div className="mt-10 flex items-center gap-3 border-t border-neutral-800 pt-7">
                <Link href="/contact" className={`${redBtn}`}>
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="flex h-[2.6rem] w-[2.6rem] items-center justify-center border border-neutral-700 bg-transparent text-neutral-400 transition-all hover:border-red-700 hover:text-red-700"
                >
                  <MessageCircleMore className="h-5 w-5" />
                </Link>
              </div> */}
            </div>
          </div>

          {/* Brand accent bar */}
          <div className="h-[3px] bg-gradient-to-r from-blue-800 via-red-600 to-yellow-500" />
        </div>
      </section>
    </div>
  );
}
