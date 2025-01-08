'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'
import { Github, Instagram, Linkedin, Twitter, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Hero() {
  const { currentTheme, fontSize, themeMode } = useTheme()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          <div className={`absolute inset-0 ${currentTheme.accent[themeMode]} opacity-20 blur-2xl rounded-full`} />
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Shaurya Srinet"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-white shadow-lg relative z-10"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-4xl font-bold mb-2 ${currentTheme.text[themeMode]} ${fontSize}`}
        >
          Shaurya Srinet
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-xl ${currentTheme.text[themeMode]} mb-6`}
        >
          I&apos;m a Software Developer
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${currentTheme.accent[themeMode]} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-x-4"
        >
          <Button
            variant="outline"
            className={`${currentTheme.primary[themeMode]} hover:${currentTheme.secondary[themeMode]} transition-colors duration-300`}
            onClick={() => window.open('https://www.hackerrank.com/yourusername', '_blank')}
          >
            HackerRank
          </Button>
          <Button
            variant="outline"
            className={`${currentTheme.primary[themeMode]} hover:${currentTheme.secondary[themeMode]} transition-colors duration-300`}
            onClick={() => window.open('#certificates', '_blank')}
          >
            Certificates
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center w-full max-w-xs mx-auto"
        >
          <p className={`text-sm ${currentTheme.text[themeMode]} mb-2 text-center`}>Scroll Down</p>
          <motion.button
            id="scroll-down-button"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={`w-10 h-10 ${currentTheme.accent[themeMode]} rounded-full flex items-center justify-center`}
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

