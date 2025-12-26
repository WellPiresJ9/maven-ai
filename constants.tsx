import { 
  Bot, 
  Target, 
  FileText, 
  Palette, 
  Calendar, 
  GitMerge, 
  Rocket 
} from 'lucide-react';
import { 
  NavItem, 
  FeatureCardProps, 
  VideoItem, 
  CaseStudy, 
  ComparisonRow, 
  FAQItem,
  StepItem 
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Agentes de IA', href: '#agentes' },
  { label: 'Cases de Estudo', href: '#cases' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: FeatureCardProps[] = [
  {
    icon: <Bot className="w-6 h-6 text-brand-primary" />,
    title: 'Atendimento ao cliente autônomo',
    description: 'Agentes que entendem a intenção do cliente, consultam sistemas internos e resolvem o máximo sem passar para humanos.'
  },
  {
    icon: <Target className="w-6 h-6 text-brand-primary" />,
    title: 'Funis de vendas com Agentes',
    description: 'Sequências inteligentes que educam, qualificam e movem leads até o fechamento, em múltiplos canais.'
  },
  {
    icon: <FileText className="w-6 h-6 text-brand-primary" />,
    title: 'Envio de propostas e contratos',
    description: 'Geração de propostas customizadas, envio automático e follow‑up com base em regras definidas.'
  },
  {
    icon: <Palette className="w-6 h-6 text-brand-primary" />,
    title: 'Design com IA no fluxo',
    description: 'Criação de criativos e materiais visuais em ciclos rápidos, seguindo guidelines da marca.'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'dQw4w9WgXcQ', // Placeholder
    title: 'Agente IA de Vendas para Ecommerce',
    tag: 'E-commerce',
    thumbnailUrl: 'https://picsum.photos/id/1/800/600',
    description: 'Nosso agente de IA automatiza a qualificação de leads, recomenda produtos e finaliza vendas diretamente no site ou WhatsApp. Tudo acontece em piloto automático, aumentando a conversão em até 35%.'
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder
    title: 'Criei uma IA para Vender Transformadores de Energia no WhatsApp!',
    tag: 'Indústria',
    thumbnailUrl: 'https://picsum.photos/id/2/800/600',
    description: 'Veja como estruturamos um agente técnico capaz de entender especificações de engenharia complexas e gerar orçamentos para transformadores industriais em tempo real.'
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder
    title: 'Estrutura de Vendas 100% Automatizada + App feito com IA',
    tag: 'SaaS',
    thumbnailUrl: 'https://picsum.photos/id/3/800/600',
    description: 'Um deep-dive na arquitetura de um sistema completo onde o Agente controla desde a prospecção fria até o onboarding do usuário dentro do aplicativo.'
  },
  {
    id: 'dQw4w9WgXcQ', // Placeholder
    title: 'Agente de IA para Loja de Vinhos',
    tag: 'Varejo',
    thumbnailUrl: 'https://picsum.photos/id/4/800/600',
    description: 'Um sommelier digital que aprende o gosto do cliente baseado em compras passadas e sugere as melhores harmonizações, integrado diretamente ao estoque da loja física.'
  }
];

export const CASES: CaseStudy[] = [
  {
    company: 'Tecfil',
    logoUrl: 'https://placehold.co/600x200/ffffff/083344?text=Tecfil', // Replace with actual logo asset
    href: '#case-tecfil',
    category: 'Indústria Automotiva',
    title: 'Automação de pedidos e suporte técnico para distribuidores via WhatsApp',
    metrics: ['Redução de 60% no tempo de atendimento', 'Disponibilidade 24/7 para distribuidores']
  },
  {
    company: 'Wittel',
    logoUrl: 'https://placehold.co/600x200/ffffff/083344?text=wittel', // Replace with actual logo asset
    href: '#case-wittel',
    category: 'Tecnologia e CX',
    title: 'Triagem inteligente de chamados e integração com plataforma de Contact Center',
    metrics: ['Aumento de 40% na resolução em primeiro nível', 'Integração nativa com CRM']
  },
  {
    company: 'Hunters',
    logoUrl: 'https://placehold.co/600x200/ffffff/083344?text=Hunters', // Replace with actual logo asset
    href: '#case-hunters',
    category: 'Recrutamento e Seleção',
    title: 'Agente de triagem de candidatos e agendamento de entrevistas automático',
    metrics: ['+300 candidatos triados por dia', 'Redução de 5 dias no time-to-hire']
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    criteria: 'Tempo para contratar',
    maven: 'Poucas horas',
    freelancers: '5–7 dias',
    inHouse: 'Meses',
    agencies: '2–3 semanas'
  },
  {
    criteria: 'Nível de experiência',
    maven: 'Nível sênior em IA',
    freelancers: 'Iniciante/Júnior',
    inHouse: 'Variável',
    agencies: 'Incerto'
  },
  {
    criteria: 'Comunicação',
    maven: 'Diária e estruturada',
    freelancers: 'Irregular',
    inHouse: 'Muitas reuniões',
    agencies: 'Distante'
  },
  {
    criteria: 'Primeira entrega',
    maven: '2–3 dias',
    freelancers: 'Semanas',
    inHouse: '6–7 semanas',
    agencies: '2–3 meses'
  },
  {
    criteria: 'Rescisão',
    maven: 'Um clique, sem multa',
    freelancers: 'Demorada',
    inHouse: 'Custos trabalhistas',
    agencies: 'Contratos engessados'
  }
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Agendar consultoria gratuita',
    description: 'Diagnóstico para entender processos, gargalos e volumes. Normalmente R$ 500/h, hoje grátis para qualificados.',
    icon: <Calendar className="w-8 h-8 text-brand-primary" />
  },
  {
    number: '02',
    title: 'Escopo do projeto e proposta',
    description: 'Mapeamento de workflows, definição de onde entram os Agentes de IA, integrações e cronograma.',
    icon: <GitMerge className="w-8 h-8 text-brand-primary" />
  },
  {
    number: '03',
    title: 'Início do projeto',
    description: 'Kick-off, setup técnico, primeiros agentes em produção e métricas acompanhadas.',
    icon: <Rocket className="w-8 h-8 text-brand-primary" />
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'O que exatamente é um Agente de IA e como ele se diferencia de um chatbot?',
    answer: 'Um Agente de IA não apenas responde perguntas com base em um script; ele tem memória, acesso a ferramentas (como seu CRM ou email) e autonomia para executar tarefas complexas de ponta a ponta, agindo como um funcionário digital.'
  },
  {
    question: 'Quais tarefas os Agentes de IA podem assumir no meu negócio?',
    answer: 'Desde o atendimento inicial e qualificação de leads, agendamento de reuniões, até processos internos como geração de relatórios, onboarding de clientes e triagem de documentos.'
  },
  {
    question: 'Em quanto tempo posso ter um Agente de IA rodando?',
    answer: 'Nossa metodologia permite entregar as primeiras automações funcionais em apenas 2 a 3 dias após o kick-off do projeto.'
  },
  {
    question: 'Preciso ter equipe técnica interna?',
    answer: 'Não. A Maven AI cuida de toda a implementação, integração e manutenção. Você só precisa definir os objetivos de negócio.'
  },
  {
    question: 'Como ficam segurança e privacidade dos dados?',
    answer: 'Seguimos rigorosos protocolos de segurança. Seus dados são processados em ambientes isolados e utilizados apenas para o contexto da sua automação, sem treinamento de modelos públicos.'
  }
];

export const CALENDLY_LINK = "https://calendly.com"; // Placeholder