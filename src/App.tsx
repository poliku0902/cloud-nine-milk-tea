import { MotionConfig } from 'motion/react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuShowcase from './components/MenuShowcase'
import SignatureShowcase from './components/SignatureShowcase'
import StorySection from './components/StorySection'
import VisitSection from './components/VisitSection'
import { useActiveSection } from './hooks/useActiveSection'

const SECTION_IDS = ['signatures', 'menu', 'story', 'visit'] as const

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper text-ink">
        <Header activeSection={activeSection} />

        <main id="main-content">
          <Hero />
          <SignatureShowcase />
          <MenuShowcase />
          <StorySection />
          <VisitSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
