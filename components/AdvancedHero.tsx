'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

export default function AdvancedHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const rotatingTitles = [
    "FULL STACK DEVELOPER",
    "AI/ML ENTHUSIAST", 
    "PROBLEM SOLVER",
    "FINAL YEAR CSE STUDENT"
  ]

  useEffect(() => {
    // Rotate through titles every 2 seconds
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % rotatingTitles.length)
    }, 2000)

    return () => clearInterval(titleInterval)
  }, [])

  useEffect(() => {
    if (!heroRef.current || !textRef.current || !imageRef.current) return

    const tl = gsap.timeline()

    // Hero entrance animation
    tl.fromTo(heroRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )

    // Image animation
    tl.fromTo(imageRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
      "-=1"
    )

    // Floating icons animation
    gsap.to(".floating-icon", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.2,
      repeat: -1,
      yoyo: true
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-bg opacity-5"></div>

      {/* Holographic Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.1) 50%, rgba(188, 19, 254, 0.05) 100%)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Greeting */}
            <motion.p 
              className="text-xl md:text-2xl text-cyan-400 tech-font mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="neon-cyan-glow">GREETINGS, USER</span>
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 cyber-font"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="holographic-text neon-pulse">ASHUTOSH</span>
              <br />
              <span className="holographic-text neon-pulse" style={{ animationDelay: '0.5s' }}>MISHRA</span>
            </motion.h1>

            {/* Rotating Titles Animation */}
            <motion.div
              className="mb-8 h-12 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTitleIndex}
                  className="text-xl md:text-2xl text-gray-300 tech-font holographic-text neon-pulse"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {rotatingTitles[currentTitleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Static Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-400 tech-font mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Final Year Computer Science Engineering Student | AI/ML Enthusiast | Problem Solver
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.button
                className="cyber-button text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE PORTFOLIO
              </motion.button>
              <motion.button
                className="cyber-button text-lg px-8 py-4"
                style={{
                  background: 'linear-gradient(45deg, var(--neon-pink), var(--neon-purple))'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD CV
              </motion.button>
            </motion.div>

            {/* Floating Tech Icons */}
            <div className="relative mt-12">
              {['React', 'Node.js', 'Python', 'AI/ML'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="floating-icon absolute inline-block px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-sm tech-font"
                  style={{
                    left: `${20 + index * 20}%`,
                    top: '0px',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3 + index * 0.2 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            ref={imageRef}
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="relative">
              {/* Holographic Frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50">
                <Image
                  src="/WhatsApp Image 2025-06-29 at 11.32.23_989b65e5.jpg"
                  alt="Ashutosh Mishra"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements Around Image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full neon-pulse"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full neon-pulse"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full neon-pulse"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-cyan-400 text-sm mt-2 tech-font text-center">SCROLL TO EXPLORE</p>
      </motion.div>
    </section>
  )
}
