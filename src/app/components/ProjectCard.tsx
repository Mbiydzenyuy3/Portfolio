/* eslint-disable @next/next/no-img-element */

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import type { Project } from '@/data/project' // Import our new type
import { HiCode } from 'react-icons/hi'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
                 transition-all duration-300 hover:shadow-xl"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200
              text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <HiCode className="h-5 w-5 mr-1" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <HiArrowTopRightOnSquare className="h-5 w-5 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
