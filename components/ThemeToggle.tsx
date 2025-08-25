'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Sparkles } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem('theme') || 'light'
    setIsDark(theme === 'dark')
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle relative inline-flex h-10 w-20 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-400 dark:to-purple-500 opacity-0 dark:opacity-20"
        animate={{
          opacity: isDark ? 0.2 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle thumb */}
      <motion.div
        className="theme-toggle-thumb relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-blue-400 shadow-lg"
        animate={{
          x: isDark ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-blue-600" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Sparkles effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <Sparkles className="absolute top-1 right-1 h-3 w-3 text-yellow-400 dark:text-blue-300" />
        <Sparkles className="absolute bottom-1 left-1 h-2 w-2 text-orange-400 dark:text-purple-300" />
      </motion.div>
    </motion.button>
  )
} 