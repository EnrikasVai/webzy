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

export const metadata = {
  title: "Profesionalios interneto svetainės ir web sprendimai",
  description:
    "Kuriame greitas, modernias ir SEO optimizuotas interneto svetaines nuo 299€. E-komercija, reprezentacinės svetainės, dizainas ir web sprendimai. Nemokama konsultacija!",
  alternates: {
    canonical: "/",
    languages: { lt: "/", en: "/en" },
  },
  openGraph: {
    title: "Profesionalios interneto svetainės ir web sprendimai | WEBZY",
    description:
      "Kuriame greitas, modernias ir SEO optimizuotas interneto svetaines nuo 299€. Nemokama konsultacija!",
    url: "https://webzy.lt",
    siteName: "WEBZY",
    locale: "lt_LT",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "WEBZY - Profesionalios interneto svetainės" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profesionalios interneto svetainės ir web sprendimai | WEBZY",
    description:
      "Kuriame greitas, modernias ir SEO optimizuotas interneto svetaines nuo 299€. Nemokama konsultacija!",
    images: ["/og-image.webp"],
  },
};

export default function Home() {
  return (
    <main>
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
