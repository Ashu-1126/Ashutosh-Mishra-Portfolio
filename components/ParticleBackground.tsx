'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ParticleBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      
      {/* Animated Holographic Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.2) 50%, rgba(188, 19, 254, 0.1) 100%)'
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
      
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(188, 19, 254, 0.3) 0%, rgba(255, 0, 128, 0.2) 50%, rgba(0, 255, 136, 0.1) 100%)'
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Neon Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 ? 'var(--neon-blue)' : 
                       i % 4 === 1 ? 'var(--neon-purple)' : 
                       i % 4 === 2 ? 'var(--neon-pink)' : 'var(--neon-green)',
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Interactive Mouse Trail */}
      <motion.div
        className="absolute w-4 h-4 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: 'radial-gradient(circle, var(--neon-blue), transparent)',
          filter: 'blur(1px)',
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
      />

      {/* Energy Field Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px h-32"
          style={{
            left: `${(i * 12.5) + 6.25}%`,
            top: '50%',
            background: 'linear-gradient(to bottom, transparent, var(--neon-blue), transparent)',
            transform: 'translateY(-50%)',
          }}
          animate={{
            height: [0, 200, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Holographic Scan Lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${i * 2}%` }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Overlay */}
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
    </div>
  )
}
