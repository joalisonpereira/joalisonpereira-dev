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
  description:
    'Desenvolvedor fullstack, React, Node.js, Javascript',
  authors: [
    {
      name: 'joalisonpereira',
      url: 'https://www.linkedin.com/in/joalison-pereira/'
    }
  ]
};

export default function Layout({
  children
}: PropsWithChildren) {
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
