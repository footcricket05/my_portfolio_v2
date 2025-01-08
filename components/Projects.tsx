'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "AI-Powered Chat Application",
    description: "Developed a real-time chat application with AI-powered language translation and sentiment analysis.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "Socket.io", "TensorFlow.js"]
  },
  {
    title: "E-commerce Platform",
    description: "Built a full-stack e-commerce platform with features like user authentication, product management, and payment integration.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Express", "MongoDB", "Stripe API"]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Created an interactive dashboard for visualizing complex datasets using D3.js and React.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"]
  },
  // Add more projects here...
]

export default function Projects() {
  const { currentTheme, fontSize, themeMode } = useTheme()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className={`py-20 ${currentTheme.background[themeMode]}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${currentTheme.text[themeMode]} ${fontSize}`}
        >
          Projects
        </motion.h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
            onScroll={handleScroll}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${currentTheme.primary[themeMode]} rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-80`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${currentTheme.text[themeMode]} ${fontSize}`}>{project.title}</h3>
                  <p className={`${currentTheme.text[themeMode]} ${fontSize} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${currentTheme.secondary[themeMode]} ${currentTheme.text[themeMode]} px-2 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${currentTheme.accent[themeMode]} text-white p-2 rounded-full shadow-lg`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${currentTheme.accent[themeMode]} text-white p-2 rounded-full shadow-lg`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
        <div className="mt-8 text-center">
          <Button
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
            className={`${currentTheme.accent[themeMode]} text-white`}
          >
            <Github className="w-5 h-5 mr-2" /> See More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

