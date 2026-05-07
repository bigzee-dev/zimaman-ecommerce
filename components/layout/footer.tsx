import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = currentYear > 2023 ? `${currentYear}` : '';
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-darker text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            {/* <span className="uppercase">{SITE_NAME}</span> */}
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Get in Touch
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:+26775847845"
                className="group flex items-center gap-3 text-neutral-500 transition-colors hover:text-hetzred dark:text-neutral-400 dark:hover:text-hetzred"
                aria-label="Call us at 267 75847845"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all group-hover:border-hetzred group-hover:bg-hetzred group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  <Phone size={16} strokeWidth={2} />
                </span>
                <span className="text-sm">267 75847845</span>
              </a>
            </li>
            <li>
              <a
                href={process.env.FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neutral-500 transition-colors hover:text-[#1877F2] dark:text-neutral-400 dark:hover:text-[#1877F2]"
                aria-label="Visit our Facebook page"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all group-hover:border-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  <FaFacebook size={17} />
                </span>
                <span className="text-sm">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/26775847845"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neutral-500 transition-colors hover:text-[#25D366] dark:text-neutral-400 dark:hover:text-[#25D366]"
                aria-label="Chat with us on WhatsApp"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  <FaWhatsapp size={18} />
                </span>
                <span className="text-sm">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''}
          </p>

          <p className="md:ml-auto">
            <a href="https://deltaworx.co.bw" className="text-black dark:text-white">
              Created by Deltaworx
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
