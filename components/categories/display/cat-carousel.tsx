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
    <div className="mx-auto w-full max-w-5xl overflow-hidden border border-red-600 px-3">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: 'center',
          loop: false
        }}
      >
        <CarouselContent className="-ml-4 flex md:-ml-6">
          {list.map((item, index) => (
            <CarouselItem
              key={index}
              className="max-w-[380px] basis-3/4 md:hidden md:max-w-[350px] md:basis-2/3"
            >
              <Link href={createUrl(item.path, newParams)}>
                <div className="">
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
                        className="h-[500px] w-full max-w-[380px] rounded-xl object-contain md:max-w-[350px]"
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
