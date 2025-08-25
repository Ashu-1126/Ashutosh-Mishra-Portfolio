'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Mail, Phone, Calendar } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I'm a passionate Computer Science Engineering student in my final year, 
              with a strong foundation in backend development and machine learning. 
              I love creating innovative solutions and learning new technologies.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              My journey in tech started with curiosity and has evolved into a passion 
              for building scalable backend applications, solving complex problems, and 
              exploring the fascinating world of machine learning.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">Prayagraj, India</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">ashutosh161204@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">+91 7985365057</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">Available for opportunities</span>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Bachelor of Technology in Computer Science</h4>
                  <p className="text-blue-100">United Institute of Technology, Prayagraj</p>
                  <p className="text-blue-100">2022 - 2026</p>
                  <p className="text-blue-100">SGPA: 7.5/10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 