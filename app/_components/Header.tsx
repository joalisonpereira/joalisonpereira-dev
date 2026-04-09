'use client';

import { useState } from 'react';
import { getContent } from '@/app/_stores/useContent';
import ContactModal from './ContactModal';
import LangToggle from './LangToggle';
import Logo from './Logo';

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const { nav, contact } = getContent().header;

  return (
    <>
      <header>
        <nav className="fixed top-0 z-50 w-full bg-surface/90 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-360 items-center justify-between px-8 py-6">
            <Logo size="lg" />
            <div className="hidden items-center gap-8 md:flex">
              {nav.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="font-headline text-sm tracking-tighter text-outline uppercase transition-colors duration-200 hover:text-primary"
                >
                  {label}
                </a>
              ))}
              <LangToggle />
              <button
                onClick={() => setModalOpen(true)}
                type="button"
                className="cursor-pointer bg-primary px-6 py-2 font-headline text-xs font-bold tracking-widest text-on-primary uppercase transition-transform active:scale-95"
              >
                {contact}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
