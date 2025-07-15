'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-xl border-b border-white/20 dark:border-secondary-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/logo.png" alt="Floris Logo" width={32} height={32} className="rounded-xl shadow-lg" />
            </div>
            <span className="font-display font-bold text-xl gradient-text">Floris</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-secondary-600 dark:text-secondary-200 hover:text-primary-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-secondary-600 dark:text-secondary-200 hover:text-primary-600 transition-colors font-medium">How it Works</a>
            <a href="#contact" className="btn-primary">Get Early Access</a>
            <button
              className="ml-4 p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              onClick={() => setDark(d => !d)}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-secondary-700" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200 dark:border-secondary-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-secondary-600 dark:text-secondary-200 hover:text-primary-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-secondary-600 dark:text-secondary-200 hover:text-primary-600 transition-colors font-medium">How it Works</a>
              <a href="#contact" className="btn-primary text-center">Get Early Access</a>
              <button
                className="mt-4 p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors w-fit mx-auto"
                onClick={() => setDark(d => !d)}
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-secondary-700" />}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 