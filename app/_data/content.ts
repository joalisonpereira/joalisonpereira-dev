export const content = {
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
    trajectory: {
      title: 'Trajetória',
      subtitle: 'Experiência e Formação 2016 — 2024',
      metric: {
        value: '08+',
        label: 'Anos em Engenharia de Sistemas'
      },
      aggrandize: {
        company: 'Aggrandize',
        role: 'Sênior Software Engineer',
        period: 'Presente',
        description:
          'Foco no desenvolvimento de sistemas de backend de alta performance e microsserviços escaláveis. Responsável por garantir a integridade arquitetural e escalabilidade global utilizando Node.js e infraestrutura AWS.',
        tags: ['Node.js', 'AWS', 'Escalabilidade']
      },
      exmed: {
        company: 'Exmed',
        role: 'Full Stack ERP / AWS',
        description:
          'Arquitetura de soluções ERP complexas alavancando a infraestrutura AWS para garantir máxima confiabilidade, performance e consistência de dados críticos.',
        tags: ['AWS Cloud', 'Reliability']
      },
      trackingTrade: {
        company: 'Tracking Trade',
        role: 'Engenheiro Full Stack',
        description:
          'Desenvolvimento de sistemas de rastreamento de ponta a ponta, integrando dados de hardware em tempo real com interfaces de usuário intuitivas e robustas.'
      },
      education: {
        institution: 'UNIFBV',
        degree: 'Bacharelado em Ciência da Computação',
        label: 'Base da Trajetória'
      }
    },
    stack: {
      title: 'Stack',
      description:
        'Domínio técnico em todo o ciclo de vida do desenvolvimento de aplicações modernas.',
      items: [
        {
          index: '01',
          category: 'Backend',
          name: 'NodeJS'
        },
        {
          index: '02',
          category: 'Linguagem',
          name: 'TypeScript'
        },
        {
          index: '03',
          category: 'Frontend',
          name: 'React'
        },
        {
          index: '04',
          category: 'Mobile',
          name: 'React Native'
        },
        { index: '05', category: 'Cloud', name: 'AWS' },
        {
          index: '06',
          category: 'Core',
          name: 'JavaScript'
        }
      ]
    },
    openSource: {
      title: 'Projetos Open Source',
      subtitle: 'Ecossistema NPM & Ferramentas',
      installsLabel: 'Instalações / mês'
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
    trajectory: {
      title: 'Trajectory',
      subtitle: 'Experience and Education 2016 — 2024',
      metric: {
        value: '08+',
        label: 'Years in Systems Engineering'
      },
      aggrandize: {
        company: 'Aggrandize',
        role: 'Senior Software Engineer',
        period: 'Present',
        description:
          'Focused on high-performance backend systems and scalable microservices. Responsible for ensuring architectural integrity and global scalability using Node.js and AWS infrastructure.',
        tags: ['Node.js', 'AWS', 'Scalability']
      },
      exmed: {
        company: 'Exmed',
        role: 'Full Stack ERP / AWS',
        description:
          'Architecting complex ERP solutions leveraging AWS infrastructure to ensure maximum reliability, performance, and critical data consistency.',
        tags: ['AWS Cloud', 'Reliability']
      },
      trackingTrade: {
        company: 'Tracking Trade',
        role: 'Full Stack Engineer',
        description:
          'End-to-end development of tracking systems, integrating real-time hardware data with intuitive and robust user interfaces.'
      },
      education: {
        institution: 'UNIFBV',
        degree: 'Bachelor of Computer Science',
        label: 'Career Foundation'
      }
    },
    stack: {
      title: 'Stack',
      description:
        'Technical mastery across the entire modern application development lifecycle.',
      items: [
        {
          index: '01',
          category: 'Backend',
          name: 'NodeJS'
        },
        {
          index: '02',
          category: 'Language',
          name: 'TypeScript'
        },
        {
          index: '03',
          category: 'Frontend',
          name: 'React'
        },
        {
          index: '04',
          category: 'Mobile',
          name: 'React Native'
        },
        { index: '05', category: 'Cloud', name: 'AWS' },
        {
          index: '06',
          category: 'Core',
          name: 'JavaScript'
        }
      ]
    },
    openSource: {
      title: 'Open Source Projects',
      subtitle: 'NPM Ecosystem & Tools',
      installsLabel: 'installs / mo'
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  }
} as const;
