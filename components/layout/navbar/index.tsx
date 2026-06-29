import CartModal from 'components/cart/modal';
import FullLogo from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

// const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div className="w-full bg-darker">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-4 py-4 lg:px-2">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <FullLogo />
            </Link>
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex items-center justify-end gap-5 md:w-1/3">
            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group hidden h-10 w-10 items-center justify-center rounded-full border border-neutral-400/90 bg-lighter text-neutral-600 transition-all hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white sm:flex dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              <FaFacebook size="1.4em" />
            </a>
            <a
              href="https://wa.me/26775847845"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="group hidden h-10 w-10 items-center justify-center rounded-full border border-neutral-400/90 bg-white text-neutral-600 transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white sm:flex dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              <FaWhatsapp size="1.4em" />
            </a>
            <CartModal />
          </div>
        </div>
      </nav>
    </div>
  );
}
