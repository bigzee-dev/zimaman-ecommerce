'use client';

import clsx from 'clsx';
import DarkLogoIcon from './icons/darklogo';
import LightLogoIcon from './icons/lightlogo';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function FullLogo({ size }: { size?: 'sm' | undefined }) {
  const { isDark, mounted } = useDarkMode();

  if (!mounted) {
    return null;
  }

  const LogoIcon = isDark ? DarkLogoIcon : LightLogoIcon;

  return (
    <div
    // className={clsx(
    //   'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
    //   {
    //     'h-[40px] w-[40px] rounded-xl': !size,
    //     'h-[30px] w-[30px] rounded-lg': size === 'sm'
    //   }
    // )}
    >
      <LogoIcon
        className={clsx({
          'h-[60px] w-[180px]': !size,
          'h-[40px] w-[80px]': size === 'sm'
        })}
      />
    </div>
  );
}
