export interface Project {
  slug: string
  title: string
  description: string
  imageUrl: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string // Optional
}

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'My Developer Portfolio',
    description: 'The site you are on right now! Built with...',
    imageUrl: '/images/projects/portfolio.jpg',
    techStack: ['ReactJs', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/your-username/my-portfolio',
    liveUrl: 'https://acpba-academy-pi.vercel.app/'
  }
]
