import { notoSans } from '@/app/fonts';

const btnDimensions = ` ${notoSans.className} text-center min-w-40 px-5 py-[0.8rem] text-sm font-medium`;

export const transparentBtn = ` ${btnDimensions} bg-white/5 border hover:bg-white/10 text-neutral-200/85 border-neutral-300 `;

export const whiteBtn = ` ${btnDimensions} text-foreground bg-neutral-200 hover:text-red-900`;

export const blackBtn = ` ${btnDimensions} bg-neutral-900 hover:text-red-400 dark:text-neutral-200  `;

export const redBtn = ` ${btnDimensions} text-darkmain bg-hetzred hover:text-red-900`;
