import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("contact", "en");

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
