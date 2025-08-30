'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

// Define the props interface for the component
interface LoadingScreenProps {
  onLoaded: () => void;
}

// Add the onLoaded prop to the component signature
export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Call the onLoaded prop after a delay
          setTimeout(() => {
            setIsLoading(false);
            onLoaded(); 
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 8
      });
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [onLoaded]); // Add onLoaded to the dependency array

  useEffect(() => {
    if (isLoading) {
      gsap.to(".loading-particle", {
        y: -100,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        repeat: -1,
        ease: "power2.out"
      });
    }
  }, [isLoading]);

  if (!isLoading) return null;

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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
