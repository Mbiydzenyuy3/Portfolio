import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  {
    href: 'https://github.com/your-username',
    label: 'GitHub',
    icon: FaGithub
  },
  {
    href: 'https://linkedin.com/in/your-username',
    label: 'LinkedIn',
    icon: FaLinkedin
  },
  {
    href: 'https://twitter.com/your-username',
    label: 'Twitter/X',
    icon: FaTwitter
  }
  // Add more socials as needed
]

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400
                           transition-colors duration-200"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mbiydzenyuy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
