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
  _components/          # componentes compartilhados
    Header.tsx          # nav fixa com toggle de idioma
    Footer.tsx          # rodapé com links sociais
    LangToggle.tsx      # toggle PT/EN — Client Component ('use client')
    Logo.tsx            # logo com prop size (sm | md | lg | xl)
    Hero.tsx            # seção hero — Client Component
    Trajectory.tsx      # seção trajetória — Client Component
    OpenSource.tsx      # seção projetos open source — Client Component
  _data/
    content.ts          # fonte central de conteúdo bilíngue (pt/en)
  _services/            # serviços de busca externa (um subdiretório por API)
    npm/
      interfaces.ts     # tipos do contrato da API do NPM
      index.ts          # getNpmPackages() com fetch + revalidate
  _stores/
    useContent.ts        # store Zustand global (lang: 'pt' | 'en')
  _styles/globals.css   # entrada do Tailwind v4 + @theme com tokens de design
  _utils/cn.ts          # utilitário de className: clsx + tailwind-merge
  layout.tsx            # layout raiz: fontes via next/font, metadata (lang="pt-BR")
  page.tsx              # página inicial (Server Component)
public/                 # assets estáticos
  logo.png              # logotipo principal
  logo2.png             # variante do logotipo
  background.png        # imagem de background do hero
docs/reference.html     # referência de design/conteúdo
```

- Apenas App Router — sem diretório `pages/`.
- Prefixo underscore (`_components`, `_stores`, `_styles`, `_utils`, `_data`, `_services`) marca pastas privadas e não roteáveis dentro de `app/`.
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

**Estilo de código** (aplicado pelo Prettier): aspas simples, sem vírgula final, indentação de 2 espaços. O Prettier formata apenas `app/**`. A ordem das classes Tailwind é classificada automaticamente pelo `prettier-plugin-tailwindcss`.

**Idioma** — conteúdo de UI e metadata em Português Brasileiro (`pt-BR`).

Para convenções de implementação (Server/Client Components, Zustand, `cn()`, fontes, conteúdo em variáveis), use o agente `@senior` — ele conhece todas as regras do projeto.
