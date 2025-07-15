import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatIsFloris from '@/components/WhatIsFloris'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import MarketOpportunity from '@/components/MarketOpportunity'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsFloris />
      <Features />
      <HowItWorks />
      <MarketOpportunity />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
} 