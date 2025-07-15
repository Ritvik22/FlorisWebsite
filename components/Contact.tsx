'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, Users } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  
  // Waitlist states
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false)
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [waitlistMessage, setWaitlistMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Message sent successfully! We\'ll get back to you soon.')
        setEmail('')
        setMessage('')
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsWaitlistSubmitting(true)
    setWaitlistStatus('idle')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: waitlistEmail }),
      })

      const data = await response.json()

      if (response.ok) {
        setWaitlistStatus('success')
        setWaitlistMessage('Successfully joined the waitlist! We\'ll notify you when Floris is ready.')
        setWaitlistEmail('')
      } else {
        setWaitlistStatus('error')
        setWaitlistMessage(data.error || 'Failed to join waitlist. Please try again.')
      }
    } catch (error) {
      setWaitlistStatus('error')
      setWaitlistMessage('Failed to join waitlist. Please try again.')
    } finally {
      setIsWaitlistSubmitting(false)
    }
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
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>{submitMessage}</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>{submitMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Waitlist Signup */}
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-2xl mb-4">Join the Waitlist</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Be among the first to get early access to Floris. Join our exclusive waitlist 
                and get notified when we launch our AI-powered crop protection system.
              </p>
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <input
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  required
                />
                <button 
                  type="submit"
                  disabled={isWaitlistSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isWaitlistSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining...</span>
                    </>
                  ) : (
                    <span>Join Waitlist</span>
                  )}
                </button>
              </form>

              {/* Waitlist Status Messages */}
              {waitlistStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg mt-4">
                  <CheckCircle className="w-5 h-5" />
                  <span>{waitlistMessage}</span>
                </div>
              )}
              
              {waitlistStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg mt-4">
                  <AlertCircle className="w-5 h-5" />
                  <span>{waitlistMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 