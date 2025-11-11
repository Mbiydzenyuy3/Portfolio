'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-6 h-6" />
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300
                 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {theme === 'dark' ? (
        <HiSun className="h-6 w-6" />
      ) : (
        <HiMoon className="h-6 w-6" />
      )}
    </button>
  )
}
