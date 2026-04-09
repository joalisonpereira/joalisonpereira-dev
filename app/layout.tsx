import './_styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { cn } from './_utils/cn';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Joalison Pereira - Desenvolvedor Fullstack',
  description: 'Desenvolvedor fullstack, React, Node.js, Javascript',
  authors: [
    {
      name: 'joalisonpereira',
      url: 'https://www.linkedin.com/in/joalison-pereira/'
    }
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png' },
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        inter.variable,
        spaceGrotesk.variable,
        'h-full antialiased'
      )}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
