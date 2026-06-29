// import { notoSans } from '@/app/fonts';

const btnDimensions = `inline-flex items-center justify-center font-heading min-w-40 px-6 py-3 text-sm font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer active:scale-[0.98]`;

export const transparentBtn = `${btnDimensions} border border-white/50 text-white hover:bg-white/10 hover:border-white`;

export const whiteBtn = `${btnDimensions} bg-white text-neutral-900 border border-neutral-200 shadow-sm hover:bg-neutral-50 hover:shadow-md dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white`;

export const blackBtn = `${btnDimensions} bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 hover:shadow-md dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700`;

export const redBtn = `${btnDimensions} bg-red-700 text-white shadow-sm hover:bg-red-600 hover:shadow-md`;
