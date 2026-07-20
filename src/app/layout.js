import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import LocaleProvider from "@/components/LocaleProvider";
import GoogleTagManager from "@/components/GoogleTagManager";
import ltMessages from "../../messages/lt.json";
import { getLayoutMeta } from "@/data/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = getLayoutMeta("lt");

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=location.pathname.startsWith("/en")?"en":"lt"`,
          }}
        />
        <ThemeProvider>
          <LocaleProvider locale="lt" messages={ltMessages}>
            <GoogleTagManager />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "WEBZY",
                  url: "https://webzy.lt",
                  logo: "https://webzy.lt/icon.webp",
                  description:
                    "Profesionalios interneto svetainių kūrimas nuo 299€.",
                  email: "info@webzy.lt",
                  areaServed: "LT",
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
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
