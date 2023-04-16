import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const averta = localFont({
  src: [
    {
      path: '../public/fonts/AvertaStd-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-averta',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${averta.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
