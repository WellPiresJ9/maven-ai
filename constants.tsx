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
    id: 'Fl7cjXQfyRM',
    title: 'Agente IA de Vendas para Ecommerce',
    tag: 'E-commerce',
    thumbnailUrl: 'https://picsum.photos/id/1/800/600',
    description: 'Nosso agente de IA automatiza a qualificação de leads, recomenda produtos e finaliza vendas diretamente no site ou WhatsApp. Tudo acontece em piloto automático, aumentando a conversão em até 35%.'
  },
  {
    id: 'pcS5JaCzyuM',
    title: 'Criei uma IA para Vender Transformadores de Energia no WhatsApp!',
    tag: 'Indústria',
    thumbnailUrl: 'https://picsum.photos/id/2/800/600',
    description: 'Veja como estruturamos um agente técnico capaz de entender especificações de engenharia complexas e gerar orçamentos para transformadores industriais em tempo real.'
  },
  {
    id: 'O7Gh0g735U4',
    title: 'Estrutura de Vendas 100% Automatizada + App feito com IA',
    tag: 'SaaS',
    thumbnailUrl: 'https://picsum.photos/id/3/800/600',
    description: 'Um deep-dive na arquitetura de um sistema completo onde o Agente controla desde a prospecção fria até o onboarding do usuário dentro do aplicativo.'
  },
  {
    id: '4zZ8dnQO3rA',
    title: 'Agente de IA para Loja de Vinhos',
    tag: 'Varejo',
    thumbnailUrl: 'https://picsum.photos/id/4/800/600',
    description: 'Um sommelier digital que aprende o gosto do cliente baseado em compras passadas e sugere as melhores harmonizações, integrado diretamente ao estoque da loja física.'
  }
];

export const CASES: CaseStudy[] = [
  {
    company: 'Tecfil',
    logoUrl: '/assets/logos/tecfil-logo1.png',
    href: '#case-tecfil',
    category: 'Indústria Automotiva',
    title: 'Como a TECFIL reduziu o tempo de consulta de informações em 90%',
    metrics: ['+200 horas de economia mensal', '35% de redução no tempo de atendimento']
  },
  {
    company: 'Wittel',
    logoUrl: '/assets/logos/logo%20wittel%201.png',
    href: '#case-wittel',
    category: 'Tecnologia e CX',
    title: 'Como a Wittel aumentou a taxa de comparecimento em reuniões de vendas em 70%',
    metrics: ['Aumento de 70% na taxa de comparecimento', '85% de taxa de resposta NPS']
  },
  {
    company: 'Hunters',
    logoUrl: '/assets/logos/hunters_manpower_logo1.jpeg',
    href: '#case-hunters',
    category: 'Recrutamento e Seleção',
    title: 'Automação total da etapa inicial de entrevistas com Júlia — a AI Embarcadora',
    metrics: ['Automação total de entrevistas iniciais', 'Base tecnológica para escalar recrutamento']
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    criteria: 'Tempo para contratar',
    maven: 'Poucas Horas',
    freelancers: '5-7 dias',
    inHouse: 'Meses',
    agencies: '2-3 Semanas'
  },
  {
    criteria: 'Nível de Experiência',
    maven: 'Nível Sénior',
    freelancers: 'Iniciante ou Nível Junior',
    inHouse: 'Boa (Cruze os dedos)',
    agencies: 'Confie na Sorte'
  },
  {
    criteria: 'Comunicação',
    maven: 'Diária',
    freelancers: 'Inexistente',
    inHouse: 'Muitas falhas',
    agencies: 'Fantasma'
  },
  {
    criteria: 'Primeira Entrega',
    maven: '2-3 dias',
    freelancers: 'Várias Semanas',
    inHouse: '6-7 Semanas',
    agencies: '2-3 Meses'
  },
  {
    criteria: 'Rescisão',
    maven: 'Um clique + 0 R$',
    freelancers: 'Demorada',
    inHouse: 'Pesadelo + Dores de Cabeça',
    agencies: 'Demorada'
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
    question: 'O que faz uma agência de automação com IA?',
    answer: 'Uma agência de automação com IA transforma processos operacionais em sistemas digitais inteligentes. Nosso trabalho é entender como o seu negócio funciona hoje e automatizar decisões, tarefas e fluxos usando IA integrada aos seus sistemas, reduzindo esforço manual e aumentando eficiência.'
  },
  {
    question: 'Quais Agentes de IA posso criar?',
    answer: 'Praticamente qualquer agente, desde que exista um processo estruturado e documentado. Se algo hoje é feito por pessoas seguindo regras, etapas ou decisões claras, isso pode ser transformado em um agente de IA operando de forma digital e automatizada.'
  },
  {
    question: 'Preciso ter equipe técnica?',
    answer: 'Não. O que é necessário é apenas um responsável pelo projeto (pode ser você mesmo) para alinhar processos, validar decisões e acompanhar as etapas. Toda a parte técnica fica sob nossa responsabilidade.'
  },
  {
    question: 'Como funciona a segurança dos dados?',
    answer: 'A segurança é tratada desde a arquitetura do projeto. Os dados são acessados apenas para a finalidade do sistema, com controle de permissões, boas práticas de armazenamento e respeito à LGPD. Nenhuma informação é utilizada para treinar modelos públicos.'
  },
  {
    question: 'Em quanto tempo posso ter um agente rodando?',
    answer: 'A primeira entrega funcional acontece, em média, entre 2 e 3 dias. A partir disso, o sistema evolui com ajustes finos, melhorias e novas automações conforme o projeto avança.'
  }
];

export const CALENDLY_LINK = "https://calendly.com/wellpires/discovery-call";