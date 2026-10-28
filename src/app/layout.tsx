import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { hasWork } from "@/content/work";
import { hasInsights } from "@/content/insights";
import Navbar, { type MenuService } from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import Analytics from "@/components/ui/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

// Only serialisable data crosses into the client header, so icons go by name.
const menuIcons: Record<string, MenuService["icon"]> = {
  "web-platforms": "Globe",
  "mobile-gaming": "Gamepad2",
  web3: "Blocks",
  "ai-automation": "BrainCircuit",
  "ui-ux-design": "Palette",
  animation: "Clapperboard",
};
const menu: MenuService[] = services.map((s) => ({
  slug: s.slug,
  name: s.name,
  line: s.card.headline,
  icon: menuIcons[s.slug] ?? "Globe",
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior lets Next.js turn off CSS smooth scrolling while it
    // resets scroll on route changes, so new pages open at the top.
    <html lang="en-IN" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
        >
          Skip to content
        </a>
        <Navbar services={menu} showWork={hasWork()} showInsights={hasInsights()} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
