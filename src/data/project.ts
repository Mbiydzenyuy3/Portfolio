export interface Project {
  id?: number
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
    id: 1,
    slug: 'Peppermint-website',
    title: 'A Digital Solution For Businesses',
    description:
      'The site you are on right now! Built with HTML, CSS... A sample landing page for Peppermint.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzotD_pOZuusna8HHVmBOmjsVSMFZJ84jgw&s',
    techStack: ['ReactJs', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/Mbiydzenyuy3/PJ-peppermint',
    liveUrl: 'https://mbiydzenyuy3.github.io/PJ-peppermint'
  },
  {
    id: 2,
    slug: 'e-commerce-app',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce site with product listings, a shopping cart, and a checkout process.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCou9VuyIKrb6NcZnVWY4aVHgOZzHtBl74GQ&s',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/ecommerce-app'
  },
  {
    id: 3,
    slug: 'chess-app',
    title: 'Chess App',
    description:
      'A web-based chess application with real-time multiplayer support.',
    imageUrl:
      'https://img.freepik.com/premium-vector/chess-game-ui-interface-button-set_172107-2567.jpg?semt=ais_hybrid&w=740&q=80',
    techStack: ['React', 'Socket.io', 'Node.js'],
    githubUrl: 'https://github.com/your-username/chess-app'
  },
  {
    id: 4,
    slug: 'store-management-system',
    title: 'Store Management System',
    description:
      'A comprehensive store management system with inventory tracking, order management, and sales reporting.',
    imageUrl:
      'https://cdn.dribbble.com/userupload/42935377/file/original-bfacc8467e5cab7fa058df82e91bba50.jpg?format=webp&resize=400x300&vertical=center',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/store-management-system'
  },
  {
    id: 5,
    slug: 'auth-and-user-management-system',
    title: 'Auth and User Management System',
    description:
      'A comprehensive authentication and user management system with role-based access control, user profiles, and secure authentication flows.',
    imageUrl:
      'https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/66ccb1cfa61832a5e4be7421_user-management-hero-image.png',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl:
      'https://github.com/your-username/auth-and-user-management-system'
  },
  {
    id: 6,
    slug: 'file-upload-service',
    title: 'File Upload Service',
    description:
      'A robust file upload service with support for large files, progress tracking, and secure storage.',
    imageUrl:
      'https://www.sketchappsources.com/resources/source-image/upload-file-madalina-taina.png',
    techStack: ['React', 'Node.js', 'Express', 'DynamoDB'],
    githubUrl: 'https://github.com/your-username/file-upload-service'
  }
]
