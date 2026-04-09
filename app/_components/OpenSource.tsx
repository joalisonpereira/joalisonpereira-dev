'use client';

import type { NpmPackageObject } from '@/app/_services/npm/interfaces';
import { useTranslation } from '@/app/_stores/useContent';

interface OpenSourceProps {
  packages: NpmPackageObject[];
}

export default function OpenSource({
  packages
}: OpenSourceProps) {
  const t = useTranslation().openSource;

  return (
    <section className="bg-surface py-32" id="projetos">
      <div className="mx-auto max-w-360 px-8">
        <div className="mb-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-headline text-6xl font-bold tracking-tighter text-primary uppercase">
            {t.title}
          </h2>
          <span className="pb-2 font-label text-sm tracking-widest text-outline uppercase">
            {t.subtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {packages.map(({ package: pkg, downloads }) => (
            <a
              key={pkg.name}
              href={pkg.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col border border-primary/10 bg-surface-container-low p-12 transition-colors duration-500 hover:border-primary/20 hover:bg-surface-container"
            >
              <div className="mb-12">
                <h3 className="mb-2 font-headline text-xl font-bold break-all text-primary uppercase">
                  {pkg.name.replace('/', '/\u200B')}
                </h3>
                <p className="font-label text-[10px] tracking-widest text-primary uppercase">
                  NPM Package
                </p>
              </div>

              <p className="mb-8 grow text-sm leading-relaxed font-light text-on-surface-variant">
                {pkg.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {pkg.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] font-bold text-primary/40 uppercase"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-primary/5 pt-4 font-label text-[10px] tracking-[0.2em] text-primary/30 uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>
                  {downloads.monthly.toLocaleString()}
                </span>
                <span>{t.installsLabel}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
