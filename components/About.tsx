'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'

export default function About() {
  const { currentTheme, fontSize } = useTheme()

  return (
    <section id="about" className={`py-20 ${currentTheme.background}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${currentTheme.text} ${fontSize}`}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${currentTheme.text} ${fontSize}`}
        >
          <p className="mb-4">
            I am a passionate software developer with a strong foundation in computer science and a keen interest in emerging technologies. My journey in the world of programming began during my undergraduate studies, and since then, I've been constantly expanding my skills and knowledge.
          </p>
          <p className="mb-4">
            With expertise in various programming languages and frameworks, I specialize in developing robust and scalable applications. I'm particularly enthusiastic about artificial intelligence, machine learning, and their applications in solving real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community events.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

