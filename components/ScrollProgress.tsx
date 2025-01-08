'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const { currentTheme } = useTheme()

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-50 ${currentTheme.accent}`}
      style={{ scaleX, transformOrigin: '0%' }}
    />
  )
}

