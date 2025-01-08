'use client'

import { useTheme } from '@/lib/theme-context'
import { motion } from 'framer-motion'

export default function WaveAnimation() {
  const { currentTheme, themeMode } = useTheme()
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <motion.path
          initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
          animate={{ d: "M0,320L1440,160L1440,320L0,320Z" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "easeInOut",
          }}
          fill={currentTheme.accent[themeMode].replace('bg-', '')}
          fillOpacity="0.3"
        />
        <motion.path
          initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
          animate={{ d: "M0,320L1440,240L1440,320L0,320Z" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            ease: "easeInOut",
          }}
          fill={currentTheme.secondary[themeMode].replace('bg-', '')}
          fillOpacity="0.4"
        />
        <motion.path
          initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
          animate={{ d: "M0,320L1440,280L1440,320L0,320Z" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut",
          }}
          fill={currentTheme.primary[themeMode].replace('bg-', '')}
          fillOpacity="0.5"
        />
      </svg>
    </div>
  )
}

