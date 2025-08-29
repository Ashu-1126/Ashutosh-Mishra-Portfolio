'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Trophy, Target, TrendingUp, Award } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Ashutosh161204",
    profileUrl: "https://leetcode.com/Ashutosh161204",
    color: "from-orange-500 to-red-600",
    icon: Trophy
  },
  {
    platform: "HackerRank",
    username: "ashutosh161204",
    profileUrl: "https://hackerrank.com/ashutosh161204",
    color: "from-green-500 to-emerald-600",
    icon: Target
  },
  {
    platform: "GeeksforGeeks",
    username: "ashutosh02ct",
    profileUrl: "https://auth.geeksforgeeks.org/user/ashutosh02ct",
    color: "from-blue-500 to-cyan-600",
    icon: TrendingUp
  },
  {
    platform: "Codeforces",
    username: "ashu_igo",
    profileUrl: "https://codeforces.com/profile/ashu_igo",
    color: "from-purple-500 to-pink-600",
    icon: Award
  }
]

export default function CodingProfiles() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section id="profiles" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coding Profiles
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check out my competitive programming journey across various platforms
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                  <profile.icon className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-200" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {profile.platform}
              </h3>
              <p className="text-gray-400 text-sm">
                @{profile.username}
              </p>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
