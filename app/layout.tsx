import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ShinePro - Ontario's Premier Window Cleaning Service",
  description:
    "Professional residential and commercial window cleaning in Ontario. 25+ years experience, 100% safety record, fully certified and insured. Get your free quote today!",
  keywords:
    "window cleaning Ontario, residential window cleaning, commercial window cleaning, high-rise window cleaning, Toronto window cleaning, certified window cleaners",
  openGraph: {
    title: "ShinePro - Ontario's Premier Window Cleaning Service",
    description:
      "Professional residential and commercial window cleaning in Ontario. 25+ years experience, 100% safety record, fully certified and insured.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
