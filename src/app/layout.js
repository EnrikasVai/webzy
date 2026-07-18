import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "WEBZY - Profesionalios interneto svetainės ir web sprendimai",
    template: "%s | WEBZY",
  },
  description:
    "Profesionalios interneto svetainių kūrimas nuo 299€. Kuriama e-komercijos, reprezentacines ir individualius web sprendimus. SEO, dizainas, priežiūra. Nemokama konsultacija.",
  keywords: [
    "interneto svetainių kūrimas",
    "web dizainas",
    "e-komercija",
    "elektroninės parduotuvės",
    "SEO paslaugos",
    "svetainių kūrimas Lietuvoje",
    "internetinės svetainės kaina",
    "web svetainių gamyba",
    "elektroninės parduotuvės kūrimas",
    "reprezentacinės svetainės",
    "WordPress svetainės",
    "Laravel web sprendimai",
    "web konsultacija",
    "interneto svetainė nuo 299€",
    "responsive dizainas",
    "svetainių priežiūra",
    "Google SEO optimizavimas",
    "Lietuva",
  ],
  authors: [{ name: "WEBZY", url: "https://webzy.lt" }],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://webzy.lt"),
  alternates: {
    canonical: "/",
    languages: {
      lt: "/",
    },
  },
  openGraph: {
    title: "WEBZY - Profesionalios interneto svetainės",
    description:
      "Profesionalios interneto svetainių kūrimas nuo 299€. E-komercija, dizainas, SEO. Nemokama konsultacija.",
    type: "website",
    locale: "lt_LT",
    siteName: "WEBZY",
    url: "https://webzy.lt",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBZY - Profesionalios interneto svetainės",
    description:
      "Profesionalios interneto svetainių kūrimas nuo 299€. E-komercija, dizainas, SEO. Nemokama konsultacija.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "G-VXSLNJEHNL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WEBZY",
              url: "https://webzy.lt",
              logo: "https://webzy.lt/logo.svg",
              description:
                "Profesionalios interneto svetainių kūrimas nuo 299€. E-komercija, dizainas, SEO.",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
