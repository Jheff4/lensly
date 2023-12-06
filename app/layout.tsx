import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lensly',
  description: 'lensly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-mirage-100 font-montserrat'>{children}</body>
    </html>
  )
}
