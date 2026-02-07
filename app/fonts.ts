import { Cairo, Expletus_Sans, Inter, Noto_Sans, Montserrat } from 'next/font/google';
import { Lora } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800']
});

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500']
});

export const notoSans = Noto_Sans({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans'
});

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
});

export const expletus = Expletus_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export const cairo = Cairo({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
});
