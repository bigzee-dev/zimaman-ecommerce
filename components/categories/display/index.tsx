import { Image, SEO } from 'lib/shopify/types';
import { Suspense } from 'react';
import DisplayCarousel from './cat-carousel';

export type ListItem = {
  handle: string;
  title: string;
  description: string;
  image: Image;
  path: string;
  seo: SEO;
  updatedAt: string;
};

// function FilterItemList({ list }: { list: ListItem[] }) {
//   return (
//     <>
//       {list.map((item: ListItem, i) => (
//         <FilterItem key={i} item={item} />
//       ))}
//     </>
//   );
// }

export default function DisplayCategoryCarousel({
  list,
  title
}: {
  list: ListItem[];
  title?: string;
}) {
  return (
    <>
      <nav>
        {title ? <h3 className="text-xs text-neutral-500 dark:text-neutral-400">{title}</h3> : null}
        {/* categories list rendered in medium to large devices */}
        <ul className="flex">
          <Suspense fallback={null}>
            <DisplayCarousel list={list} />
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
