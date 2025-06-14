import { notoSans } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutUsCTA() {
  return (
    <section className="mt-4 px-2 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl px-10 py-16 dark:bg-yellow-200/10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className={` ${notoSans.className} text-2xl font-medium text-red-500 underline`}>
                Our Story
              </p>
              <h2
                className={` ${notoSans.className} text-4xl font-bold leading-tight dark:text-neutral-300 sm:text-5xl`}
              >
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
            <Button
              size="lg"
              className="rounded-xl bg-neutral-200 px-4 py-2 text-sm font-semibold hover:bg-blue-700 dark:text-neutral-800"
            >
              Learn More About Us
            </Button>
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
