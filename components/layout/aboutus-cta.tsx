import { lora, notoSans } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { redBtn, transparentBtn } from '@/app/ui/custom-classes';

const features = ['Proudly serving Maun and businesses across Botswana'];

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '500+', label: 'Products Available' },
  { value: '2013', label: 'Est. in Maun' }
];

export default function AboutUsCTA() {
  return (
    <section className="w-full bg-darker px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── Left — Content ── */}
            <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12">
              {/* Decorative ghost year — sits behind content */}
              <span
                aria-hidden="true"
                className={`${lora.className} pointer-events-none absolute -bottom-6 -left-4 select-none text-[9rem] font-bold leading-none text-neutral-800/40 md:text-[12rem]`}
              >
                2013
              </span>

              <div className="relative z-10">
                {/* Section label */}
                <p className="mb-3 font-content text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  Our Story
                </p>

                {/* Heading */}
                <h2
                  className={`${lora.className} mb-5 text-3xl font-semibold leading-tight text-neutral-100 md:text-4xl`}
                >
                  Selling Quality{' '}
                  <span className="bg-gradient-to-r from-blue-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                    Since 2013
                  </span>
                </h2>

                {/* Description */}
                <p className="mb-8 font-content text-sm leading-relaxed text-neutral-400">
                  For over a decade, Zima Packaging has been Maun&apos;s trusted source for quality
                  Packaging products and Food Service supplies. We believe every customer deserves
                  reliable products and homest pricing.
                </p>

                {/* Stats row */}
                <div className="mb-8 grid grid-cols-3 divide-x divide-neutral-800 border-y border-neutral-800 py-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0">
                      <p className={`${lora.className} text-2xl font-semibold text-neutral-200`}>
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-content text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <ul className="mb-10 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className={`${notoSans.className} flex items-start gap-3 text-sm text-neutral-400`}
                    >
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-red-700/40 bg-red-700/15">
                        <Check className="h-2.5 w-2.5 text-red-500" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className={`${redBtn}`}>
                    About Us
                  </Link>
                  <Link href="/contact" className={`${transparentBtn}`}>
                    Our Products
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Right — Image ── */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src="/utensils.jpg"
                alt="Zima Packaging — quality products since 2013"
                fill
                className="object-cover"
              />

              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:from-black/20" />

              {/* Floating brand stamp */}
              <div className="absolute bottom-6 right-6 border border-neutral-700/60 bg-black/70 p-5 backdrop-blur-sm">
                <p className="font-content text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Established
                </p>
                <p className={`${lora.className} mt-1 text-4xl font-semibold text-red-600`}>2013</p>
                <div className="mt-2 h-px bg-gradient-to-r from-blue-700 via-red-600 to-yellow-500" />
                <p className="mt-2 font-content text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Maun, Botswana
                </p>
              </div>
            </div>
          </div>

          {/* Brand accent bar */}
          <div className="h-[3px] bg-gradient-to-r from-blue-800 via-red-600 to-yellow-500" />
        </div>
      </div>
    </section>
  );
}
