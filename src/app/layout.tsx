import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { isStaging, site } from "@/lib/site";
import { categories } from "@/content/categories";
import { serviceHref, servicesIn } from "@/content/services";
import { hasWork } from "@/content/work";
import { hasInsights } from "@/content/insights";
import Navbar, { type MenuGroup, type MenuService } from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import Analytics from "@/components/ui/Analytics";
import { StagingBanner } from "@/components/ui/Draft";
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
  // Staging previews stay out of search engines.
  robots: isStaging ? { index: false, follow: false } : { index: true, follow: true },
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
  "digital-marketing": "Megaphone",
  "influencer-marketing": "Users",
  "fundraising-sponsorship": "HandCoins",
  "brand-partnerships": "Handshake",
};
const menu: MenuGroup[] = categories.map((c) => ({
  key: c.key,
  name: c.name,
  href: `/services/${c.slug}`,
  services: servicesIn(c.key).map((s) => ({
    slug: s.slug,
    href: serviceHref(s),
    name: s.name,
    line: s.card.headline,
    icon: menuIcons[s.slug] ?? "Globe",
  })),
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
        <Navbar groups={menu} showWork={hasWork()} showInsights={hasInsights()} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <Analytics />
        <StagingBanner />
      </body>
    </html>
  );
}
