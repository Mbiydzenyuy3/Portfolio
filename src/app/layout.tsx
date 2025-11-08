import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LEILA - Developer Portfolio',
  description: 'Showcasing my developer projects and experience.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* <-- 2. Add it here */}
        <main>{children}</main>
        {/* We will add a Footer component here later */}
      </body>
    </html>
  )
}
