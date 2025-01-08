'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/theme-context'
import ThemeSwitcher from './ThemeSwitcher'

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'LinkedIn Reviews', href: 'reviews' },
  { name: 'Contact', href: 'contact' },
]

export default function Header() {
  const { currentTheme, fontSize, themeMode } = useTheme()
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-40 ${currentTheme.background[themeMode]} backdrop-blur-sm bg-opacity-80`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className={`text-2xl font-bold ${currentTheme.text[themeMode]} ${fontSize}`}
            onClick={(e) => {
              e.preventDefault()
              handleClick('home')
            }}
          >
            Shaurya.
          </motion.a>
          <div className="hidden md:flex items-center space-x-12 mr-20">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.href}`}
                className={`${currentTheme.text[themeMode]} ${fontSize} hover:opacity-70 transition-opacity ${
                  activeSection === item.href ? `border-b-2 ${currentTheme.accent[themeMode]}` : ''
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <ThemeSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`ml-4 ${currentTheme.text[themeMode]}`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.href}`}
                className={`block py-2 ${currentTheme.text[themeMode]} ${fontSize} hover:opacity-70 transition-opacity`}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

