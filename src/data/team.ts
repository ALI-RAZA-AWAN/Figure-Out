export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  github?: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Ali Raza Awan',
    role: 'Co-Founder & Full Stack + AI Developer',
    bio: 'Specializes in full stack web development and AI integration. Builds products that think.',
    linkedin: 'https://linkedin.com/in/ali-raza-awan',
    github: 'https://github.com/ali-raza-awan',
    image:
      '/download.jfif',
  },
  {
    name: 'Rana Hammad',
    role: 'Co-Founder & UI/UX Designer + Full Stack Developer',
    bio: 'Specializes in premium digital experiences and full stack development.',
    linkedin: 'https://linkedin.com/in/ali-raza-awan',
    image:
      '/download.jfif',
  },
];
