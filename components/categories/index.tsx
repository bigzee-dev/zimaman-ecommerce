'use client';

import { notoSans } from '@/app/fonts';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BiSolidCategory } from 'react-icons/bi';

const categories = [
  {
    name: 'Watches',
    image: '/placeholder.svg?height=200&width=200',
    href: '/category/watches'
  },
  {
    name: 'Mobile & Tablets',
    image: '/placeholder.svg?height=200&width=200',
    href: '/category/mobile-tablets'
  },
  {
    name: 'Health & Sports',
    image: '/placeholder.svg?height=200&width=200',
    href: '/category/health-sports'
  },
  {
    name: 'Home Appliances',
    image: '/placeholder.svg?height=200&width=200',
    href: '/category/home-appliances'
  },
  {
    name: 'Games & Videos',
    image: '/placeholder.svg?height=200&width=200',
    href: '/category/games-videos'
  },
  {
    name: 'Televisions',
    image: '/placeholder.svg?height=200&width=200',
    href: '/category/televisions'
  }
];

export default function CategoryCarousel() {
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
    <section className="w-full border border-neutral-300 bg-neutral-100 dark:border-transparent dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-2 lg:px-2">
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex items-center text-yellow-600">
            <BiSolidCategory className="mr-2 h-5 w-5" /> {/*text-[#925c11]*/}
            <span className={` ${notoSans.className} text-sm font-medium dark:text-neutral-300/80`}>
              Categories
            </span>
          </div>
          <Link
            href="/search"
            className="self-center rounded-md border border-neutral-500 bg-neutral-900 p-2 px-4 text-sm font-medium text-neutral-200 dark:border-neutral-800 dark:bg-neutral-400/5 dark:text-red-400"
            style={{ justifySelf: 'center' }}
          >
            View All
          </Link>
        </div>

        <div className="mb-10 flex items-center justify-between">
          <h2 className="dark: text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-400">
            Browse by Category
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5 dark:text-gray-500" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200"
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
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex min-w-[140px] snap-start flex-col items-center sm:min-w-[160px]"
            >
              <div className="mb-4 flex h-[140px] w-[140px] items-center justify-center rounded-full bg-neutral-50 p-4 sm:h-[160px] sm:w-[160px] dark:bg-gray-200/95">
                <Image
                  src="/img/spices/fhirsch/bpep1kg-cnv -tpng.png"
                  alt={category.name}
                  width={1024}
                  height={1024}
                  className="object-contain"
                />
              </div>
              <span
                className={` ${notoSans.className} text-center text-sm font-medium uppercase text-neutral-600 dark:text-neutral-300`}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="mt-6 border-t dark:border-gray-500/20"></div> */}
    </section>
  );
}
