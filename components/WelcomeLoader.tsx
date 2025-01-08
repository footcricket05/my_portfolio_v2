'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { useEffect, useState } from 'react'

export default function WelcomeLoader() {
  const { currentTheme, themeMode } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className={`fixed inset-0 z-50 ${currentTheme.background[themeMode]} flex items-center justify-center`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.2, 1] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.8, 1] }}
        className="text-center"
      >
        <motion.h1
          className={`text-4xl md:text-6xl font-bold mb-4 ${currentTheme.text[themeMode]}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.div
          className={`w-16 h-16 border-t-4 border-b-4 ${currentTheme.accent[themeMode]} rounded-full animate-spin mx-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>
    </motion.div>
  )
}

