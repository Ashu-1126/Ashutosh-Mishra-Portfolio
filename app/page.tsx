'use client'

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
  return (
    <>
      <LoadingScreen />
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

        <Footer />{}
      </div>
    </>
  )
} 