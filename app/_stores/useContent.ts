import { create } from 'zustand';
import { content } from '../_data/content';

export const LANGS = ['pt', 'en'] as const;

type Lang = (typeof LANGS)[number];

interface ContentState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  get: () => (typeof content)[Lang];
}

export const useContent = create<ContentState>()(
  (set, get) => ({
    lang: 'pt',
    setLang: (lang) => set({ lang }),
    get: () => content[get().lang]
  })
);

export const useTranslation = () =>
  useContent((state) => state.get());
