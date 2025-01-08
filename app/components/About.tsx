'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6">
            I am a Computer Science Engineering student specializing in IoT at SRM Institute of Science and Technology. With a strong foundation in AI/ML, backend development, and IoT technologies, I am passionate about leveraging cutting-edge technologies to solve real-world problems.
          </p>
          <p className="text-lg mb-6">
            My experience includes internships at prestigious organizations like the Centre for Artificial Intelligence & Robotics, DRDO, and ONEMi.in, where I worked on projects involving data analysis, machine learning, and IoT security.
          </p>
          <p className="text-lg">
            I am constantly seeking new challenges and opportunities to expand my skills and contribute to innovative projects in the fields of AI, ML, and IoT.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

