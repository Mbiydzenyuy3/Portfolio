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
    organization: 'University Hackathon 2022',
    date: 'Oct 2022',
    description:
      'Teamed up with 3 other developers to build a "study buddy" app in 48 hours. I was responsible for the entire frontend and API integration.'
  }
  // Add more job, volunteer, or collaboration items here
]
