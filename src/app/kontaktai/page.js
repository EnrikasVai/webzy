import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("contact", "lt");

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
