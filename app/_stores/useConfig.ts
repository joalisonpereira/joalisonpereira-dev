import { create } from 'zustand';

type Lang = 'pt' | 'en';

interface ConfigState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useConfig = create<ConfigState>()((set) => ({
  lang: 'pt',
  setLang: (lang) => set({ lang })
}));
