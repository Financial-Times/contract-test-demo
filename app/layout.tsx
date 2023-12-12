import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Consumer Stock Trade App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="h-full" lang="en">
    <body className={`h-full ${inter.className}`}>{children}</body>
    </html>
  );
}
