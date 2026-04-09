<!-- BEGIN:nextjs-agent-rules -->

# Este não é o Next.js que você conhece

Esta versão possui mudanças incompatíveis — APIs, convenções e estrutura de arquivos podem diferir do seu treinamento. Leia o guia relevante em `node_modules/next/dist/docs/` antes de escrever qualquer código. Atenção aos avisos de depreciação.

<!-- END:nextjs-agent-rules -->

# Diretrizes do Projeto

Portfólio pessoal de Joalison Pereira. Stack: **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**.

## Build e Desenvolvimento

```bash
yarn dev        # inicia o servidor de desenvolvimento
yarn build      # build de produção
yarn lint       # ESLint (regras next + prettier)
yarn prettier   # formata app/**/*.{ts,tsx,html,css}
```

Nenhum conjunto de testes configurado ainda.

## Arquitetura

```
app/
  _styles/globals.css   # entrada do Tailwind v4 — @import 'tailwindcss'
  _utils/cn.ts          # utilitário de className: clsx + tailwind-merge
  layout.tsx            # layout raiz com metadata (lang="pt-BR")
  page.tsx              # página inicial
public/                 # assets estáticos
docs/reference.html     # referência de design/conteúdo
```

- Apenas App Router — sem diretório `pages/`.
- Prefixo underscore (`_styles`, `_utils`) marca pastas privadas e não roteáveis dentro de `app/`.
- Alias de caminho `@/` aponta para a raiz do projeto.

## Referência de Design (`docs/reference.html`)

`docs/reference.html` é a **página base de design** — ela define o visual, layout, paleta de cores, tipografia e conteúdo do site. Use-a como fonte da verdade para aparência e conteúdo, mas **não replique sua implementação**.

A referência é estática e usa padrões que **não devem ser reproduzidos** no Next.js:

| Padrão no `reference.html`                                                     | Como fazer no Next.js                                                             |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Conteúdo bilíngue via atributos `lang-content` + manipulação DOM (`setLang()`) | Internacionalização com `next-intl` ou objetos de tradução em TypeScript          |
| Strings de UI embutidas direto no HTML                                         | Conteúdo extraído para arquivos de dados/constantes (ex.: `app/_data/content.ts`) |
| Config do Tailwind via `<script>` inline                                       | Tokens de design declarados no CSS via `@theme` do Tailwind v4                    |
| Google Fonts via `<link>` no `<head>`                                          | `next/font` com `localFont` ou `GoogleFont` no `layout.tsx`                       |
| Imagens via `<img>` com URL externa                                            | `next/image` com `<Image />`                                                      |

**Regra geral:** todo conteúdo textual, dados de experiência, projetos e habilidades devem viver em variáveis/objetos TypeScript, não hardcoded nos componentes JSX.

## Convenções

**Tailwind v4** — `@import 'tailwindcss'` substitui as antigas diretivas `@tailwind base/components/utilities`. Não use sintaxe v3.

**Utilitário `cn()`** — sempre use `cn()` de `@/app/_utils/cn.ts` para classNames condicionais ou mesclados. Nunca concatene strings nem use `clsx`/`twMerge` diretamente nos componentes.

**Estilo de código** (aplicado pelo Prettier):

- Aspas simples, sem vírgula final, indentação de 2 espaços.
- O Prettier formata apenas `app/**` — arquivos de configuração na raiz usam sua própria formatação.
- A ordem das classes Tailwind é classificada automaticamente pelo `prettier-plugin-tailwindcss`; não reordene manualmente.

**Idioma** — conteúdo de UI e metadata são em Português Brasileiro (`pt-BR`).
