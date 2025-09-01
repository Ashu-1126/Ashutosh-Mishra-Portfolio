'use client'

import { useState, useEffect } from 'react'

import LoadingScreen from '../components/LoadingScreen'
import ParticleBackground from '../components/ParticleBackground'
import FloatingNav from '../components/FloatingNav'
import AdvancedHero from '../components/AdvancedHero'
import AdvancedSkills from '../components/AdvancedSkills'
import CodingProfiles from '../components/CodingProfiles'
import AdvancedProjects from '../components/AdvancedProjects'
import AdvancedContact from '../components/AdvancedContact'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted && isLoading) {
    return <LoadingScreen onLoaded={() => setIsLoading(false)} />
  }

  if (mounted && !isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ParticleBackground />
        <FloatingNav />
        
        <main>
          <AdvancedHero />
          <AboutMe />
          <AdvancedSkills />
          <CodingProfiles />
          <AdvancedProjects />
        </main>
        
        {/* New container for the contact and footer sections */}
        <div className="bg-gray-900 dark:bg-black">
          <AdvancedContact />
          <Footer />
        </div>
      </div>
    )
  }

  return null
}