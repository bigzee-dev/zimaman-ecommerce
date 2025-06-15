import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full gap-8 border-t border-gray-500/30 py-4 text-black dark:bg-neutral-800/40 dark:text-white md:flex-row">
        <div className="mx-auto w-full max-w-7xl px-2">
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="order-first w-full flex-none md:max-w-[125px]">
              <Collections />
            </div>
            <div className="order-none flex-none md:order-last md:w-[125px]">
              <FilterList list={sorting} title="Sort by" />
            </div>
          </div>

          <div className="order-last min-h-screen w-full md:order-none">
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
