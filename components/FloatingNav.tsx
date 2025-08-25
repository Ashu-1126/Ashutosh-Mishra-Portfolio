'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { Home, User, Zap, FolderOpen, Mail, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'
import EnhancedThemeToggle from './EnhancedThemeToggle'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Skills', href: '/skills', icon: Zap },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
]

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8])
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
        style={{
          background: `rgba(255, 255, 255, ${backgroundOpacity})`,
          backdropFilter: `blur(${backdropBlur}px)`,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-1 bg-white/70 dark:bg-gray-900/70 rounded-full px-6 py-3 shadow-lg border border-white/20 dark:border-gray-700/20">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={cn(
                    "relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer group",
                    isActive 
                      ? "bg-blue-500 text-white" 
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed top-6 right-6 z-50 lg:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-white/80 dark:bg-gray-900/80 rounded-full shadow-lg border border-white/20 dark:border-gray-700/20 backdrop-blur-md flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-16 right-0 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 backdrop-blur-md p-4 min-w-[200px]"
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                      <motion.div
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer group",
                          isActive 
                            ? "bg-blue-500 text-white" 
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </motion.div>
                    </Link>
                  )
                })}
                
                {/* Theme Toggle in Mobile Menu */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="px-4 py-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                      Theme
                    </span>
                    <EnhancedThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Desktop Theme Toggle */}
      <motion.div
        className="fixed top-6 right-6 z-50 hidden lg:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <EnhancedThemeToggle />
      </motion.div>
    </>
  )
}
