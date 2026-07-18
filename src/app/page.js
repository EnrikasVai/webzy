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
  title: "Profesionalios interneto svetainės nuo 299€ | WEBZY",
  description:
    "Kuriame greitas, modernias ir SEO optimizuotas interneto svetaines nuo 299€. E-komercija, reprezentacinės svetainės, dizainas ir web sprendimai. Nemokama konsultacija!",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
