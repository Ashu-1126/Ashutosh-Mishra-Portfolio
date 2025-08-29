'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { AnimatePresence } from 'framer-motion'
import { ArrowDown, Code, Database, Cloud, Brain, Globe, Shield, Zap, Cpu, Server, Lock, Monitor, Smartphone } from 'lucide-react'

gsap.registerPlugin(TextPlugin)

export default function AdvancedHero() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const titles = [
    "Full Stack Developer",
    "AI/ML Enthusiast", 
    "Problem Solver",
    "Final Year CSE Student"
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    if (textRef.current) {
      const tl = gsap.timeline()
      tl.fromTo(textRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }

    // Floating icons animation
    gsap.to(".floating-icon", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.2,
      repeat: -1,
      yoyo: true
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section 
      id = "home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: Code, x: "10%", y: "20%", delay: 0 },
          { icon: Database, x: "85%", y: "15%", delay: 0.5 },
          { icon: Cloud, x: "15%", y: "80%", delay: 1 },
          { icon: Brain, x: "80%", y: "75%", delay: 1.5 },
          { icon: Globe, x: "50%", y: "10%", delay: 2 },
          { icon: Shield, x: "5%", y: "60%", delay: 2.5 },
          { icon: Zap, x: "90%", y: "40%", delay: 3 },
          { icon: Cpu, x: "70%", y: "25%", delay: 3.5 },
          { icon: Server, x: "25%", y: "90%", delay: 4 },
          { icon: Lock, x: "60%", y: "85%", delay: 4.5 },
          { icon: Monitor, x: "40%", y: "30%", delay: 5 },
          { icon: Smartphone, x: "75%", y: "60%", delay: 5.5 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`floating-icon absolute text-blue-400/40 dark:text-blue-300/40`}
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
          >
            <item.icon size={24} />
          </motion.div>
        ))}
      </div>

      <div className="container-professional relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={textRef}
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 professional-title">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Ashutosh Mishra
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-20 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 professional-subtitle">
                {titles[currentTitle]}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about creating innovative solutions and turning ideas into reality. 
              Specialized in modern web technologies and emerging AI/ML trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary text-lg px-8 py-4">
                View My Work
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Professional Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-professional-lg">
                <Image
                  src="/WhatsApp Image 2025-06-29 at 11.32.23_989b65e5.jpg"
                  alt="Ashutosh Mishra"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-600 dark:text-slate-400"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
