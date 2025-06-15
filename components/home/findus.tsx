import Image from 'next/image';
import { notoSans } from '@/app/fonts';
import { Button } from '@/components/ui/button';

export default function LocationOrdering() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-20">
        {/* Left Container - Location */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold dark:text-neutral-400 md:text-3xl">Find us here</h2>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/maun-map.png?height=606&width=838"
              alt="Store location map"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Container - How to Order */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold dark:text-neutral-400 md:text-3xl">
            How to order from Us
          </h2>
          <div className="space-y-4">
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
          <Button
            size="lg"
            className="mt-1 min-w-36 rounded-lg bg-neutral-200 px-5 py-1.5 text-base font-semibold hover:bg-blue-700 dark:text-neutral-800"
          >
            Contact Us <span aria-hidden="true"> →</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
