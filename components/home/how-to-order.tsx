import Image from 'next/image';
import { notoSans } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blackBtn, transparentBtn, whiteBtn } from '@/app/ui/custom-classes';

export default function LocationOrdering() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-1">
        {/* Left Container - Location */}
        {/* <div className="space-y-6">
          <h2 className="text-2xl font-bold dark:text-neutral-400 md:text-3xl">Find us here</h2>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/maun-map.png?height=606&width=838"
              alt="Store location map"
              fill
              className="object-cover"
            />
          </div>
        </div> */}

        {/* Right Container - How to Order */}
        <div className="space-y-7">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-neutral-400">
            How to order from Us
          </h2>
          <div className="grid w-full grid-cols-2 gap-x-16 gap-y-4">
            {[
              {
                step: 1,
                title: 'Browse Our Products',
                description:
                  'Explore our wide selection of high-quality products and find exactly what you need for your home or business.'
              },
              {
                step: 2,
                title: 'Contact Us',
                description:
                  'Select your desired items, choose quantities, and add them to your shopping cart. Review your selections before checkout.'
              },
              {
                step: 3,
                title: 'Make Payment',
                description:
                  'Provide your shipping information and payment details through our secure checkout process. We accept all major payment methods.'
              },
              {
                step: 4,
                title: 'Receive Your Order',
                description:
                  'Sit back and relax while we prepare and ship your order. Track your package and receive it at your doorstep within 2-5 business days.'
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="text-xl font-semibold dark:text-red-700">{item.step}.</div>
                <div className="mt-0.5">
                  <h3 className={` ${notoSans.className} mb-1 font-semibold dark:text-neutral-300`}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-[0.94rem] dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 h-[250px] w-full max-w-6xl rounded-2xl bg-gradient-to-r from-blue-900 via-red-700 to-yellow-700">
        <div className="text-center">
          <Card className="inline-block">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center justify-center gap-3">
                <CheckCircle className="h-8 w-8 text-neutral-300/90" />
                <h3 className={` ${notoSans.className} text-3xl font-semibold text-neutral-200`}>
                  Ready to Get Started?
                </h3>
              </div>
              <p className="mb-6 max-w-md text-neutral-300">
                Browse our products now and experience our seamless ordering process.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact" className={` ${transparentBtn} `}>
                  All Products
                </Link>
                <Link href="/contact" className={` ${whiteBtn} `}>
                  About Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
