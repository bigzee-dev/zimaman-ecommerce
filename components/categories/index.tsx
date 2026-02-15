'use client';

import { redBtn } from '@/app/ui/custom-classes';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import type { Collection } from 'lib/shopify/types';

interface CategoryCarouselProps {
  collections: Collection[];
}

export default function CategoryCarousel({ collections }: CategoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.75;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="w-full border border-neutral-300 bg-darker dark:border-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 pb-10 md:px-2 lg:px-2">
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex items-center border-b-2 border-yellow-600 pb-1 text-yellow-600">
            <BiSolidCategory className="mr-1.5 h-6 w-6" /> {/*text-[#925c11]*/}
            <span className={`font-heading text-sm font-semibold dark:text-yellow-600`}>
              Categories
            </span>
          </div>
        </div>

        <div className="mb-10 flex items-center justify-between">
          <h2
            className={`font-heading font-bold text-neutral-800 md:text-3xl dark:text-neutral-400`}
          >
            Browse by Category
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-border bg-lighter"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5 dark:text-gray-500" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-border bg-lighter"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5 dark:text-gray-500" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex snap-x gap-x-12 overflow-x-auto pb-6"
          onScroll={checkScrollability}
        >
          {collections.map((collection) => (
            <Link
              key={collection.handle}
              href={collection.path}
              className="flex min-w-[140px] snap-start flex-col items-center sm:min-w-[190px]"
            >
              <div className="relative mb-4 flex h-[140px] w-[140px] items-center justify-center rounded-full border border-border bg-white p-4 sm:h-[190px] sm:w-[190px] dark:border-none dark:bg-neutral-200/95 dark:bg-neutral-50">
                {collection.image && (
                  <Image
                    src={collection.image.url}
                    alt={collection.image.altText || collection.title}
                    fill
                    // width={collection.image.width}
                    // height={collection.image.height}
                    className="rounded-full object-cover"
                  />
                )}
              </div>
              <span
                className={`text-center text-sm font-medium uppercase text-neutral-600 dark:text-neutral-300`}
              >
                {collection.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex w-full justify-center">
          <Link href="/search" className={redBtn} style={{ justifySelf: 'center' }}>
            View All Categories
          </Link>
        </div>
      </div>

      {/* <div className="mt-6 border-t dark:border-gray-500/20"></div> */}
    </section>
  );
}
