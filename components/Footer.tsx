'use client'

import { Twitter, Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Floris Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <span className="font-display font-bold text-xl">Floris</span>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              AI powered crop protection for the modern grower. Advanced, modular, 
              AI-driven crop monitoring system for gardeners and farmers.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  const tab1 = window.open('https://www.linkedin.com/in/ritvik-shah-329811293/', '_blank');
                  setTimeout(() => {
                    window.open('https://www.linkedin.com/in/rishi-yedavalli-a3a7512a8/', '_blank');
                  }, 100);
                }}
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-secondary-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-secondary-300 hover:text-white transition-colors">How it Works</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-secondary-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">About</a></li>

            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center">

        </div>
      </div>
    </footer>
  )
} 