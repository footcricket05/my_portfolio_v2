import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'service_your_service_id',  // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Shaurya',
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      setStatus('success');
      setShowToast(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        setShowToast(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setShowToast(true);
      setTimeout(() => {
        setStatus('idle');
        setShowToast(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-[var(--text-primary)] mb-16">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--accent)]/20 p-3 rounded-lg">
                  <Mail className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Email</h3>
                  <a href="mailto:shauryasrinet@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">
                    shauryasrinet@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[var(--accent)]/20 p-3 rounded-lg">
                  <Phone className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Phone</h3>
                  <a href="tel:+919999847323" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">
                    +91 9999847323
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[var(--accent)]/20 p-3 rounded-lg">
                  <MapPin className="text-[var(--accent)]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Location</h3>
                  <p className="text-[var(--text-secondary)]">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--text-secondary)]/20 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--text-secondary)]/20 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--text-secondary)]/20 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 ${
                  status === 'loading' ? 'bg-[var(--accent)]/50' : 'bg-[var(--accent)] hover:bg-[var(--accent)]/80'
                } text-white transition-colors`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : status === 'success' ? (
                  <>
                    <Check size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    <span>Error Sending Message</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg ${
              status === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white z-50`}
          >
            <div className="flex items-center space-x-2">
              {status === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
              <span>{status === 'success' ? 'Message sent successfully!' : 'Failed to send message'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};