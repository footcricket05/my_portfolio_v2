'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'

const experiences = [
  {
    title: "Software Developer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2022 - Present",
    description: "Developing cutting-edge web applications using React and Node.js. Implementing machine learning models for predictive analytics."
  },
  {
    title: "Data Science Intern",
    company: "AI Solutions Ltd.",
    duration: "May 2021 - Dec 2021",
    description: "Assisted in developing and optimizing machine learning algorithms. Conducted data analysis and visualization for various projects."
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Solutions",
    duration: "Jun 2020 - Apr 2021",
    description: "Developed and maintained responsive websites using HTML, CSS, and JavaScript. Collaborated with the design team to implement user-friendly interfaces."
  }
]

export default function Experience() {
  const { currentTheme, fontSize } = useTheme()

  return (
    <section id="experience" className={`py-20 ${currentTheme.background}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${currentTheme.text} ${fontSize}`}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${currentTheme.primary} rounded-lg p-6 shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${currentTheme.text} ${fontSize}`}>{exp.title}</h3>
              <p className={`text-sm mb-2 ${currentTheme.text} opacity-75`}>{exp.company} | {exp.duration}</p>
              <p className={`${currentTheme.text} ${fontSize}`}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

