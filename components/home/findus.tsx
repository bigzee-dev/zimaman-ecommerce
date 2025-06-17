import { notoSans } from '@/app/fonts';

import { Card, CardContent } from '@/components/ui/card';

import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className={`mb-12 w-full text-center text-2xl font-bold text-transparent md:text-5xl`}>
        <span className="bg-gradient-to-r from-blue-900 via-red-700 to-yellow-700 bg-clip-text">
          Find us here
        </span>
      </h2>
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
        <div className="col-span-5 space-y-7">
          <h2
            className={` ${notoSans.className} text-2xl font-semibold dark:text-neutral-400 md:text-3xl`}
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
                    <div>
                      <p className="font-medium text-neutral-300">{location.address}</p>
                      <p className="text-neutral-400">{location.city}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-neutral-400" />
                      <p className="text-neutral-300 hover:underline">{location.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
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
                  <div className="flex gap-2 pt-2">
                    <Link
                      href="/contact"
                      className="flex min-w-36 items-center gap-2 rounded-lg bg-neutral-200 px-5 py-1.5 text-base font-semibold hover:bg-blue-700 dark:text-neutral-800"
                    >
                      Contact us
                      <Navigation className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center rounded-lg bg-neutral-200 p-1.5 text-base font-semibold hover:bg-blue-700 dark:text-neutral-800"
                    >
                      <Phone className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
//       </div>
