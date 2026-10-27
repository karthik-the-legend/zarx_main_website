import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import USP from "@/components/USP";
import Process from "@/components/Process";
import Leadership from "@/components/Leadership";
import Investor from "@/components/Investor";
import CTABanner from "@/components/CTABanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { leaders } from "@/content/leaders";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

// Structured data limited to facts stated on the site.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/zarx-wordmark-dark.png`,
      email: site.email,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressCountry: site.location.countryCode,
      },
      founder: { "@type": "Person", name: site.founder },
      employee: leaders.map((leader) => ({
        "@type": "Person",
        name: leader.name,
        jobTitle: leader.role,
        sameAs: [leader.linkedin.split("?")[0]],
      })),
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, url: absoluteUrl(`/solutions/${service.slug}`) },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <USP />
      <Process />
      <Leadership />
      <Investor />
      <CTABanner primary={{ label: "Start a project", href: "/contact" }} />
      <JsonLd data={jsonLd} />
    </>
  );
}
