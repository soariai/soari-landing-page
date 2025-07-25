import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Soari - AI Relationship Coach",
  description: "Get honest advice, build confidence, and navigate modern dating with AI coaches who actually get it.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'