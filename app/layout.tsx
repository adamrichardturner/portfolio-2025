import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-league",
})

export const metadata: Metadata = {
  title: "Adam Richard Turner | Software Engineer",
  description:
    "Adam Richard Turner is a Software Engineer based in London skilled at crafting Front End UI for web applications",
  openGraph: {
    title: "Adam Richard Turner | Software Engineer",
    description:
      "Software Engineer based in London skilled at crafting Front End UI for web applications",
    images: "https://adamrichardturner.dev/adamturner-social.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${roboto.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
