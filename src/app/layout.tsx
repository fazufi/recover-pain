import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Recover Pain',
  description: 'Personalized Care For Chronic Pain',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/*" sizes="any" />
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
