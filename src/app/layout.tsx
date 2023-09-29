import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

import type { Metadata } from 'next'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Yugabyte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>{children}</body>
    </html>
  )
}
