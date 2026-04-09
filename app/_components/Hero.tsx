'use client';

import Image from 'next/image';
import { useTranslation } from '@/app/_stores/useContent';

export default function Hero() {
  const { eyebrow, description } = useTranslation().hero;

  return (
    <section className="relative flex min-h-screen flex-col justify-center">
      <Image
        src={'/background.png'}
        alt=""
        fill
        priority
        className="object-cover object-center grayscale"
      />
      <div className="absolute inset-0 bg-linear-to-b from-surface/80 to-surface/90" />
      <div className="relative z-10 mx-auto w-full max-w-360 px-8 pt-24">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-9">
            <p className="mb-8 font-headline text-sm tracking-[0.3em] text-primary uppercase">
              {eyebrow}
            </p>
            <h1 className="mb-12 font-headline text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-bold tracking-[-0.04em] text-primary uppercase">
              JOALISON
              <br />
              PEREIRA
            </h1>
            <div className="flex flex-col gap-12 md:flex-row md:items-center">
              <p className="max-w-md text-lg leading-relaxed font-light text-on-surface-variant italic">
                {description}
              </p>
              <div className="hidden h-px grow bg-primary/20 md:block" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-primary"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
