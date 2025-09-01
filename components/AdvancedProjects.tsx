'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Play } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Protein Structure Prediction",
    description: "",
    image: "/Screenshot 2025-08-29 175510.png",
    technologies: ["React", "TensorFlow.js", "Python", "Bioinformatics", "Vercel"],
    github: "https://github.com/yourusername/protein-structure-prediction",
    youtube: "https://www.youtube.com/watch?v=your-video-id-1",
  },
  {
    id: 2,
    title: "SunMAP",
    description: "",
    image: "/api/placeholder/400/300",
    technologies: ["React", "TensorFlow.js", "Python", "Bioinformatics", "Vercel"],
    github: "https://github.com/yourusername/protein-structure-prediction",
    youtube: "https://www.youtube.com/watch?v=your-video-id-1",
  },
  {
    id: 3,
    title: "KavachG",
    description: "",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Python", "Flask", "OpenAI API", "WebSocket"],
    github: "https://github.com/yourusername/kavachg",
    youtube: "https://www.youtube.com/watch?v=your-video-id-2",
  },
  {
    id: 4,
    title: "Blood Group Detection",
    description: "",
    image: "/Screenshot 2025-08-29 181813.png",
    technologies: ["React", "TensorFlow", "Image Processing", "Hugging Face"],
    github: "https://github.com/yourusername/blood-group-detection",
    youtube: "https://www.youtube.com/watch?v=your-video-id-3",
  },
  {
    id: 5,
    title: "Product Recommendation System",
    description: "",
    image: "/Screenshot 2025-08-29 181238.png",
    technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "MongoDB"],
    github: "https://github.com/yourusername/recommendation-system",
    youtube: "https://www.youtube.com/watch?v=your-video-id-4",
  },
  {
    id: 6,
    title: "Jarvis AI",
    description: "",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "SpeechRecognition", "OpenAI API", "PyQt5"],
    github: "https://github.com/yourusername/jarvis-ai",
    youtube: "https://www.youtube.com/watch?v=your-video-id-5",
  },
  {
    id: 7,
    title: "Online Bookstore",
    description: "",
    image: "/Screenshot 2025-08-29 182151.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/online-bookstore",
    youtube: "https://www.youtube.com/watch?v=your-video-id-6",
  }
]

export default function CarouselProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden border border-gray-100/50 dark:border-gray-700/50"
            >
              <div className="md:flex">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {currentProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5 inline mr-2" />
                        GitHub
                      </a>
                    )}
                    {currentProject.youtube && (
                      <a
                        href={currentProject.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                      >
                        <Play className="w-5 h-5 inline mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={handlePrev}
              className="bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 p-2 rounded-full backdrop-blur-sm shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={handleNext}
              className="bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 p-2 rounded-full backdrop-blur-sm shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} transition-colors duration-200`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}