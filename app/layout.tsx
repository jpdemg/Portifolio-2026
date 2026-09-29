import type { Metadata } from "next"
import "./globals.css"
import PageLoader from "@/components/PageLoader"
import { profile } from "./data"

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://joaopedro.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.shortName} | Portfólio`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.bio,
  keywords: ["João Pedro", "Portfólio", "Python", "JavaScript", "SQL", "Customer Experience", "Apple"],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: `${profile.shortName} | Portfólio`,
    description: profile.bio,
    siteName: `${profile.shortName} Portfólio`,
    images: [{ url: profile.photoUrl, width: 800, height: 800, alt: profile.name }],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
