'use client';

import { useTranslation } from '@/app/_stores/useContent';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslation();

  const { copyright } = t.footer;

  const footerLinks = Object.values(t.contactModal.links);

  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-between px-8 py-12 md:flex-row">
        <div className="mb-8 md:mb-0">
          <Logo size="lg" />
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-12 md:mb-0">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-xs tracking-widest text-outline uppercase transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="font-body text-xs tracking-widest text-outline uppercase">
          © {currentYear} - {copyright}
        </p>
      </div>
    </footer>
  );
}
