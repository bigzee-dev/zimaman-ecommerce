import { notoSans } from '@/app/fonts';
import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { FaTags } from 'react-icons/fa';

function EightItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-1 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function EightItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-7xl px-2">
        <div className="mb-4 flex items-center">
          <div className="flex items-center border-b-2 border-red-600 pb-1">
            <FaTags className="mr-2 h-5 w-5 dark:text-red-700" />
            <span className={` ${notoSans.className} text-sm font-semibold dark:text-red-600`}>
              Specials
            </span>
          </div>
        </div>
        <h2 className="mb-10 text-2xl font-bold text-neutral-400 md:text-3xl">
          This Months Specials
        </h2>
        <section className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4 md:grid-rows-2 lg:max-h-[calc(100vh-100px)]">
          <EightItemGridItem size="half" item={firstProduct} priority={true} />
          <EightItemGridItem size="half" item={secondProduct} priority={true} />
          <EightItemGridItem size="half" item={thirdProduct} />
          <EightItemGridItem size="half" item={thirdProduct} />
          <EightItemGridItem size="half" item={firstProduct} priority={true} />
          <EightItemGridItem size="half" item={secondProduct} priority={true} />
          <EightItemGridItem size="half" item={thirdProduct} />
          <EightItemGridItem size="half" item={thirdProduct} />
        </section>
      </div>
    </div>
  );
}
