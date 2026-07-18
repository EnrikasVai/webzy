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
  icons: { icon: "/favicon.ico" },
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
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBZY - Professional Websites & Web Solutions",
    description:
      "Professional website development from €299. E-commerce, design, SEO. Free consultation.",
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
      {children}
      <CookieBanner />
    </LocaleProvider>
  );
}
