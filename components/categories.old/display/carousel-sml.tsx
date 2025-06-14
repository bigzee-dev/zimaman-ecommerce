'use client';
import { Card, CardContent } from '@/components/ui/carousel-small/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel-small/carousel';
import { useScreenWidth } from '@/hooks/screenwidth';
import { cn, createUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ListItem } from './';

export default function CarouselSmall({ list }: { list: ListItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const screenWidth = useScreenWidth();
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
    <div className="mx-auto w-full max-w-5xl overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full pl-4 pr-4"
        opts={{
          align: screenWidth < 460 ? 'start' : 'center',
          loop: false
        }}
      >
        <CarouselContent>
          {list.map((item, index) => (
            <CarouselItem key={index} className="max-w-[380px] basis-5/6">
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
      <div className="m-4">
        <div className="flex items-center justify-center gap-2 py-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-300 ease-in-out',
                current === index ? 'bg-primary w-3' : 'bg-primary/50'
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
