'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code } from 'lucide-react'

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful UI and location-based services.',
      technologies: ['React', 'OpenWeatherMap API', 'CSS3', 'Geolocation'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/10 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <motion.div 
                  className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-purple-600 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code size={64} className="text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100"
                    whileHover={{ color: '#3B82F6' }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 