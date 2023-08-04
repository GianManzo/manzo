import { Poppins, Roboto } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '200', '700'],
  variable: '--font-poppins',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
});
