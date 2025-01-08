'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'

const reviews = [
  {
    name: "John Doe",
    position: "Senior Developer at Tech Corp",
    review: "Shaurya is an exceptional developer with a keen eye for detail. His problem-solving skills and ability to quickly adapt to new technologies make him a valuable asset to any team."
  },
  {
    name: "Jane Smith",
    position: "Project Manager at Innovate Inc.",
    review: "Working with Shaurya was a pleasure. His communication skills and proactive approach to project management ensured that we delivered our project on time and exceeded client expectations."
  },
  {
    name: "Alex Johnson",
    position: "CTO at StartUp Labs",
    review: "Shaurya's expertise in AI and machine learning is impressive. He brought innovative solutions to our projects and significantly improved our data processing capabilities."
  },
  // Add more reviews here...
]

export default function LinkedInReviews() {
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
    <section id="reviews" className={`py-20 ${currentTheme.background[themeMode]}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${currentTheme.text[themeMode]} ${fontSize} flex items-center`}
        >
          <Linkedin className="mr-2" /> LinkedIn Reviews
        </motion.h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
            onScroll={handleScroll}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${currentTheme.primary[themeMode]} rounded-lg p-6 shadow-lg flex-shrink-0 w-80`}
              >
                <p className={`${currentTheme.text[themeMode]} ${fontSize} mb-4 italic`}>"{review.review}"</p>
                <div>
                  <p className={`${currentTheme.text[themeMode]} font-semibold ${fontSize}`}>{review.name}</p>
                  <p className={`${currentTheme.text[themeMode]} text-sm`}>{review.position}</p>
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
      </div>
    </section>
  )
}

