import { LANGS } from '@/app/_stores/useConfig';

type Lang = (typeof LANGS)[number];

export const content: Record<
  Lang,
  {
    header: {
      nav: { label: string; href: string }[];
      contact: string;
    };
    hero: {
      eyebrow: string;
      description: string;
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
    hero: {
      eyebrow: 'Engenheiro Full Stack Sênior',
      description:
        'Projetando ecossistemas digitais robustos e infraestrutura para desenvolvedores com precisão arquitetural.'
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
    hero: {
      eyebrow: 'Senior Full Stack Engineer',
      description:
        'Designing robust digital ecosystems and developer infrastructure with architectural precision.'
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  }
};
