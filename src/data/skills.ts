export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5',
      'CSS3'
    ]
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs']
  },
  {
    title: 'Tools & Other',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Figma',
      'Responsive Design',
      'API Integration'
    ]
  }
]
