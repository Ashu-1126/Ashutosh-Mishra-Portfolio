'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Eye } from 'lucide-react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    id: 1,
    title: "Protein Structure Prediction",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est placeat maxime at illum nostrum, cumque rerum exercitationem repudiandae, impedit pariatur atque assumenda voluptatem corrupti quod omnis nulla libero voluptas illo!",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "KavachG",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est placeat maxime at illum nostrum, cumque rerum exercitationem repudiandae, impedit pariatur atque assumenda voluptatem corrupti quod omnis nulla libero voluptas illo!",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Python", "Flask", "OpenAI API", "WebSocket"],
    github: "https://github.com/yourusername/ai-chat",
    live: "https://ai-chat-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Blood Group Detection using fingerprint",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est placeat maxime at illum nostrum, cumque rerum exercitationem repudiandae, impedit pariatur atque assumenda voluptatem corrupti quod omnis nulla libero voluptas illo!",
    image: "/api/placeholder/400/300",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com",
    featured: true
  },
  {
    id: 4,
    title: "Product Recommendation System",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est placeat maxime at illum nostrum, cumque rerum exercitationem repudiandae, impedit pariatur atque assumenda voluptatem corrupti quod omnis nulla libero voluptas illo!",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Chart.js", "OpenWeatherMap API", "Geolocation"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-demo.com",
    featured: true
  },
  {
    id: 5,
    title: "Jarvis AI",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est placeat maxime at illum nostrum, cumque rerum exercitationem repudiandae, impedit pariatur atque assumenda voluptatem corrupti quod omnis nulla libero voluptas illo!",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-demo.com",
    featured: true
  },
  {
    id: 6,
    title: "Online Bookstore",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est placeat maxime at illum nostrum, cumque rerum exercitationem repudiandae, impedit pariatur atque assumenda voluptatem corrupti quod omnis nulla libero voluptas illo!",
    image: "/api/placeholder/400/300",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/yourusername/social-analytics",
    live: "https://analytics-demo.com",
    featured: true
  }
]

export default function AdvancedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll('.project-card')
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 100,
          rotationY: -15,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group relative bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 cursor-pointer backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-blue-500" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-green-500">
                    {project.featured ? 'Featured' : ''}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4 inline mr-2" />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
