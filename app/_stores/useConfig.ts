import { create } from 'zustand';

export const LANGS = ['pt', 'en'] as const;

type Lang = (typeof LANGS)[number];

interface ConfigState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useConfig = create<ConfigState>()((set) => ({
  lang: 'pt',
  setLang: (lang) => set({ lang })
}));
