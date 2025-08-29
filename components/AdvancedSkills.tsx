'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { 
  Code, Database, Cloud, Brain, Globe, Shield, 
  Zap, Cpu, Server, Lock, Monitor, Smartphone 
} from 'lucide-react'
import { cn } from '../lib/utils'

interface Skill {
  name: string
  level: number
  icon: any
  color: string
  gradient: string
  description: string
  technologies: string[]
}

const skills: Skill[] = [
  {
    name: "Backend Development",
    level: 90,
    icon: Server,
    color: "from-blue-500 to-blue-600",
    gradient: "from-blue-500/20 to-blue-600/20",
    description: "Building robust, scalable server-side applications",
    technologies: ["Node.js", "Express.js", "Mongoose", "Async", "JWT Auth", "REST API"]
  },
  {
    name: "Frontend Development",
    level: 85,
    icon: Monitor,
    color: "from-purple-500 to-purple-600",
    gradient: "from-purple-500/20 to-purple-600/20",
    description: "Creating responsive and interactive user interfaces",
    technologies: ["React.js", "Bootstrap", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    name: "ML/AI",
    level: 88,
    icon: Brain,
    color: "from-green-500 to-green-600",
    gradient: "from-green-500/20 to-green-600/20",
    description: "Implementing machine learning algorithms and analyzing data to solve complex problems",
    technologies: ["TensorFlow", "Scikit-Learn", "YOLO", "NLP", "PyTorch"]
  },
  {
    name: "Databases",
    level: 75,
    icon: Database,
    color: "from-orange-500 to-orange-600",
    gradient: "from-orange-500/20 to-orange-600/20",
    description: "Designing and managing efficient, scalable database solutions",
    technologies: ["PostrgreSQL", "MongoDB", "MySQL", "SQLite"]
  },
  {
    name: "Languages",
    level: 80,
    icon: Code,
    color: "from-indigo-500 to-indigo-600",
    gradient: "from-indigo-500/20 to-indigo-600/20",
    description: "Proficient in multiple programming languages for both development and problem-solving",
    technologies: ["TypeScript", "Python", "C++", "SQL", "Java", "Dart(Basic)"]
  },
  {
    name: "Deployment Tools & Platforms",
    level: 70,
    icon: Cloud,
    color: "from-pink-500 to-pink-600",
    gradient: "from-pink-500/20 to-pink-600/20",
    description: "Automating the build, test, and deployment of applications to cloud environments",
    technologies: ["Git", "Docker", "Vercel", "Hugging Face", "Postman", "Google Colab"]
  }
]

export default function AdvancedSkills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && containerRef.current) {
      gsap.fromTo(".skill-card", 
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.8,
          rotationY: 45
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [inView])

  return (
    <motion.section 
      id = "skills"
      ref={inViewRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ y }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 dark:bg-purple-500/5 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card group relative bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 cursor-pointer backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                rotateX: 2
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => setSelectedSkill(skill)}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredSkill === skill.name && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Other Skills & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "OOPs", "DBMS", "Linux", "OS", "DSA", "Networks",
              "VS Code", "Jupyter", "Schema", "HTML", "OpenCV", "LLMs"
            ].map((tool, index) => (
              <motion.div
                key={tool}
                className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedSkill.color} flex items-center justify-center`}>
                  <selectedSkill.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Proficiency: {selectedSkill.level}%
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedSkill.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Technologies & Tools
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedSkill.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
