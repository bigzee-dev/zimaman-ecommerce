import { Card, CardContent } from '@/components/ui/carousel-large/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel-large/carousel';

import { ListItem } from './';

export default function CarouselSpacing({}: ListItem[]) {
  return (
    <div className="relative w-full max-w-4xl">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-4rem] top-1/2 -translate-y-1/2 transform" />
        <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 transform" />
      </Carousel>
    </div>
  );
}
