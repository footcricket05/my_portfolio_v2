'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from '@/lib/theme-context'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const { currentTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 ${currentTheme.background} flex items-center justify-center`}
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          className={`w-12 h-12 ${currentTheme.accent}`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <span className={`text-lg font-medium ${currentTheme.text}`}>Loading...</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

