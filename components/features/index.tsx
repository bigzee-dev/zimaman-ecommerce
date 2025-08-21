// import type { LucideIcon } from 'lucide-react';
import { notoSans } from '@/app/fonts';
import { FaShippingFast } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { IoChatboxEllipses, IoShieldCheckmarkSharp } from 'react-icons/io5';

type Feature = {
  icon:
    | typeof FaShippingFast
    | typeof GiShoppingBag
    | typeof IoShieldCheckmarkSharp
    | typeof IoChatboxEllipses;
  title: string;
  description: string;
};

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: FaShippingFast,
      title: 'Free Shipping',
      description: 'For all orders $200'
    },
    {
      icon: GiShoppingBag,
      title: '1 & 1 Returns',
      description: 'Cancellation after 1 day'
    },
    {
      icon: IoShieldCheckmarkSharp,
      title: '100% Secure Payments',
      description: 'Gurantee secure payments'
    },
    {
      icon: IoChatboxEllipses,
      title: '24/7 Dedicated Support',
      description: 'Anywhere & anytime'
    }
  ];

  return (
    <div className="w-full pb-14 pt-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-y-4">
              <div className="mr-2 flex h-20 w-20 items-center justify-center rounded-full border border-gray-500/25 bg-neutral-50 p-3 text-red-600 dark:text-slate-400">
                <feature.icon size={42} strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <h3
                  className={` ${notoSans.className} whitespace-nowrap text-lg font-semibold text-neutral-800 dark:text-neutral-300`}
                >
                  {feature.title}
                </h3>
                <p className="mt-1 font-sans text-[0.95rem] text-neutral-500 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
