'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "INITIALIZING NEURAL NETWORKS...",
    "LOADING QUANTUM PROCESSORS...",
    "ESTABLISHING HOLOGRAPHIC INTERFACE...",
    "SYNCHRONIZING CYBER MATRIX...",
    "ACTIVATING NEON PROTOCOLS...",
    "SYSTEM READY FOR DEPLOYMENT..."
  ]

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        return prev + Math.random() * 8
      })
    }, 150)

    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length)
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])

  useEffect(() => {
    if (isLoading) {
      gsap.to(".loading-particle", {
        y: -100,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        repeat: -1,
        ease: "power2.out"
      })
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center cyber-grid"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 matrix-bg opacity-20"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="loading-particle absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>

        {/* Loading Content */}
        <div className="relative z-10 text-center">
          {/* Logo/Name with Glitch Effect */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 cyber-font neon-blue-glow"
              animate={{ 
                textShadow: [
                  "0 0 20px var(--neon-blue), 0 0 40px var(--neon-blue), 0 0 60px var(--neon-blue)",
                  "0 0 30px var(--neon-purple), 0 0 60px var(--neon-purple), 0 0 90px var(--neon-purple)",
                  "0 0 20px var(--neon-blue), 0 0 40px var(--neon-blue), 0 0 60px var(--neon-blue)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AM
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl tech-font holographic-text neon-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ASHUTOSH MISHRA
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-cyan-300 mt-2 tech-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              CYBERPUNK DEVELOPER
            </motion.p>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.p
              key={currentText}
              className="text-lg md:text-xl text-cyan-400 tech-font font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {loadingTexts[currentText]}
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-80 md:w-96 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="bg-gray-800 rounded-full h-3 border border-cyan-500 overflow-hidden">
              <motion.div
                className="h-full cyber-loading rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              className="text-cyan-400 text-sm mt-2 tech-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {Math.round(progress)}% COMPLETE
            </motion.p>
          </motion.div>

          {/* Status Indicators */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {['NEURAL', 'QUANTUM', 'HOLO', 'CYBER'].map((status, index) => (
              <motion.div
                key={status}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.2 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: index * 0.3 }}
                />
                <span className="text-green-400 text-sm tech-font">{status}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.button
              className="cyber-button text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoading(false)}
            >
              ENTER THE MATRIX
            </motion.button>
          </motion.div>
        </div>

        {/* Glitch Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: 'linear-gradient(45deg, transparent 40%, rgba(255, 0, 128, 0.1) 50%, transparent 60%)',
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
