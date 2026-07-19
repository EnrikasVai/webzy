import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "Kontaktai",
  description:
    "Susisiekite su WEBZY ir gaukite nemokamą konsultaciją. Interneto svetainių kūrimas, e-komercija, SEO paslaugos. Rašykite: info@webzy.lt",
  alternates: {
    canonical: "/kontaktai",
    languages: { lt: "/kontaktai", en: "/en/contact" },
  },
  openGraph: {
    title: "Kontaktai | WEBZY",
    description: "Susisiekite su WEBZY. Nemokama konsultacija interneto svetainių kūrimo klausimais.",
    url: "https://webzy.lt/kontaktai",
    siteName: "WEBZY",
    locale: "lt_LT",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "WEBZY - Kontaktai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontaktai | WEBZY",
    description: "Susisiekite su WEBZY. Nemokama konsultacija interneto svetainių kūrimo klausimais.",
    images: ["/og-image.webp"],
  },
};

export default function KontaktaiPage() {
  return (
    <main>
      <Navbar locale="lt" />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
