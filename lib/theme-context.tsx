'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Theme, themes, FontSize, fontSizes, ThemeMode } from './themes'

type ThemeContextType = {
  currentTheme: Theme
  setTheme: (theme: Theme) => void
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    const savedFontSize = localStorage.getItem('portfolio-font-size') as FontSize | null
    const savedThemeMode = localStorage.getItem('portfolio-theme-mode') as ThemeMode | null
    if (savedTheme) {
      setCurrentTheme(JSON.parse(savedTheme))
    }
    if (savedFontSize) {
      setFontSize(savedFontSize)
    }
    if (savedThemeMode) {
      setThemeMode(savedThemeMode)
    }
  }, [])

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme)
    localStorage.setItem('portfolio-theme', JSON.stringify(theme))
  }

  const changeFontSize = (size: FontSize) => {
    setFontSize(size)
    localStorage.setItem('portfolio-font-size', size)
  }

  const changeThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode)
    localStorage.setItem('portfolio-theme-mode', mode)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, fontSize, setFontSize: changeFontSize, themeMode, setThemeMode: changeThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

