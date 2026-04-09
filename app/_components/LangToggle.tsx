'use client';

import { cn } from '@/app/_utils/cn';
import { LANGS, useConfig } from '@/app/_stores/useConfig';

export default function LangToggle() {
  const { lang, setLang } = useConfig();

  return (
    <div className="flex items-center gap-2 border border-white/10 px-2 py-1 [&>button]:rounded">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            'cursor-pointer px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase transition-all',
            lang === l
              ? 'bg-white/10 text-white'
              : 'text-neutral-500 hover:text-white'
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
