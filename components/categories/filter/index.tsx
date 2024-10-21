import { SortFilterItem } from 'lib/constants';
import { Image, SEO } from 'lib/shopify/types';
import { Suspense } from 'react';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = {
  handle: string;
  title: string;
  description: string;
  image: Image;
  seo: SEO;
  updatedAt: string;
};

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
            {title}
          </h3>
        ) : null}
        {/* categories list rendered in medium to large devices */}
        <ul className="hidden md:flex">
          <Suspense fallback={null}>
            <FilterItemList list={list} />
          </Suspense>
        </ul>
        {/* categories list rendered in small devices */}
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  );
}
