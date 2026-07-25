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
  id: 'sehat-zone-clinic',
  name: 'Sehat Zone Clinic',
  description: 'Healthcare management and appointment scheduling platform for modern clinics',
  longDescription:
    'A full-featured healthcare management platform built to streamline clinic operations, patient appointments, and medical service showcases.',
  tags: ['React', 'Tailwind CSS', 'TypeScript'],
  link: 'https://sehat-zone-clinic.lovable.app',
  image:
    '/sehat clinic.PNG',
  category: 'Healthcare App',
  featured: true,
},
{
  id: 'mandibahauddin-adventures',
  name: 'Markaz Travel & Tours',
  description: 'Tourism and local adventure exploration platform for Mandi Bahauddin',
  longDescription:
    'An immersive travel and tourism web app designed to showcase adventure spots, local culture, and community activities across Mandi Bahauddin.',
  tags: ['React', 'Tailwind CSS', 'TypeScript'],
  link: 'https://mandibahauddin-adventures.lovable.app/',
  image:
    '/markaz travel.PNG',
  category: 'Web Application',
  featured: true,
},
  
  {
    id: 'zamin',
    name: 'Zamin',
    description: 'Full stack B2B platform connecting manufacturers and resellers across Pakistan',
    longDescription:
      'A complete B2B marketplace built from scratch — connecting garment manufacturers and resellers across Pakistan with product listings, order flow, and role-based dashboards.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ALI-RAZA-AWAN/Zamin',
    image:
      '/zamin.PNG',
    category: 'Full Stack Platform',
    featured: true,
  },
  {
    id: 'ecommerce-codealpha',
    name: 'Aurora - E-commerce Store',
    description: 'Complete online store with cart, auth, and order management',
    longDescription:
      'A complete e-commerce experience with product browsing, cart, authentication, and full order management — built as part of the CodeAlpha program.',
    tags: ['React', 'Express', 'MongoDB'],
    link: 'https://github.com/ALI-RAZA-AWAN/CodeAlpha_Ecommerce-Store',
    image:
      '/aurora.PNG',
    category: 'E-commerce',
  },
  {
    id: 'social-codealpha',
    name: 'Pulse - Social Media Platform',
    description: 'Mini social platform with profiles, posts, likes and follow system',
    longDescription:
      'A mini social platform featuring user profiles, posts, likes, and a follow system — designed to demonstrate real-world social UX patterns.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ALI-RAZA-AWAN/CodeAlpha_SocialMediaApp',
    image:
      '/pulse.PNG',
    category: 'Social Platform',
  },

];
