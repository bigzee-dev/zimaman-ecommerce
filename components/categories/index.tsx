'use client';

import { whiteBtn } from '@/app/ui/custom-classes';
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700">
      {/* SVG background — same design language as blog header */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hosting-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#33bff2" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hosting-dots)" />

        {/* Large background circles — right side, behind image */}
        <circle cx="78%" cy="50%" r="300" fill="white" fillOpacity="0.06" />
        <circle cx="78%" cy="50%" r="200" fill="white" fillOpacity="0.03" />

        {/* Diagonal accent lines */}
        <div className="hidden md:block">
          <line
            x1="38%"
            y1="0"
            x2="58%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.07"
          />
          <line
            x1="48%"
            y1="0"
            x2="68%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.05"
          />
          <line
            x1="28%"
            y1="0"
            x2="48%"
            y2="100%"
            stroke="#33bff2"
            strokeWidth="1"
            strokeOpacity="0.05"
          />
        </div>

        {/* Decorative polygon — bottom right */}
        <polygon
          points="92%,75% 95%,68% 98%,75% 95%,82%"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Horizontal rule lines */}
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.15"
        />
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#33bff2" strokeWidth="1" strokeOpacity="0.1" />
      </svg>

      {/* Decorative rings — bottom left */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/[0.1]" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-52 w-52 rounded-full border border-white/[0.1]" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-24 w-24 rounded-full border border-white/[0.1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 pb-10 md:px-2 lg:px-2">
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex items-center border-b-2 border-white/80 pb-1">
            <BiSolidCategory className="mr-1.5 h-6 w-6 text-white/80" />
            <span className="font-heading text-sm font-semibold text-white/80">Categories</span>
          </div>
        </div>

        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading font-bold text-white md:text-4xl">Browse by Category</h2>
          <div className="hidden space-x-2 md:flex">
            <Button
              variant="outline"
              className="size-10 rounded-xl border-white/30 bg-white/70 text-white hover:bg-white/20 hover:text-white"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-8 w-8 text-neutral-700" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              className="size-10 rounded-xl border-white/30 bg-white/70 text-white hover:bg-white/20 hover:text-white"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight size={48} className="size-6 text-neutral-700" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        {/* Mobile: 2-column grid | md+: horizontal carousel */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-2 gap-6 pb-6 md:flex md:snap-x md:gap-x-12 md:overflow-x-auto md:[overflow-y:hidden] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
          onScroll={checkScrollability}
        >
          {collections.map((collection) => (
            <Link
              key={collection.handle}
              href={collection.path}
              className="flex flex-col items-center md:min-w-[140px] md:snap-start lg:min-w-[190px]"
            >
              <div className="relative mb-4 flex h-[120px] w-[120px] items-center justify-center rounded-full border border-neutral-400 bg-white/10 p-4 md:h-[140px] md:w-[140px] lg:h-[190px] lg:w-[190px]">
                {collection.image && (
                  <Image
                    src={collection.image.url}
                    alt={collection.image.altText || collection.title}
                    fill
                    className="rounded-full object-cover"
                  />
                )}
              </div>
              <span className="text-center text-sm font-medium uppercase text-white/90 md:text-base">
                {collection.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex w-full justify-center">
          <Link href="/search" className={whiteBtn} style={{ justifySelf: 'center' }}>
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
