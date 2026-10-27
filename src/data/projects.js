// Empresa/site onde os sistemas em destaque são oferecidos
export const ksdev = {
  nome: 'KS Dev',
  url: 'https://ksdev.systems/',
  tagline: 'Sistemas que impulsionam negócios',
  descricao:
    'A KS Dev é a minha marca de software: é por ela que ofereço o KS Gestão (PDV, catálogo online e assistência técnica para lojas) e o KS Agenda (agendamento online com Pix) para negócios reais.',
};

// Projetos em destaque: sistemas full stack completos (produto real, multiempresa/SaaS)
export const featuredProjects = [
  {
    id: 'ks-gestao',
    titulo: 'KS Gestão',
    tagline: 'Plataforma SaaS de gestão multiempresa',
    sintese:
      'Sistema completo de gestão com PDV, controle de estoque, vendas, fiado, caixa, celulares e assistência técnica. Arquitetura multiempresa (SaaS) com planos Básico, Pro e Premium, permissões granulares e painel Super Admin.',
    destaques: [
      'PDV completo com caixa, fiado e relatórios de vendas',
      'Módulo de Celulares e Assistência Técnica com O.S., peças e garantias',
      'Painel Super Admin multiempresa com planos e permissões por usuário',
      'PWA instalável, backup automático e segurança (JWT, criptografia, rate limit)',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'Docker', 'styled-components'],
    linksistema: 'https://ksdev.systems/ks-gestao',
    variant: 'gestao',
    badge: 'Full Stack · SaaS',
  },
  {
    id: 'ks-agenda',
    titulo: 'KS Agenda',
    tagline: 'Agendamento online multiempresa',
    sintese:
      'Sistema de agendamento com painel Super Admin, painel do estabelecimento, agenda pública para clientes, gestão de profissionais e serviços, comissões, avaliações e relatórios financeiros.',
    destaques: [
      'Agenda em Dia/Semana com remarcação por arrastar e horários disponíveis',
      'Página pública de agendamento para os clientes do estabelecimento',
      'Comissões, avaliações (1–5★) e financeiro com faturamento mensal',
      'Relatórios com exportação CSV/Excel e impressão em PDF',
    ],
    stack: ['React 19', 'Vite', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'Docker', 'PWA'],
    linksistema: 'https://ksdev.systems/ks-agenda',
    variant: 'agenda',
    badge: 'Full Stack · SaaS',
  },
];

// Projetos pessoais / estudo
export const projects = [
  {
    id: 'dragon-ball',
    titulo: 'Os Guerreiros Z',
    sintese: 'Página moderna apresentando os personagens de Dragon Ball Z, com layout animado e responsivo.',
    linkgithub: 'https://github.com/FrankKennady/Dragon-Ball-Os-Guerreiros-Z.git',
    linkdeploy: 'https://frankkennady.github.io/Dragon-Ball-Os-Guerreiros-Z/',
    capa: '/projects/projetoDragonBall.webp',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'herois-flix',
    titulo: 'Universo Marvel',
    sintese: 'Inspirada nas grandes aplicações de streaming, totalmente focada no universo Marvel.',
    linkgithub: 'https://github.com/FrankKennady/Projeto-HeroisFlix',
    linkdeploy: 'https://frankkennady.github.io/Projeto-HeroisFlix/',
    capa: '/projects/heroiFlix.webp',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'pizzaria',
    titulo: 'Pizzaria',
    sintese: 'Página moderna apresentando um cardápio de pizzaria, com design responsivo e interativo.',
    linkgithub: 'https://github.com/FrankKennady/Projeto-Pizzaria.git',
    linkdeploy: 'https://frankkennady.github.io/Projeto-Pizzaria/',
    capa: '/projects/pizzaria.webp',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'licor-da-santa',
    titulo: 'Cardápio Licor da Santa',
    sintese: 'Cardápio de licores com design responsivo e interativo. Publicação liberada pela cliente real.',
    linkgithub: 'https://github.com/FrankKennady/Projeto-Pizzaria.git',
    linkdeploy: 'https://frankkennady.github.io/LICOR-DA-SANTA/',
    capa: '/projects/licor-da-santa.webp',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
];
