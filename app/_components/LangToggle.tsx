'use client';

import { cn } from '@/app/_utils/cn';
import { useConfig } from '@/app/_stores/useConfig';

export default function LangToggle() {
  const lang = useConfig((s) => s.lang);
  const setLang = useConfig((s) => s.setLang);

  return (
    <div className="flex items-center gap-2 border border-white/10 px-2 py-1 [&>button]:rounded">
      <button
        onClick={() => setLang('pt')}
        className={cn(
          'px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase transition-all',
          lang === 'pt'
            ? 'bg-white/10 text-white'
            : 'text-neutral-500 hover:text-white'
        )}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={cn(
          'px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase transition-all',
          lang === 'en'
            ? 'bg-white/10 text-white'
            : 'text-neutral-500 hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
}
