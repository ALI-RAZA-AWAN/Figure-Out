import {
  Code2,
  BrainCircuit,
  Layers,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export type ServiceKey = 'web' | 'ai' | 'uiux' | 'app';

export interface Service {
  key: ServiceKey;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  forWho: string;
  exampleProject: string;
}

export const services: Service[] = [
  {
    key: 'web',
    icon: Code2,
    title: 'Web Development',
    tagline: 'From landing pages to full stack platforms. Fast. Scalable. Production ready.',
    description:
      'We build fast, scalable, production-ready web applications — from marketing sites to complex full-stack platforms that handle real business logic.',
    includes: [
      'Landing pages & marketing sites',
      'Full-stack web platforms (React + Node)',
      'E-commerce & marketplace systems',
      'Authentication & dashboards',
      'API design & integrations',
      'Performance optimization',
    ],
    forWho:
      'Startups and businesses that need a real, working web product — not a template.',
    exampleProject: 'Zamin — B2B Garment Marketplace',
  },
  {
    key: 'ai',
    icon: BrainCircuit,
    title: 'AI Integration',
    tagline: 'We add intelligence to your digital presence. Your product thinks. Your competitors don\u2019t.',
    description:
      'We embed AI into your products — chatbots, recommendations, automation, and intelligent features that make your product smarter than the competition.',
    includes: [
      'AI chatbots & assistants',
      'Smart recommendations & search',
      'Document & content intelligence',
      'Workflow automation',
      'Custom AI feature development',
      'Model selection & integration',
    ],
    forWho:
      'Products that want to feel intelligent, automate the boring stuff, and stand out.',
    exampleProject: 'Netflix Clone (with AI-powered recommendations)',
  },
  {
    key: 'uiux',
    icon: Layers,
    title: 'UI/UX Design',
    tagline: 'Premium interfaces designed to convert visitors into loyal clients.',
    description:
      'We design premium interfaces that look beautiful and convert. Every screen is built around your user\u2019s journey and your business goals.',
    includes: [
      'Brand & visual identity systems',
      'Landing page & product UI design',
      'Design systems & component libraries',
      'Conversion-focused layouts',
      'Interactive prototypes',
      'Mobile-first responsive design',
    ],
    forWho:
      'Brands that want a premium, polished look that earns trust and drives conversion.',
    exampleProject: 'Zamin — B2B Garment Marketplace UI',
  },
  {
    key: 'app',
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Mobile applications built with modern frameworks and AI capabilities.',
    description:
      'We build mobile applications with modern frameworks and AI capabilities — performant, beautiful, and ready for real users.',
    includes: [
      'Cross-platform mobile apps',
      'Progressive web apps (PWAs)',
      'AI-enabled mobile features',
      'Push notifications & offline support',
      'App store deployment support',
      'Ongoing maintenance',
    ],
    forWho:
      'Businesses that need a mobile presence their customers actually want to use.',
    exampleProject: 'Social Media Platform (mobile-ready)',
  },
];
