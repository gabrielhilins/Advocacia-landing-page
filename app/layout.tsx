import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cinzel, Quicksand} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import LenisProvider from "@/components/LenisProvider" // Changed to default import

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
})

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Ferreira & Drummond | Advocacia Especializada em Direito Previdenciário",
  description:
    "Escritório boutique especializado em aposentadorias de alto valor. Planejamento previdenciário estratégico, reconhecimento de tempo especial e atuação contenciosa para servidores, executivos e profissionais especializados.",
  keywords: [
    "advogado previdenciário",
    "aposentadoria",
    "INSS",
    "tempo especial",
    "planejamento previdenciário",
    "revisão de aposentadoria",
  ],
  authors: [{ name: "Ferreira & Drummond Advocacia" }],
  openGraph: {
    title: "Ferreira & Drummond | Advocacia Especializada em Direito Previdenciário",
    description: "Transformamos décadas de trabalho em uma aposentadoria segura, planejada e juridicamente justa.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0A1F44",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        <LenisProvider> {/* Wrap children with LenisProvider */}
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
