import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "WEBZY - Profesionalios interneto svetainės ir web sprendimai",
  description:
    "Profesionalios interneto svetainės, e-komercijos ir kiti web sprendimai. Nuo 299€. Nemokama konsultacija.",
  keywords: [
    "interneto svetainės kūrimas",
    "web dizainas",
    "e-komercija",
    "elektroninės parduotuvės",
    "SEO paslaugos",
    "Lietuva",
  ],
  authors: [{ name: "WEBZY" }],
  openGraph: {
    title: "WEBZY - Profesionalios interneto svetainės",
    description:
      "Profesionalios interneto svetainės, e-komercijos ir kiti web sprendimai.",
    type: "website",
    locale: "lt_LT",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
