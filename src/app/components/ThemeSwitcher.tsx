"use client";

import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by using suppressHydrationWarning
  return (
    <button
      aria-label='Toggle Dark Mode'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className='p-2 rounded-full text-gray-700 dark:text-gray-300
                 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
      suppressHydrationWarning
    >
      <span className='sr-only'>Toggle theme</span>
      {mounted && resolvedTheme === "dark" ? (
        <HiSun className='h-6 w-6' />
      ) : (
        <HiMoon className='h-6 w-6' />
      )}
    </button>
  );
};
