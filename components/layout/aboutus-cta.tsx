import { lora, notoSans } from '@/app/fonts';
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
            <div className="space-y-6">
              <p className={` ${lora.className} text-darkmuted text-2xl font-medium`}>Our Story</p>
              <h2
                className={`${lora.className} dark:text-darkmain text-4xl font-bold leading-tight sm:text-5xl`}
              >
                CRAFTING QUALITY
                <br />
                SINCE 2015
              </h2>

              <ul className="mt-6 space-y-3 text-neutral-400">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className={`${notoSans.className} flex items-center gap-x-3 text-sm`}
                  >
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
