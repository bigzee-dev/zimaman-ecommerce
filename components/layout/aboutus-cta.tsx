import { notoSans } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
                SINCE 2010
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-neutral-400">
                We're passionate about bringing you the finest products with exceptional
                craftsmanship. Our journey started with a simple mission: to create meaningful
                connections through quality goods.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="mt-8 inline-flex min-w-36 items-center justify-center rounded-[0.60rem] bg-neutral-200 px-5 py-[0.445rem] text-base font-medium hover:bg-blue-700 dark:text-neutral-800"
              >
                Contact us
              </Link>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-w-36 items-center justify-center rounded-[0.60rem] border bg-white/5 px-5 py-[0.445rem] text-base font-medium hover:bg-blue-700 dark:border-neutral-600 dark:text-neutral-300"
              >
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
