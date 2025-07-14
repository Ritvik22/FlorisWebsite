'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { email, message })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Get Early Access
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Be among the first to experience the future of crop protection. 
            Join our early access program and get exclusive updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8">
            <h3 className="font-semibold text-2xl mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your growing needs..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-2xl mb-4">Stay Updated</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Get the latest updates on Floris development, early access opportunities, 
                and exclusive insights into the future of smart agriculture.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
                <button className="btn-primary w-full">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 