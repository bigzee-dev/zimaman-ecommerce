import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'React';
import { ListItem } from '.';

export default function Carousel({ list }: { list: ListItem[] }) {
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
    <div className="mx-auto w-full max-w-5xl px-4">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: 'center',
          loop: true
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {list.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 pl-2 md:basis-1/3 md:pl-4 lg:basis-1/4">
              <Link href={createUrl(item.path, newParams)}>
                <div className="p-1">
                  <Card
                    className={cn(
                      'transform transition-all duration-300 ease-in-out',
                      current === index ? 'scale-100' : 'scale-90 opacity-70'
                    )}
                  >
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={item.image.url}
                        alt=""
                        width={item.image.width}
                        height={item.image.height}
                        style={{ objectFit: 'contain' }}
                        className="h-[200px] w-[100px]"
                      />
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center">
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
