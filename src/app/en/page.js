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
  title: "Professional Websites & Web Solutions",
  description:
    "We build fast, modern and SEO-optimized websites from €299. E-commerce, business websites, design and web solutions. Free consultation!",
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
