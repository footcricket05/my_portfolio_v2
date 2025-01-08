import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import WelcomeLoader from '@/components/WelcomeLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shaurya Srinet - Software Developer',
  description: 'Personal portfolio of Shaurya Srinet, showcasing projects and skills in software development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <WelcomeLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

