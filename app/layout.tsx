import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import FlorisBot from '@/components/FlorisBot'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Floris - AI Powered Crop Protection',
  description: 'Advanced, modular, AI-driven crop monitoring system for gardeners and farmers. Plug-and-play hardware with hybrid multimodal AI for instant, offline operation.',
  keywords: 'AI crop protection, smart farming, agricultural technology, plant monitoring, precision agriculture',
  authors: [{ name: 'Floris Team' }],
  openGraph: {
    title: 'Floris - AI Powered Crop Protection',
    description: 'Advanced, modular, AI-driven crop monitoring system for gardeners and farmers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <FlorisBot />
      </body>
    </html>
  )
} 