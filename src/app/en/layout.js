import LocaleProvider from "@/components/LocaleProvider";
import CookieBanner from "@/components/CookieBanner";
import GoogleTagManager from "@/components/GoogleTagManager";
import enMessages from "../../../messages/en.json";
import { getLayoutMeta } from "@/data/seo";

export const metadata = getLayoutMeta("en");

export default function EnLayout({ children }) {
  return (
    <LocaleProvider locale="en" messages={enMessages}>
      <GoogleTagManager />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "WEBZY",
            url: "https://webzy.lt/en",
            logo: "https://webzy.lt/icon.webp",
            description:
              "Professional website development from €299. E-commerce, web design, SEO optimization.",
            areaServed: {
              "@type": "Country",
              name: "Lithuania",
            },
            priceRange: "from €299",
            knowsAbout: [
              "Web Development",
              "Web Design",
              "E-Commerce",
              "SEO",
            ],
          }),
        }}
      />
      {children}
      <CookieBanner />
    </LocaleProvider>
  );
}
