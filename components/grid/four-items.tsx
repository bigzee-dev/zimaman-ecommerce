import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { FaTags } from 'react-icons/fa';

function FourItemGridItem({
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

export async function FourItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <div className="w-full bg-lighter py-12 pb-14">
      <div className="mx-auto max-w-7xl px-2">
        <div className="mb-4 flex items-center">
          <div className="flex items-center border-b-2 border-red-800 pb-1 dark:border-[#facc15]/60">
            <FaTags className="mr-2 h-6 w-6 text-red-800 dark:text-[#facc15]/60" />
            <span
              className={`font-heading text-sm font-semibold text-red-800 dark:text-[#facc15]/60`}
            >
              Specials
            </span>
          </div>
        </div>
        <h2
          className={`text-txtmain mb-8 text-balance font-heading text-4xl font-bold leading-[1] sm:text-4xl lg:text-4xl`}
        >
          This Months Specials
        </h2>
        <section className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4 md:grid-rows-1 lg:max-h-[calc(100vh-200px)]">
          <FourItemGridItem size="half" item={firstProduct} priority={true} />
          <FourItemGridItem size="half" item={secondProduct} priority={true} />
          <FourItemGridItem size="half" item={thirdProduct} />
          <FourItemGridItem size="half" item={thirdProduct} />
          {/* <FourItemGridItem size="half" item={firstProduct} priority={true} />
          <FourItemGridItem size="half" item={secondProduct} priority={true} />
          <FourItemGridItem size="half" item={thirdProduct} />
          <FourItemGridItem size="half" item={thirdProduct} /> */}
        </section>
      </div>
    </div>
  );
}
