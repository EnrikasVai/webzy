import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontaktai",
  description:
    "Susisiekite su WEBZY ir gaukite nemokamą konsultaciją. Interneto svetainių kūrimas, e-komercija, SEO paslaugos. Rašykite: info@webzy.lt",
  openGraph: {
    title: "Kontaktai | WEBZY",
    description: "Susisiekite su WEBZY. Nemokama konsultacija interneto svetainių kūrimo klausimais.",
  },
};

export default function KontaktaiPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
