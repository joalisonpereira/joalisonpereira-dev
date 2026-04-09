import { LANGS } from '@/app/_stores/useConfig';

type Lang = (typeof LANGS)[number];

export const content: Record<
  Lang,
  {
    header: {
      nav: { label: string; href: string }[];
      contact: string;
    };
    footer: {
      copyright: string;
    };
  }
> = {
  pt: {
    header: {
      nav: [
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Habilidades', href: '#habilidades' }
      ],
      contact: 'Contato'
    },
    footer: {
      copyright: 'Todos os direitos reservados.'
    }
  },
  en: {
    header: {
      nav: [
        { label: 'Experience', href: '#experiencia' },
        { label: 'Projects', href: '#projetos' },
        { label: 'Skills', href: '#habilidades' }
      ],
      contact: 'Contact'
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  }
};
