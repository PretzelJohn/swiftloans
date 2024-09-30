import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { TRPCProvider } from '@/utils/trpc/client';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  description: 'Swift Loans',
  title: {
    default: 'Swift Loans',
    template: 'Swift Loans / %s',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body
      className={`antialiased bg-white min-h-svh text-brand ${inter.variable} font-sans font-normal`}
    >
    <SessionProvider>
      <TRPCProvider>
        {children}
      </TRPCProvider>
    </SessionProvider>
    </body>
    </html>
  );
}
