import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact",
  description:
    "Contact WEBZY for a free consultation. Website development, e-commerce, SEO services.",
  alternates: {
    canonical: "/en/contact",
    languages: { lt: "/kontaktai", en: "/en/contact" },
  },
  openGraph: {
    title: "Contact | WEBZY",
    description:
      "Contact WEBZY for a free consultation. Website development, e-commerce, SEO services.",
    url: "https://webzy.lt/en/contact",
    siteName: "WEBZY",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "WEBZY - Contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | WEBZY",
    description: "Contact WEBZY for a free consultation.",
    images: ["/og-image.webp"],
  },
};

export default function EnKontaktai() {
  return (
    <main>
      <Navbar locale="en" />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer locale="en" />
    </main>
  );
}
