export interface Project {
  id?: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string | string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "contact-manager-app",
    title: "KITH Contact Manager",
    description:
      "KITH is a contact manager build for you. Kith reminds you where you meet your connections and contacts and why the matter",
    imageUrl:
      "https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg",
    techStack: ["NextJS", "ReactJs", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Mbiydzenyuy3/contact-manager",
    liveUrl: "https://contact-manager-app-kith.vercel.app/"
  },
  {
    id: 2,
    slug: "alimana",
    title: "Alimana",
    description:
      "Alimana is a  store management system that allows you to manage your inventory, orders, and sales.",
    imageUrl:
      "https://img.freepik.com/premium-vector/warehouse-workers-check-inventory-levels-items-shelves-inventory-management-stock-control-vector-illustration_327176-1435.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Diderot-sielinou/Alimana",
    liveUrl: "https://www.alimana.cc"
  },
  {
    id: 3,
    slug: "chess-app",
    title: "Chess App",
    description:
      "A web-based chess application with real-time multiplayer support.",
    imageUrl:
      "https://img.freepik.com/premium-vector/chess-game-ui-interface-button-set_172107-2567.jpg?semt=ais_hybrid&w=740&q=80",
    techStack: ["React Native", "Socket.io", "Typescript", "NestJs"],
    githubUrl: "https://github.com/Mbiydzenyuy3/ChessMeet"
  },
  {
    id: 4,
    slug: "Appointment Booking",
    title: "BOOKEasy",
    description:
      "BookEasy is an appointment booking app that allows users to schedule and manage appointments with ease.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/42935377/file/original-bfacc8467e5cab7fa058df82e91bba50.jpg?format=webp&resize=400x300&vertical=center",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/your-username/store-management-system",
    liveUrl: "https://appointment-booking-api-1-7zro.onrender.com"
  },

  {
    id: 5,
    slug: "movie-explorer-app",
    title: "Movie Explorer App",
    description: "",
    imageUrl:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/44/43/26/70/63/95/movie_asset_27e17ade-8cb7-4388-874e-35f5ef7cb746.jpg?format=webp",
    techStack: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/Mbiydzenyuy3/movie-explorer-app",
    liveUrl: "https://my-movie-app-neon.vercel.app"
  },

  {
    id: 6,
    slug: "acpba",
    title: "ACPBA",
    description:
      "This is a website for a sport academy aimed at showcasing young African talented basketball players to the world. ACPBA, Africa Can Play Basketball.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Rk_3BzyOk7fjiHTRgILK9F3ZQ4r8ajJpvg&s",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Mbiydzenyuy3/acpba-academy",
    liveUrl: "https://acpba-academy-africa.vercel.app"
  },

  {
    id: 7,
    slug: "auth-and-user-management-system",
    title: "Auth and User Management System",
    description:
      "A comprehensive authentication and user management system with role-based access control, user profiles, and secure authentication flows.",
    imageUrl:
      "https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/66ccb1cfa61832a5e4be7421_user-management-hero-image.png",
    techStack: [
      "Monorepo",
      "React",
      "AWS Cognito",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    githubUrl:
      "https://github.com/your-username/auth-and-user-management-system"
  },
  {
    id: 8,
    slug: "file-upload-service",
    title: "File Upload Service",
    description:
      "A robust file upload service with support for large files, progress tracking, and secure storage.",
    imageUrl:
      "https://www.sketchappsources.com/resources/source-image/upload-file-madalina-taina.png",
    techStack: ["React", "Node.js", "Express", "DynamoDB"],
    githubUrl: [
      "https://github.com/Mbiydzenyuy3/file-upload-frontend",
      "https://github.com/Mbiydzenyuy3/file-upload-backend"
    ]
  }
];
