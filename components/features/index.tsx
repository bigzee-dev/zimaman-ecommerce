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
    <div className="w-full py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full border border-gray-500/25 bg-white/5 p-2.5 text-neutral-400">
                <feature.icon size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className={` ${notoSans.className} whitespace-nowrap text-lg font-medium text-indigo-900 dark:text-neutral-300`}
                >
                  {feature.title}
                </h3>
                <p className="mt-0.5 font-sans text-sm text-indigo-900 dark:text-neutral-400">
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
