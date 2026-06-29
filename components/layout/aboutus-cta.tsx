import { lora, notoSans } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { redBtn, transparentBtn } from '@/app/ui/custom-classes';

const features = ['Proudly serving Maun and businesses across Botswana'];

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '500+', label: 'Products Available' },
  { value: '2013', label: 'Est. in Maun' }
];

export default function AboutUsCTA() {
  return (
    <section className="w-full bg-neutral-900 px-4 py-16 md:py-20 dark:bg-darker">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* Heading */}
            <h2
              className={`mb-5 font-heading text-3xl font-bold leading-[1] text-neutral-300 md:text-6xl`}
            >
              Selling Quality <br />
              <span className="bg-gradient-to-r from-blue-500 via-red-600 to-yellow-500 bg-clip-text italic text-transparent">
                Since 2013
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="flex items-baseline justify-end gap-2 text-red-600">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="font-display text-2xl leading-none">
                  ★
                </span>
              ))}
            </div>
            <p className="font-display tracking-editorial mt-3 text-3xl font-medium text-neutral-400">
              <span className="font-mono">4.9</span>
              <span className="text-ink-500"> / 5</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-xl border border-neutral-700">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── Left — Content ── */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-neutral-800 p-8 py-10 md:px-12 dark:bg-transparent">
              {/* Decorative ghost year — sits behind content */}
              <span
                aria-hidden="true"
                className={`${lora.className} pointer-events-none absolute -bottom-6 -left-4 select-none text-[9rem] font-bold leading-none text-neutral-800/40 md:text-[12rem]`}
              >
                2013
              </span>

              <div className="relative z-10">
                {/* Description */}
                <p className="mb-8 font-content text-base italic leading-relaxed text-neutral-300">
                  For over a decade, Zima Packaging has been Maun&apos;s trusted source for quality
                  Packaging products and Food Service supplies. We believe every customer deserves
                  reliable products and homest pricing.
                </p>

                {/* Stats row */}
                <div className="mb-8 grid grid-cols-3 divide-x divide-neutral-700 border-y border-neutral-700 py-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0">
                      <p className={`font-heading text-4xl font-semibold text-neutral-200`}>
                        {stat.value}
                      </p>
                      <p className="mt-1 font-content text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <ul className="mb-8 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className={`${notoSans.className} flex items-center gap-2 text-sm text-neutral-400`}
                    >
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-red-700/15">
                        <FaCheckCircle className="h-5 w-5 text-red-500" />
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
                src="/2151.jpg"
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
