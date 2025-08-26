'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Trophy, Target, TrendingUp, Award } from 'lucide-react'

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Ashutosh161204",
    profileUrl: "https://leetcode.com/Ashutosh161204",
    stats: {
      problemsSolved: 200,
      contestRating: 1400,
      ranking: "Top 80%",
      streak: 10
    },
    color: "from-orange-500 to-red-600",
    icon: Trophy,
    description: "Problem solving and algorithm challenges"
  },
  {
    platform: "HackerRank",
    username: "ashutosh161204",
    profileUrl: "https://hackerrank.com/ashutosh161204",
    stats: {
      problemsSolved: 200,
      contestRating: 1600,
      ranking: "Top 15%",
      streak: 30
    },
    color: "from-green-500 to-emerald-600",
    icon: Target,
    description: "Programming contests and skill assessments"
  },
  {
    platform: "GeeksforGeeks",
    username: "ashutosh02ct",
    profileUrl: "https://auth.geeksforgeeks.org/user/ashutosh02ct",
    stats: {
      problemsSolved: 30,
      contestRating: 1700,
      ranking: "Top 12%",
      streak: 35
    },
    color: "from-blue-500 to-cyan-600",
    icon: TrendingUp,
    description: "Data structures and algorithms practice"
  },
  {
    platform: "Codeforces",
    username: "ashu_igo",
    profileUrl: "https://codeforces.com/profile/ashu_igo",
    stats: {
      problemsSolved: 120,
      contestRating: 1400,
      ranking: "Top 20%",
      streak: 25
    },
    color: "from-purple-500 to-pink-600",
    icon: Award,
    description: "Competitive programming contests"
  }
]

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
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
            My competitive programming journey across various platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                    <profile.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {profile.platform}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  @{profile.username}
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Problems Solved</span>
                    <span className="text-white font-semibold">{profile.stats.problemsSolved}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Rating</span>
                    <span className="text-white font-semibold">{profile.stats.contestRating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Ranking</span>
                    <span className="text-green-400 font-semibold">{profile.stats.ranking}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Streak</span>
                    <span className="text-orange-400 font-semibold">{profile.stats.streak} days</span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs mt-4 text-center">
                  {profile.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-300 mb-4">
            Check out my complete profiles for detailed statistics and achievements
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Profiles
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
