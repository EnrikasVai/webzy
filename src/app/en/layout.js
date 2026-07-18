import LocaleProvider from "@/components/LocaleProvider";
import CookieBanner from "@/components/CookieBanner";
import enMessages from "../../../messages/en.json";

export const metadata = {
  title: {
    default: "WEBZY - Professional Websites & Web Solutions",
    template: "%s | WEBZY",
  },
  description:
    "Professional website development from €299. E-commerce, business websites, SEO, design. Free consultation.",
  icons: { icon: "/favicon.ico", apple: "/icon.webp" },
  metadataBase: new URL("https://webzy.lt"),
  alternates: {
    canonical: "/en",
    languages: {
      lt: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "WEBZY - Professional Websites & Web Solutions",
    description:
      "Professional website development from €299. E-commerce, design, SEO. Free consultation.",
    type: "website",
    locale: "en_US",
    siteName: "WEBZY",
    url: "https://webzy.lt/en",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "WEBZY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBZY - Professional Websites & Web Solutions",
    description:
      "Professional website development from €299. E-commerce, design, SEO. Free consultation.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function EnLayout({ children }) {
  return (
    <LocaleProvider locale="en" messages={enMessages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WEBZY",
            url: "https://webzy.lt/en",
            logo: "https://webzy.lt/logo.svg",
            description:
              "Professional website development from €299.",
            email: "info@webzy.lt",
            areaServed: "GB",
            priceRange: "€€",
            foundingDate: "2024",
            founder: [
              { "@type": "Person", name: "Enrikas" },
              { "@type": "Person", name: "Gytis" },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vilnius",
              addressCountry: "LT",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "info@webzy.lt",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61578824250484",
            ],
          }),
        }}
      />
      {children}
      <CookieBanner />
    </LocaleProvider>
  );
}
