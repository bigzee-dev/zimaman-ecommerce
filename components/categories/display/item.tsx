'use client';

import clsx from 'clsx';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;

  newParams.delete('q');

  return (
    <li className="mt-2 flex text-black dark:text-white" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx(
          'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
          {
            'underline underline-offset-4': active
          }
        )}
      >
        <Image
          src={item.image.url}
          alt=""
          width={item.image.width}
          height={item.image.height}
          style={{ objectFit: 'contain' }}
          className="h-[200px] w-[100px]"
        />
        {item.title}
      </DynamicTag>
    </li>
  );
}

{
  /* in the categories component all items in the list have a path so they will all use <PathFilterItem /> */
}
export function FilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? <PathFilterItem item={item} /> : null;
}
