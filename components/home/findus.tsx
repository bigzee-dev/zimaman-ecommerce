import { lora } from '@/app/fonts';

import { Card, CardContent } from '@/components/ui/card';

import { MapPin, Phone, Mail, Clock, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { redBtn } from '@/app/ui/custom-classes';

export default function FindUs() {
  const locations = [
    {
      id: 1,
      name: 'Downtown Flagship Store',
      address: 'Old Mall, Maun / next to:',
      city: 'Access bank, CEDA, Portsway Pharmacy',
      phone: '(267) 72664512/75534775',
      email: 'enquiries@zimapackaging.co.bw',
      hours: {
        weekdays: '8:00 AM - 17:00 PM',
        saturday: '8:00 AM - 13:00 PM',
        sunday: 'Closed'
      },
      features: ['Flagship', 'Personal Shopping', 'Alterations'],
      isOpen: true
    }
  ];
  return (
    <div className="bg-darker w-full">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 md:pt-12">
        <h2 className={`mb-4 w-full text-center text-2xl font-bold text-transparent md:text-6xl`}>
          <span
            className={` ${lora.className} bg-gradient-to-r from-blue-900 via-red-700 to-yellow-700 bg-clip-text`}
          >
            Find us Here
          </span>
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center font-content text-base font-medium text-neutral-400">
          Come check out our shop in Maun! We're in the Old Mall, near Access Bank — opposite to
          CEDA and Portsway Pharmacy.
        </p>
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-12">
          {/* Left Container - Location */}
          <div className="col-span-7 space-y-6">
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/maun-map.png?height=606&width=838"
                alt="Store location map"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right Container - How to Order */}
          <div className="col-span-5 space-y-7 font-content">
            <h2
              className={` ${lora.className} text-2xl font-semibold md:text-3xl dark:text-neutral-400`}
            >
              Old Mall, Maun
            </h2>
            <div className="grid w-full grid-cols-1">
              {locations.map((location) => (
                <Card
                  key={location.id}
                  className="relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="mb-2 text-xl">{location.name}</CardTitle>
                      <div className="mb-2 flex items-center gap-2">
                        <Badge
                          variant={location.isOpen ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {location.isOpen ? 'Open Now' : 'Closed'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {location.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardHeader> */}

                  <CardContent className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400" />
                      <div className="text-sm">
                        <p className="font-medium text-neutral-300">{location.address}</p>
                        <p className="text-neutral-400">{location.city}</p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-neutral-400" />
                        <p className="text-neutral-300 hover:underline">{location.phone}</p>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-neutral-400" />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-neutral-300 hover:underline"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 dark:text-neutral-400" />
                      <div className="space-y-1 text-sm text-neutral-300">
                        <p>
                          <span className="font-medium dark:text-neutral-400">Mon-Fri:</span>{' '}
                          {location.hours.weekdays}
                        </p>
                        <p>
                          <span className="font-medium dark:text-neutral-400">Saturday:</span>{' '}
                          {location.hours.saturday}
                        </p>
                        <p>
                          <span className="font-medium dark:text-neutral-400">Sunday:</span>{' '}
                          {location.hours.sunday}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-4">
                      <Link href="/contact" className={` ${redBtn} `}>
                        Contact Us
                      </Link>
                      <Link
                        href="/contact"
                        className="flex h-[2.6rem] w-[2.6rem] items-center justify-center bg-neutral-200 p-1.5 text-base font-semibold text-neutral-800 hover:bg-blue-700"
                      >
                        <MessageCircleMore className="h-6 w-6 text-red-700" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
//       </div>
