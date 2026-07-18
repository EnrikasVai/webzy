import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact",
  description:
    "Contact WEBZY for a free consultation. Website development, e-commerce, SEO services.",
  openGraph: {
    title: "Contact | WEBZY",
    description:
      "Contact WEBZY for a free consultation. Website development, e-commerce, SEO services.",
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
