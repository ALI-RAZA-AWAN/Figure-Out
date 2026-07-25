export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'zamin',
    name: 'Zamin',
    description: 'Full stack B2B platform connecting manufacturers and resellers across Pakistan',
    longDescription:
      'A complete B2B marketplace built from scratch — connecting garment manufacturers and resellers across Pakistan with product listings, order flow, and role-based dashboards.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ali-raza-awan',
    image:
      'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Full Stack Platform',
    featured: true,
  },
  {
    id: 'ecommerce-codealpha',
    name: 'E-commerce Store',
    description: 'Complete online store with cart, auth, and order management',
    longDescription:
      'A complete e-commerce experience with product browsing, cart, authentication, and full order management — built as part of the CodeAlpha program.',
    tags: ['React', 'Express', 'MongoDB'],
    link: 'https://github.com/ali-raza-awan',
    image:
      'https://images.pexels.com/photos/5650041/pexels-photo-5650041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'E-commerce',
  },
  {
    id: 'social-codealpha',
    name: 'Social Media Platform',
    description: 'Mini social platform with profiles, posts, likes and follow system',
    longDescription:
      'A mini social platform featuring user profiles, posts, likes, and a follow system — designed to demonstrate real-world social UX patterns.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ali-raza-awan',
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Social Platform',
  },
  {
    id: 'netflix-clone',
    name: 'Netflix Clone',
    description: 'Premium streaming UI with responsive design and component architecture',
    longDescription:
      'A premium streaming UI clone with responsive design, reusable component architecture, and a focus on visual polish and performance.',
    tags: ['React', 'CSS'],
    link: 'https://github.com/ali-raza-awan',
    image:
      'https://images.pexels.com/photos/2789465/pexels-photo-2789465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'UI Clone',
  },
];
