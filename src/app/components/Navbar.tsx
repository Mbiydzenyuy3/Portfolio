"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and Close icons
// import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className='bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50'>
      {/* Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='text-2xl font-bold text-gray-900 dark:text-white'
            >
              M.E.L
            </Link>
          </div>
          {/* ThemeSwitcher - commented out */}
          {/* <ThemeSwitcher /> */}
          {/* Desktop Navigation */}
          <div className='hidden md:flex md:space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center '>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-gray-900 focus:outline-none'
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <HiX className='h-6 w-6 text-black dark:text-white' />
              ) : (
                <HiMenu className='h-6 w-6 text-black dark:text-white' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-gray-700 dark:bg-gray-950 shadow-lg py-2 text-white'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 transition-colors duration-200 ${
                isActive(link.href)
                  ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                  : "text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
