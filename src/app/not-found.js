"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { HiHome } from "react-icons/hi";

const content = {
  lt: {
    title: "Puslapis nerastas",
    code: "404",
    heading: "Oi! Šis puslapis dingo.",
    message:
      "Atrodo, kad puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas. Galbūt jis iškeliavo į skaitmeninį užribį...",
    cta: "Grįžti į pradžią",
    suggestionsTitle: "Ką galite padaryti?",
    suggestions: [
      "Patikrinkite, ar nuoroda įvesta teisingai",
      "Grįžkite į pradinį puslapį",
      "Peržiūrėkite mūsų paslaugas",
      "Susisiekite su mumis, jei reikia pagalbos",
    ],
  },
  en: {
    title: "Page Not Found",
    code: "404",
    heading: "Oops! This page is gone.",
    message:
      "It seems the page you're looking for doesn't exist or has been moved. Perhaps it ventured into the digital beyond...",
    cta: "Back to Home",
    suggestionsTitle: "What you can do?",
    suggestions: [
      "Check if the URL is correct",
      "Return to the homepage",
      "Browse our services",
      "Contact us if you need help",
    ],
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "lt";
  const t = content[locale];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar locale={locale} />

      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Code */}
          <div className="relative mb-8">
            <div className="text-[12rem] md:text-[16rem] font-bold leading-none select-none">
              <span className="text-primary-600/10 dark:text-primary-400/10">4</span>
              <span className="text-primary-600/20 dark:text-primary-400/20">0</span>
              <span className="text-primary-600/10 dark:text-primary-400/10">4</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary-500/5 dark:bg-primary-400/5 animate-pulse" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            {t.heading}
          </h1>

          {/* Message */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            {t.message}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href={locale === "lt" ? "/" : "/en"}
              className="btn-primary inline-flex items-center gap-2"
            >
              <HiHome className="w-5 h-5" />
              {t.cta}
            </Link>
          </div>

          {/* Suggestions */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700/50">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t.suggestionsTitle}
            </h2>
            <ul className="space-y-3 text-left">
              {t.suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer locale={locale} />
      <CookieBanner />
    </main>
  );
}
