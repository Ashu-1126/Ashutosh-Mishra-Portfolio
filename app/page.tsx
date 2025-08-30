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
    // This effect runs only on the client side
    setMounted(true)
  }, [])

  // Show the loading screen if the component is mounted and isLoading is true
  if (mounted && isLoading) {
    return <LoadingScreen onLoaded={() => setIsLoading(false)} />
  }

  // Once loading is complete, render the main content
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
          <AdvancedContact />
        </main>

        <Footer />
      </div>
    )
  }

  // Render nothing on the server
  return null
}
