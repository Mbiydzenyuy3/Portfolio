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
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3'
    ]
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Tools & Other',
    skills: ['Git', 'GitHub', 'Figma', 'Cloud']
  }
]
