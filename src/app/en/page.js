import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Website Development from €299 | WEBZY",
  description:
    "We build fast, modern and SEO-optimized websites from €299. E-commerce, business websites, design and web solutions. Free consultation!",
  alternates: {
    canonical: "/en",
    languages: { lt: "/", en: "/en" },
  },
  openGraph: {
    title: "Website Development from €299 | WEBZY",
    description:
      "We build fast, modern and SEO-optimized websites from €299. Free consultation!",
    url: "https://webzy.lt/en",
    siteName: "WEBZY",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "WEBZY - Website Development from €299" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development from €299 | WEBZY",
    description:
      "We build fast, modern and SEO-optimized websites from €299. Free consultation!",
    images: ["/og-image.webp"],
  },
};

export default function EnHome() {
  return (
    <main>
      <Navbar locale="en" />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer locale="en" />
    </main>
  );
}
