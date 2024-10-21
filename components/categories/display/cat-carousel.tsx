'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import { cn, createUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ListItem {
  path: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export default function DisplayCarousel({ list }: { list: ListItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden px-2">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: 'center',
          loop: true
        }}
      >
        <CarouselContent className="-ml-4 flex md:-ml-6">
          {list.map((item, index) => (
            <CarouselItem key={index} className="basis-2/3 md:basis-2/3 md:pl-6 lg:basis-1/3">
              <Link href={createUrl(item.path, newParams)}>
                <div className="p-1">
                  <Card
                    className={cn(
                      'transform transition-all duration-300 ease-in-out',
                      current === index ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                    )}
                  >
                    <CardContent className="p-0">
                      <Image
                        src={item.image.url}
                        alt=""
                        width={item.image.width}
                        height={item.image.height}
                        style={{ objectFit: 'cover' }}
                        className="h-[450px] w-full rounded-xl object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="">
        <div className="flex items-center justify-center gap-2 py-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                current === index ? 'bg-primary w-4' : 'bg-primary/50'
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
