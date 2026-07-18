"use client";

import { useState, useEffect, useRef } from "react";
import { HiGlobe } from "react-icons/hi";
import { useLocale } from "./LocaleProvider";

export default function LanguageSwitcher() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [hrefs, setHrefs] = useState({ lt: "/", en: "/en" });
  const ref = useRef(null);

  useEffect(() => {
    const path = window.location.pathname;
    setHrefs({
      lt: path.replace(/^\/en(\/|$)/, "/") || "/",
      en: `/en${path === "/" ? "" : path}`,
    });
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = locale === "lt" ? "LT" : "EN";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        aria-label="Kalba / Language"
      >
        <HiGlobe className="w-5 h-5" />
        <span className="text-xs font-semibold uppercase">{current}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
          <a
            href={hrefs.lt}
            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
              locale === "lt"
                ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setOpen(false)}
          >
            <span className="text-base">🇱🇹</span>
            <span>Lietuvių</span>
            {locale === "lt" && <span className="ml-auto text-xs text-primary-600">●</span>}
          </a>
          <a
            href={hrefs.en}
            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
              locale === "en"
                ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setOpen(false)}
          >
            <span className="text-base">🇬🇧</span>
            <span>English</span>
            {locale === "en" && <span className="ml-auto text-xs text-primary-600">●</span>}
          </a>
        </div>
      )}
    </div>
  );
}
