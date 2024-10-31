import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'FreightFlow - Modern Load Board Platform',
    template: '%s | FreightFlow'
  },
  description: 'Connect shippers and carriers seamlessly. Find loads, book instantly, and manage your fleet all in one place.',
  keywords: ['freight', 'logistics', 'load board', 'shipping', 'carriers', 'transportation'],
  authors: [{ name: 'FreightFlow' }],
  creator: 'FreightFlow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://freightflow.com',
    title: 'FreightFlow - Modern Load Board Platform',
    description: 'Connect shippers and carriers seamlessly. Find loads, book instantly, and manage your fleet all in one place.',
    siteName: 'FreightFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreightFlow - Modern Load Board Platform',
    description: 'Connect shippers and carriers seamlessly. Find loads, book instantly, and manage your fleet all in one place.',
    creator: '@freightflow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}