import { lora, notoSans } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { redBtn, transparentBtn } from '@/app/ui/custom-classes';

const features = [
  'Visually stunning, secure websites',
  'Mobile Responsiveness, works flawlessly on all devices',
  'AI Integration, SEO Optimization, Site Analytics '
];

export default function AboutUsCTA() {
  return (
    <section className="mt-4 px-2 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl bg-hetzgray px-16 py-16 dark:bg-yellow-200/10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="">
            <p className={` ${lora.className} mb-2 text-2xl font-medium text-darkmuted`}>
              Our Story
            </p>
            <div className="space-y-6">
              <h2
                className={`font-heading text-4xl font-bold leading-tight text-neutral-300 sm:text-5xl dark:text-darkmain`}
              >
                Selling Quality Since 2013
                <br />
              </h2>

              <ul className="mt-6 space-y-3 text-neutral-300/80">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className={`${notoSans.className} flex items-center gap-x-3 text-sm`}
                  >
                    <FaCheck aria-hidden="true" className="h-auto w-3 flex-none text-neutral-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/contact" className={` ${redBtn} `}>
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
