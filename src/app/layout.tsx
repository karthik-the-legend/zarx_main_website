import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "ZARX Technologies",
    "AI development",
    "product engineering",
    "web development",
    "mobile app development",
    "Web3",
    "game development",
    "UI/UX design",
    "startup MVP",
    "New Delhi",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description:
      "AI-powered development, game-grade visuals, and production-ready engineering for founders and future-focused businesses.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description:
      "AI-powered development, game-grade visuals, and production-ready engineering for founders and future-focused businesses.",
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior lets Next.js turn off CSS smooth scrolling while it
    // resets scroll on route changes, so new pages open at the top.
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
