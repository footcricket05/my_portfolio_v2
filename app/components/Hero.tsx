'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shaurya Singh Srinet
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            AI, ML & IoT Specialist
          </h2>
          <p className="text-lg mb-8">
            Transforming ideas into innovative solutions
          </p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Shaurya Singh Srinet"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

