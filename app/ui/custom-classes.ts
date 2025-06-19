import { notoSans } from '@/app/fonts';

const btnDimensions = ` ${notoSans.className} text-center min-w-36 rounded-[0.60rem] px-5 py-[0.445rem] text-base font-medium `;

export const transparentBtn = ` ${btnDimensions} bg-white/5 border hover:bg-white/10 dark:text-neutral-200/85 dark:border-neutral-600 `;

export const whiteBtn = ` ${btnDimensions} bg-neutral-200 hover:text-red-900 dark:text-gray-900  `;

export const blackBtn = ` ${btnDimensions} bg-neutral-900 hover:text-red-400 dark:text-neutral-200  `;
