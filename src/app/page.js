import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("home", "lt");

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WEBZY",
    url: "https://webzy.lt",
    logo: "https://webzy.lt/icon.webp",
    description:
      "Profesionalus internetinių svetainių kūrimas nuo 299€. E-komercija, web dizainas, SEO optimizacija.",
    areaServed: {
      "@type": "Country",
      name: "Lietuva",
    },
    priceRange: "nuo 299€",
    knowsAbout: [
      "Web Development",
      "Web Design",
      "E-Commerce",
      "SEO",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="lt" />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
