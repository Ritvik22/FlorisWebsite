'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does Floris work?",
    answer: "Floris uses a combination of computer vision cameras and environmental sensors to monitor your plants. The AI analyzes this data locally to detect issues and provide treatment recommendations."
  },
  {
    question: "Does Floris work offline?",
    answer: "Yes! Floris uses edge AI processing, meaning all analysis happens locally on the device. You'll get instant alerts and recommendations even without an internet connection."
  },
  {
    question: "What plants can Floris monitor?",
    answer: "Floris can monitor any type of plant. The AI automatically recognizes plant species and growth stages to provide personalized care recommendations."
  },
  {
    question: "How easy is it to set up?",
    answer: "Very easy! Our plug-and-play design means you can set up Floris in minutes. Just plug in the sensors and cameras, and the system automatically calibrates."
  },
  {
    question: "Can I scale from home to farm?",
    answer: "Absolutely! Floris is designed to be modular. Start with a single sensor for your home plants and add more units as your operation grows."
  },
  {
    question: "What about data privacy?",
    answer: "Your data belongs to you. All plant data is encrypted and stored locally. You control what data is shared with the community network."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about Floris and how it can help your growing operation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full glass-effect rounded-xl p-6 text-left flex items-center justify-between hover:shadow-lg transition-all duration-200 border border-white/50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-secondary-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-secondary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-secondary-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 glass-effect rounded-xl p-6 animate-fade-in border border-white/50">
                  <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 