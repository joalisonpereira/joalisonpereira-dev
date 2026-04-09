'use client';

import { useTranslation } from '@/app/_stores/useContent';

export default function Trajectory() {
  const t = useTranslation().trajectory;

  return (
    <section
      className="relative overflow-hidden bg-surface py-32"
      id={t.id}
    >
      {/* Glassmorphism blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-360 px-8">
        <div className="mb-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-headline text-6xl font-bold tracking-tighter text-primary uppercase">
            {t.title}
          </h2>
          <span className="pb-2 font-label text-sm tracking-widest text-outline uppercase">
            {t.subtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Aggrandize — col-span-8 */}
          <div className="group border border-white/10 bg-white/5 p-12 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/8 hover:shadow-primary/5 md:col-span-8">
            <div className="mb-16 flex items-start justify-between">
              <div>
                <h3 className="mb-2 font-headline text-3xl font-bold text-primary uppercase">
                  {t.aggrandize.company}
                </h3>
                <p className="font-label text-xs tracking-widest text-primary uppercase">
                  {t.aggrandize.role}
                </p>
              </div>
              <span className="font-label text-xs text-outline">
                {t.aggrandize.period}
              </span>
            </div>
            <p className="mb-8 max-w-xl leading-relaxed font-light text-on-surface-variant">
              {t.aggrandize.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.aggrandize.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-container-highest px-3 py-1 text-[10px] tracking-widest text-primary uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metric — col-span-4 */}
          <div className="flex flex-col items-center justify-center border border-white/10 bg-white/5 p-12 text-center shadow-lg backdrop-blur-md md:col-span-4">
            <span className="mb-2 font-headline text-7xl font-bold text-primary">
              {t.metric.value}
            </span>
            <span className="font-label text-xs tracking-widest text-outline uppercase">
              {t.metric.label}
            </span>
          </div>

          {/* Exmed — col-span-4 */}
          <div className="group border border-white/10 bg-white/5 p-12 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/8 md:col-span-4">
            <div className="mb-12">
              <h3 className="mb-2 font-headline text-2xl font-bold text-primary uppercase">
                {t.exmed.company}
              </h3>
              <p className="font-label text-xs tracking-widest text-primary uppercase">
                {t.exmed.role}
              </p>
            </div>
            <p className="mb-6 text-sm leading-relaxed font-light text-on-surface-variant">
              {t.exmed.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.exmed.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold text-primary/40 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tracking Trade — col-span-4 */}
          <div className="group border border-white/10 bg-white/5 p-12 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/8 md:col-span-4">
            <div className="mb-8">
              <h3 className="mb-1 font-headline text-2xl font-bold text-primary uppercase">
                {t.trackingTrade.company}
              </h3>
              <p className="font-label text-[10px] tracking-widest text-primary uppercase">
                {t.trackingTrade.role}
              </p>
            </div>
            <p className="text-sm leading-relaxed font-light text-on-surface-variant">
              {t.trackingTrade.description}
            </p>
          </div>

          {/* Education — col-span-4 */}
          <div className="flex flex-col justify-between border border-white/10 bg-white/5 p-12 shadow-lg backdrop-blur-md md:col-span-4">
            <div>
              <div className="mb-6 flex items-start justify-between">
                <h3 className="font-headline text-2xl font-bold text-primary uppercase">
                  {t.education.institution}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-outline"
                  aria-hidden="true"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <p className="mb-4 text-sm leading-relaxed font-light text-on-surface-variant">
                {t.education.degree}
              </p>
            </div>
            <span className="font-label text-[10px] tracking-widest text-outline uppercase">
              {t.education.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
