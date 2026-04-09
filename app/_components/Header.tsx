'use client';

import { useState } from 'react';
import { useTranslation } from '@/app/_stores/useContent';
import ContactModal from './ContactModal';
import LangToggle from './LangToggle';
import Logo from './Logo';

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const { nav, contact } = useTranslation().header;

  return (
    <>
      <header>
        <nav className="fixed top-0 z-50 w-full bg-surface/90 md:fixed md:backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-360 items-center justify-between px-8 py-6">
            <Logo size="lg" />
            {/* Desktop nav */}
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
            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              type="button"
              aria-label="Abrir menu"
              className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-100 transition-opacity duration-300 md:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 flex h-full w-3/4 max-w-xs flex-col bg-surface px-8 py-10 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            type="button"
            aria-label="Fechar menu"
            className="mb-10 self-end text-outline hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {nav.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="w-full border-b border-white/10 py-4 font-headline text-base tracking-tighter text-outline uppercase transition-colors duration-200 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
          {/* Footer actions */}
          <div className="mt-auto flex flex-col gap-4">
            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              type="button"
              className="w-full cursor-pointer bg-primary py-3 font-headline text-xs font-bold tracking-widest text-on-primary uppercase transition-transform active:scale-95"
            >
              {contact}
            </button>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
