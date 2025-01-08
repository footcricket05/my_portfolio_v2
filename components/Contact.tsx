'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '@/lib/theme-context'
import { Send } from 'lucide-react'

export default function Contact() {
  const { currentTheme, fontSize, themeMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className={`py-20 ${currentTheme.background[themeMode]}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${currentTheme.text[themeMode]} ${fontSize}`}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className={`block ${currentTheme.text[themeMode]} font-bold mb-2 ${fontSize}`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 ${currentTheme.text[themeMode]} ${currentTheme.primary[themeMode]} rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentTheme.accent[themeMode]}`}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block ${currentTheme.text[themeMode]} font-bold mb-2 ${fontSize}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 ${currentTheme.text[themeMode]} ${currentTheme.primary[themeMode]} rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentTheme.accent[themeMode]}`}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={`block ${currentTheme.text[themeMode]} font-bold mb-2 ${fontSize}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-3 py-2 ${currentTheme.text[themeMode]} ${currentTheme.primary[themeMode]} rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentTheme.accent[themeMode]}`}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className={`w-full ${currentTheme.accent[themeMode]} text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity ${fontSize} flex items-center justify-center`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </motion.button>
          {submitStatus === 'success' && (
            <p className={`mt-4 text-green-500 ${fontSize}`}>Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className={`mt-4 text-red-500 ${fontSize}`}>An error occurred. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

