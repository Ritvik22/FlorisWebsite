import { Cpu, Zap, Layers } from 'lucide-react'

export default function WhatIsFloris() {
  return (
    <section id="what-is-floris" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 gradient-text">
            What is Floris?
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 leading-relaxed mb-16">
            Floris is an advanced, modular, AI-driven crop monitoring system that combines 
            computer vision, environmental sensors, and edge AI to provide instant, 
            offline plant health analysis and protection recommendations.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Cpu className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-secondary-900">Hybrid AI</h3>
              <p className="text-secondary-600 leading-relaxed">Camera + sensors working together</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-secondary-900">Edge Processing</h3>
              <p className="text-secondary-600 leading-relaxed">Instant offline analysis</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Layers className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-secondary-900">Modular Design</h3>
              <p className="text-secondary-600 leading-relaxed">Scale from home to farm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 