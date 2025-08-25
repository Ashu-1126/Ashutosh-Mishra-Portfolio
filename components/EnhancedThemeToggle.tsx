'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

export default function EnhancedThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  if (!mounted) {
    return (
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    )
  }

  const themes: { value: Theme; icon: any; label: string }[] = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' }
  ]

  return (
    <div className="relative">
      <motion.div
        className="flex bg-white/80 dark:bg-gray-800/80 rounded-full p-1 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {themes.map((themeOption) => (
          <motion.button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`relative p-2 rounded-full transition-all duration-300 ${
              theme === themeOption.value
                ? 'text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === themeOption.value && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                layoutId="activeTheme"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <div className="relative z-10 flex items-center gap-2">
              <themeOption.icon className="w-4 h-4" />
              <span className="text-xs font-medium hidden sm:block">
                {themeOption.label}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Theme indicator */}
      <AnimatePresence>
        {theme !== 'system' && (
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
