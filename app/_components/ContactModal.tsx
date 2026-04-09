'use client';

import { Modal } from 'react-modal-easy';
import { useTranslation } from '@/app/_stores/useContent';
import Logo from './Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose
}: ContactModalProps) {
  const { contactModal } = useTranslation();

  return (
    <Modal
      isVisible={isOpen}
      onClose={onClose}
      closeButton={null}
      animation="none"
      title={contactModal.title}
      className="z-50 w-[min(820px,95vw)]"
      overlayClassName="z-50"
    >
      <Modal.Title className="sr-only">
        {contactModal.title}
      </Modal.Title>
      <div className="flex min-h-96">
        <div className="hidden w-60 shrink-0 flex-col justify-between bg-surface-container-lowest p-8 lg:flex">
          <Logo size="lg" />
          <p className="font-label text-[10px] leading-relaxed tracking-[0.2em] whitespace-pre-line text-outline uppercase">
            {contactModal.tagline}
          </p>
        </div>

        <div className="relative flex flex-1 flex-col bg-surface-container-low p-10 lg:p-12">
          <Modal.Close
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-8 right-8 cursor-pointer border-none bg-transparent p-0 font-headline text-base text-outline transition-colors hover:text-primary"
          >
            ✕
          </Modal.Close>

          <div className="mb-10">
            <h2 className="font-headline text-5xl font-bold tracking-tighter text-primary">
              {contactModal.title}
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-primary" />
          </div>

          <div className="grid grid-cols-2 gap-x-12">
            <div>
              <p className="mb-6 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                {contactModal.networksLabel}
              </p>
              <div className="flex flex-col gap-5">
                <a
                  href={contactModal.links.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 font-headline text-sm font-medium text-primary transition-colors hover:text-on-surface-variant"
                >
                  <span className="h-px w-8 shrink-0 bg-outline" />
                  {contactModal.links.linkedin.label}
                </a>
                <a
                  href={contactModal.links.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 font-headline text-sm font-medium text-primary transition-colors hover:text-on-surface-variant"
                >
                  <span className="h-px w-8 shrink-0 bg-outline" />
                  {contactModal.links.github.label}
                </a>
              </div>
            </div>

            <div>
              <p className="mb-6 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                {contactModal.directLabel}
              </p>
              <div className="flex flex-col gap-5">
                <a
                  href={contactModal.links.email.href}
                  className="flex items-center gap-4 font-headline text-sm font-medium text-primary transition-colors hover:text-on-surface-variant"
                >
                  <span className="h-px w-8 shrink-0 bg-outline" />
                  {contactModal.links.email.label}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 pt-6">
            <span className="font-label text-[10px] tracking-[0.2em] text-outline uppercase">
              {contactModal.availability}
            </span>
            <span className="flex items-center gap-1.5 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {contactModal.location}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
