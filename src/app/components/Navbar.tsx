'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi' // Hamburger and Close icons
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Your Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              LEILA
            </Link>
          </div>
          <ThemeSwitcher />
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
