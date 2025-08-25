import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashutosh Mishra - Portfolio',
  description: 'Final Year CSE Student Portfolio - Backend Developer, ML Enthusiast, Problem Solver',
  keywords: ['portfolio', 'developer', 'CSE', 'student', 'web development', 'software engineering', 'backend', 'machine learning'],
  authors: [{ name: 'Ashutosh Mishra' }],
  openGraph: {
    title: 'Ashutosh Mishra - Portfolio',
    description: 'Final Year CSE Student Portfolio - Backend Developer, ML Enthusiast, Problem Solver',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 