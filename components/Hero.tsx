'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/20 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-200/20 rounded-full animate-float-fast blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary-300/15 rounded-full animate-float-slow blur-xl" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent-300/15 rounded-full animate-float-fast blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium text-secondary-700"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span>AI-Powered Crop Protection</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="gradient-text">Floris</span>
                <br />
                <span className="text-secondary-800">Crop Protection</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-secondary-600 leading-relaxed max-w-2xl">
                Advanced, modular, AI-driven crop monitoring system for gardeners and farmers. 
                Plug-and-play hardware with hybrid multimodal AI for instant, offline operation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact" 
                className="btn-primary flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.button 
                className="btn-outline flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>See How It Works</span>
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-8 pt-8 border-t border-secondary-200"
            >
              <div>
                <div className="text-2xl font-bold text-secondary-900">90+%</div>
                <div className="text-sm text-secondary-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-900">24/7</div>
                <div className="text-sm text-secondary-600">Monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-900">Offline</div>
                <div className="text-sm text-secondary-600">Edge AI</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              <div className="aspect-square bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* 3D Crop Monitoring Visualization */}
                <div className="relative w-full h-full">
                  {/* 3D Grid Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" 
                         style={{
                           backgroundImage: `
                             linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                           `,
                           backgroundSize: '30px 30px'
                         }}>
                    </div>
                  </div>
                  
                  {/* Central 3D Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Main 3D Cube */}
                      <motion.div 
                        className="w-40 h-40 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl"
                        animate={{ 
                          rotateY: [0, 360],
                          rotateX: [0, 15, 0]
                        }}
                        transition={{ 
                          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                          rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-transparent rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-700/20 to-transparent rounded-2xl"></div>
                      </motion.div>
                      
                      {/* Floating Data Points */}
                      <motion.div 
                        className="absolute -top-6 -right-6 w-8 h-8 bg-accent-400 rounded-full shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                      <motion.div 
                        className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-400 rounded-full shadow-lg"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      ></motion.div>
                      <motion.div 
                        className="absolute top-1/2 -right-12 w-4 h-4 bg-accent-500 rounded-full shadow-lg"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  {/* Scanning Lines */}
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-secondary-700 font-semibold text-lg">AI Crop Monitoring System</p>
                <p className="text-sm text-secondary-500 mt-1">Real-time plant health analysis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 