import { notoSans } from '@/app/fonts';
import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-full border-2 bg-white/70 p-1 backdrop-blur-md dark:border-neutral-950 dark:bg-neutral-200">
        <h3
          className={` ${notoSans.className} mr-4 flex-grow pl-2 text-sm font-semibold leading-none dark:text-[#212222]`}
        >
          {title}
        </h3>
        <Price
          className={` ${notoSans.className} flex-none rounded-full bg-[#212222] px-2 py-1 text-base font-medium text-red-400/85`}
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
