'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { themes, ThemeMode } from '@/lib/themes'
import { Palette, Sun, Moon, Sunset, Type } from 'lucide-react'
import { useState } from 'react'

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, fontSize, setFontSize, themeMode, setThemeMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themeModeIcons: Record<ThemeMode, React.ReactNode> = {
    light: <Sun className="w-4 h-4" />,
    dim: <Sunset className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-6 z-50 md:absolute md:top-0 md:right-0 md:mr-6"
    >
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-full ${currentTheme.accent[themeMode]} text-white shadow-lg`}
          aria-label="Theme switcher"
        >
          <Palette className="w-5 h-5" />
        </button>
        {isOpen && (
          <div className={`absolute right-0 mt-2 w-72 ${currentTheme.background[themeMode]} rounded-lg shadow-xl p-4`}>
            <h3 className={`text-lg font-semibold mb-2 ${currentTheme.text[themeMode]}`}>Themes</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {themes.map((theme) => (
                <div key={theme.name} className="space-y-2">
                  <span className={`text-xs font-medium ${currentTheme.text[themeMode]}`}>{theme.name}</span>
                  {(['light', 'dim', 'dark'] as ThemeMode[]).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setTheme(theme)
                        setThemeMode(mode)
                      }}
                      className={`w-full p-2 rounded-lg ${theme.background[mode]} hover:opacity-80 transition-opacity flex items-center justify-between`}
                    >
                      <span className={`text-xs font-medium ${theme.text[mode]}`}>{mode}</span>
                      {themeModeIcons[mode]}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${currentTheme.text[themeMode]}`}>Font Size</h3>
            <div className="flex space-x-2">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`p-2 rounded-lg ${currentTheme.primary[themeMode]} hover:opacity-80 transition-opacity ${
                    fontSize === size ? `ring-2 ring-offset-2 ${currentTheme.accent[themeMode]}` : ''
                  }`}
                >
                  <Type className={`w-5 h-5 ${currentTheme.text[themeMode]}`} />
                  <span className={`ml-1 ${currentTheme.text[themeMode]}`}>{size}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

