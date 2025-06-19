import { notoSans } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { transparentBtn, whiteBtn } from '@/app/ui/custom-classes';

const features = [
  'Visually stunning, secure websites',
  'Mobile Responsiveness, works flawlessly on all devices',
  'AI Integration, SEO Optimization, Site Analytics '
];

export default function AboutUsCTA() {
  return (
    <section className="mt-4 px-2 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl px-10 py-16 dark:bg-yellow-200/10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="">
            <div className="space-y-4">
              <p
                className={` ${notoSans.className} text-2xl font-medium text-neutral-400 underline`}
              >
                Our Story
              </p>
              <h2 className={`text-4xl font-bold leading-tight dark:text-neutral-300 sm:text-5xl`}>
                CRAFTING QUALITY
                <br />
                SINCE 2015
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-neutral-300/85">
                We're passionate about bringing you the finest products with exceptional
                craftsmanship. Our journey started with a simple mission: to create meaningful
                connections through quality goods.
              </p>
              <ul className="mt-6 space-y-2 text-neutral-400">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-3 font-sans text-base">
                    <FaCheck aria-hidden="true" className="h-auto w-3 flex-none text-[#925c11]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex gap-4">
              <Link href="/contact" className={` ${whiteBtn} `}>
                About Us
              </Link>
              <Link href="/contact" className={` ${transparentBtn} `}>
                Our Products
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/utensils.jpg"
                alt="Our team working together"
                width={1000}
                height={667}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
