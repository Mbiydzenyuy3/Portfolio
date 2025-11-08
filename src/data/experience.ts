export interface ExperienceItem {
  role: string
  organization: string
  date: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer (Volunteer)',
    organization: 'Tech For Good NGO',
    date: 'Jan 2023 - Present',
    description:
      'Contributed to building a new website for a non-profit, improving their online presence and donation flow using React and Tailwind.'
  },
  {
    role: 'Hackathon Collaborator',
    organization: 'Wikimedia Hackathon 2025',
    date: 'January 2025',
    description:
      'Teamed up with other developers to build a "A Movie Collabo tool" in 48 hours. I was responsible for UI/UX design and API integration.'
  },
  {
    role: 'Hackathon Collaborator',
    organization: 'Rebase Code Camp 2015',
    date: 'July 2025',
    description:
      'Teamed up with 3 other developers to build a "chess app" in 48 hours. I was responsible for the entire frontend and API integration.'
  }
  // Add more job, volunteer, or collaboration items here
]
