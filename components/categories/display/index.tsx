'use client';

import { useScreenWidth } from '@/hooks/screenwidth';
import { Image, SEO } from 'lib/shopify/types';
import { Suspense } from 'react';
import CarouselLarge from './carousel-lrg';
import CarouselSmall from './carousel-sml';

export type ListItem = {
  handle: string;
  title: string;
  description: string;
  image: Image;
  path: string;
  seo: SEO;
  updatedAt: string;
};

// this component displays the categories carousel, the carousel displayed depends on the screen size

export default function DisplayCategoryCarousel({
  list,
  title
}: {
  list: ListItem[];
  title?: string;
}) {
  const screenWidth = useScreenWidth();

  return (
    <>
      <nav>
        {title ? (
          <h3 className="text-grey-900 mb-6 px-4 text-2xl font-medium dark:text-neutral-400">
            {title}
          </h3>
        ) : null}
        {/* categories list rendered in medium to large devices */}
        <ul className="flex w-full justify-center border border-blue-700 px-5">
          <Suspense fallback={null}>
            {screenWidth < 768 ? (
              <CarouselSmall list={[]} {...list} />
            ) : (
              <CarouselLarge {...list} />
            )}
          </Suspense>
        </ul>
        {/* categories list rendered in small devices */}
        {/* <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul> */}
      </nav>
    </>
  );
}
