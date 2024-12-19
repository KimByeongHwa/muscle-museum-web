import { Noto_Sans_KR, Roboto } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  weight: ['100', '400', '700', '900'],
  variable: '--font-noto_sans_kr',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});
