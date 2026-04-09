# 🧑‍💻 joalisonpereira.dev

Portfólio pessoal de **Joalison Pereira** — Engenheiro Full Stack Sênior. Um site rápido, bilíngue (PT/EN) e com design minimalista construído com as tecnologias mais modernas do ecossistema React.

---

## ✨ Destaques

- 🌐 **Bilíngue** — alternância PT/EN em tempo real via Zustand, sem reload
- 🎨 **Glassmorphism** — cards com `backdrop-blur` e gradientes decorativos
- 📦 **Pacotes NPM** — lista projetos open source consultando a API do npm em tempo real
- 📱 **Responsivo** — menu hamburguer com drawer animado no mobile
- ⚡ **Performance** — Server Components por padrão, Client Components apenas onde necessário

---

## 🛠️ Stack

| Camada        | Tecnologia                          |
| ------------- | ----------------------------------- |
| Framework     | Next.js 16 (App Router)             |
| UI            | React 19 + Tailwind CSS v4          |
| Linguagem     | TypeScript 5                        |
| Estado global | Zustand 5                           |
| Fontes        | `next/font` (Space Grotesk + Inter) |
| Linting       | ESLint + Prettier                   |

---

## 🚀 Rodando localmente

```bash
# instalar dependências
yarn

# servidor de desenvolvimento
yarn dev

# build de produção
yarn build
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Estrutura

```
app/
├── _components/   # Header, Footer, Hero, Trajectory, OpenSource, Stack…
├── _data/         # content.ts — fonte central de conteúdo bilíngue
├── _services/     # Integrações externas (npm API)
├── _stores/       # Zustand (idioma ativo)
├── _styles/       # globals.css — Tailwind v4 + tokens de design
└── _utils/        # cn() — clsx + tailwind-merge
```

---

## 📋 Scripts

```bash
yarn dev        # servidor de desenvolvimento
yarn build      # build de produção
yarn lint       # ESLint
yarn prettier   # formata app/**/*.{ts,tsx,html,css}
```
