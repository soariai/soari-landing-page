import type React from "react"
import type { Metadata } from "next"
import './globals.css'

export const metadata: Metadata = {
  title: "Soari - AI Relationship Coach",
  description: "Get honest advice, build confidence, and navigate modern dating with AI coaches who actually get it.",
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#F7F7F2'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero-phone.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}