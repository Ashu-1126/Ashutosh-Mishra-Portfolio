'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AboutMe() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'United Institute of Technology, Prayagraj',
      year: '2022 - 2026'
    },
    {
      degree: 'Intermediate',
      institution: 'Bal Bharti School, Prayagraj',
      year: '2022',
    },
    {
      degree: 'High School',
      institution: 'Bal Bharti School, Prayagraj',
      year: '2019',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const timelineHeight = timelineRef.current?.clientHeight;
      if (timelineHeight) {
        gsap.fromTo(timelineRef.current,
          { height: 0 },
          { height: timelineHeight, duration: 1.5, ease: 'power2.out' }
        );
      }
    }
  }, [inView]);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Hello! I'm Ashutosh Mishra, a final year Computer Science Engineering student passionate about creating innovative and efficient software solutions. My journey in tech began with a curiosity for how things work, and it quickly grew into a passion for building robust applications and tackling complex challenges in AI and machine learning. I believe in writing clean, scalable code and am constantly exploring new technologies to improve my craft.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Outside of coding, I enjoy problem-solving, exploring new trends in technology, and contributing to open-source projects. I'm always looking for opportunities to learn and grow as a developer and am excited to bring my skills to new challenges.
          </p>
        </motion.div>
        
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div ref={ref} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl w-full max-w-md shadow-lg border border-gray-200 dark:border-gray-700 relative pt-10">
            {/* The vertical timeline line */}
            <div
              ref={timelineRef}
              className="absolute left-[55px] md:left-[55px] top-20 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"
            />
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 relative z-10">Education</h3>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 mb-8 relative z-20"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* The icon and dot on the timeline */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-md">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{item.degree}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.institution}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
