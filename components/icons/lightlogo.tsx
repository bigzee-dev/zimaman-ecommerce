import clsx from 'clsx';
import Image from 'next/image';

export default function LightLogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image
      src="/zimalogolight.svg"
      alt="Zima Logo"
      height={60}
      width={180}
      className={clsx('h-8 w-auto fill-black dark:fill-white', props.className)}
    ></Image>
  );
}
