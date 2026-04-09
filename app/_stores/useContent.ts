import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { content } from '../_data/content';

export const LANGS = ['pt', 'en'] as const;

type Lang = (typeof LANGS)[number];

interface ContentState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  get: () => (typeof content)[Lang];
}

export const useContent = create<ContentState>()(
  persist(
    (set, get) => ({
      lang: 'pt',
      setLang: (lang) => set({ lang }),
      get: () => content[get().lang]
    }),
    {
      name: 'lang',
      partialize: (state) => ({ lang: state.lang })
    }
  )
);

export const useTranslation = () =>
  useContent((state) => state.get());
