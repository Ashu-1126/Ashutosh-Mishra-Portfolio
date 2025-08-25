'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiPython, SiCplusplus, SiJavascript, SiMysql, SiMongodb, SiFastapi, SiTensorflow, SiPytorch, SiOpencv, SiKeras, SiGit, SiDocker, SiVercel } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skillIcons: { [key: string]: JSX.Element } = {
  Python: <SiPython className="text-blue-500" />,
  'C++': <SiCplusplus className="text-blue-700" />,
  Java: <FaJava className="text-orange-600" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  SQL: <SiMysql className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  MySQL: <SiMysql className="text-blue-400" />,
  'FastAPI': <SiFastapi className="text-green-500" />,
  TensorFlow: <SiTensorflow className="text-orange-500" />,
  PyTorch: <SiPytorch className="text-red-500" />,
  OpenCV: <SiOpencv className="text-blue-500" />,
  Keras: <SiKeras className="text-red-600" />,
  Git: <SiGit className="text-orange-500" />,
  Docker: <SiDocker className="text-blue-500" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
}

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true })

  const skills = [
    { name: 'Programming Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
    { name: 'Backend Development', items: ['FastAPI', 'REST APIs', 'Async Programming', 'API Development'] },
    { name: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Keras'] },
    { name: 'Databases', items: ['MongoDB', 'MySQL', 'Tortoise ORM', 'SQLAlchemy'] },
    { name: 'Tools & Technologies', items: ['Streamlit', 'Git', 'Docker', 'Vercel'] },
    { name: 'Computer Science', items: ['Networks', 'OOPs', 'DBMS', 'Operating Systems'] },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 pt-24">
      <div className="max-w-4xl mx-auto">
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
            Skills & Technologies
          </motion.h2>
          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 flex flex-col gap-4"
              >
                <div className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{skill.name}</div>
                <div className="flex flex-wrap gap-6 items-center">
                  {skill.items.map((item) => (
                    <div key={item} className="flex flex-col items-center min-w-[80px]">
                      <div className="text-3xl mb-1">
                        {skillIcons[item] || <span className="text-gray-400">★</span>}
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-200 text-center">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 