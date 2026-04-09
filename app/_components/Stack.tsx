'use client';

import { useTranslation } from '@/app/_stores/useContent';
import { cn } from '@/app/_utils/cn';

export default function Stack() {
  const t = useTranslation().stack;

  return (
    <section className="bg-surface py-32" id={t.id}>
      <div className="mx-auto max-w-360 px-8">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-headline text-6xl font-bold tracking-tighter text-primary uppercase">
              {t.title}
            </h2>
            <p className="mt-6 font-light text-on-surface-variant">
              {t.description}
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-px bg-outline-variant/20 md:grid-cols-3 lg:col-span-8">
            {t.items.map((item) => (
              <div
                key={item.name}
                className="group bg-surface p-10 transition-colors hover:bg-surface-container-low"
              >
                <span className="mb-8 block font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                  {item.index} / {item.category}
                </span>
                <h4 className="mb-4 font-headline text-xl font-bold text-primary">
                  {item.name}
                </h4>
                <div
                  className={cn(
                    'h-1 w-0 bg-primary transition-all duration-500',
                    'group-hover:w-full'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
