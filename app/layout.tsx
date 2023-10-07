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
      <body className='min-h-screen bg-cardinalPink-100 font-chillax'>{children}</body>
    </html>
  )
}
