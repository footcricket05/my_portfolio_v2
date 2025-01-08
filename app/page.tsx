'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import LinkedInReviews from '@/components/LinkedInReviews'
import Contact from '@/components/Contact'
import WaveAnimation from '@/components/WaveAnimation'
import { useTheme } from '@/lib/theme-context'
import { useEffect } from 'react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export default function Home() {
  const { currentTheme, fontSize, themeMode } = useTheme()

  useEffect(() => {
    const handleScrollDown = () => {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollButton = document.getElementById('scroll-down-button')
    if (scrollButton) {
      scrollButton.addEventListener('click', handleScrollDown)
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener('click', handleScrollDown)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      <div className={`min-h-screen ${currentTheme.background[themeMode]} ${fontSize}`}>
        <Header />
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.section variants={sectionVariants}>
            <Hero />
          </motion.section>
          <motion.section variants={sectionVariants}>
            <About />
          </motion.section>
          <motion.section variants={sectionVariants}>
            <Experience />
          </motion.section>
          <motion.section variants={sectionVariants}>
            <Projects />
          </motion.section>
          <motion.section variants={sectionVariants}>
            <LinkedInReviews />
          </motion.section>
          <motion.section variants={sectionVariants}>
            <Contact />
          </motion.section>
          <WaveAnimation />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

